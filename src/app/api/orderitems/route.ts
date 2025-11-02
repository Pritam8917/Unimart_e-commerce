import { getServerSession } from "next-auth/next";  
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { NextResponse } from "next/server";
import { connect } from "@/db/dbConfig";
import Order from "@/models/orders.model";
import Cart from "@/models/cart.models";
await connect();
export async function POST(req: Request) {
    try {
        // step 1 : Authenticate user
        const session  = await getServerSession(authOptions);
        if(!session?.user?.email){
            return NextResponse.json({error:"Unauthorized"},{status:401});
        }

        // step 2 : Get order details from request body
        const{ shippingAddress,paymentMethod} = await req.json();
        if(!shippingAddress || !paymentMethod){
            return NextResponse.json({message:"All fields are required"},{status:400});
        }

        // step 3 : fetch cart items from user's cart
        const cart = await Cart.findOne({userId:session.user.email});
        if(!cart || cart.items.length === 0){
            return NextResponse.json({message:"Cart is empty"},{status:400});
        }

        // step 4 : calculate order totals
        const subtotal = cart.items.reduce((sum:any,item:any) => sum + item.price * item.quantity,0);
        const shippingCost = subtotal > 100 ? 0 : 50; 
        const tax = subtotal * 0.1; 
        const total = subtotal + shippingCost + tax;

        // step 5 : create new order item
        const newOrder = await Order.create({
            userId: session.user.email,
            items: cart.items.map((item:any) => ({
                productId: item.id,
                name: item.name,
                quantity: item.quantity,
                price: item.price,
                image: item.image,
            })),
            shippingAddress,
            paymentMethod,
            total,
            shippingCost,
            taxAmount: tax,
            status:"Delivered"
        });

        // step 6 : clear user's cart
        cart.items = [];
        await cart.save();
        
        // step 7 : return success response with order details
        return NextResponse.json({message:"Order placed successfully", order:newOrder},{status:201});
    } catch (error) {
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}