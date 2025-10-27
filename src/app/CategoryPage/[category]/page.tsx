"use client";
import { useParams } from "next/navigation";
import Navbar from "@/app/components/Navbar";
import CategoryNav from "@/app/components/CategoryNav";
import Footer from "@/app/components/Footer";
import ProductCard from "@/app/components/ProductCard";

const CategoryPage = () => {
  const params = useParams();
  const categoryParam = params?.category;
  const category = Array.isArray(categoryParam)
    ? categoryParam[0]
    : categoryParam;

  // Category-specific image URLs
  const categoryImages: Record<string, string[]> = {
    electronics: [
      "https://images.unsplash.com/photo-1484788984921-03950022c9ef?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFwdG9wc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",

      "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bGFwdG9wc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
      "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/o/k/v/-original-imah34gxnuk2n2ek.jpeg?q=70",
      "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/n/v/e/-original-imahft5gfchxyewy.jpeg?q=70",
      "https://images.unsplash.com/photo-1589492477829-5e65395b66cc?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bW9iaWxlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
      "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2Ftc3VuZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
    ],
    furniture: [
      "https://plus.unsplash.com/premium_photo-1670076513880-f58e3c377903?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZnVybml0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
      "https://images.unsplash.com/photo-1487015307662-6ce6210680f1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZ1cm5pdHVyZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmVkfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZ1cm5pdHVyZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
      "https://images.unsplash.com/photo-1592078615290-033ee584e267?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGZ1cm5pdHVyZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
      "https://images.unsplash.com/photo-1578898887932-dce23a595ad4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJlZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
      "https://images.unsplash.com/photo-1565791380713-1756b9a05343?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dGFibGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
    ],
    beauty: [
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1509021436665-8f07dbf5bf1d?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&h=500&fit=crop",
    ],
    fashion: [
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFzaGlvbnxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
      "https://plus.unsplash.com/premium_photo-1683817138481-dcdf64a40859?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZmFzaGlvbnxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
      "https://plus.unsplash.com/premium_photo-1708110920881-635419c3411f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGZhc2hpb258ZW58MHwwfDB8fHww&auto=format&fit=crop&q=60&w=600",
      "https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGZhc2hpb258ZW58MHwwfDB8fHww&auto=format&fit=crop&q=60&w=600",
      "https://plus.unsplash.com/premium_photo-1708274926468-f3ef322edffc?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fGZhc2hpb258ZW58MHwwfDB8fHww&auto=format&fit=crop&q=60&w=600",
      "https://plus.unsplash.com/premium_photo-1708110921381-5da0d7eb2e0f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGZhc2hpb258ZW58MHwwfDB8fHww&auto=format&fit=crop&q=60&w=600",
      "https://images.unsplash.com/photo-1614252368727-99517bc90d7b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZmFzaGlvbiUyMG1lbnxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
      "https://plus.unsplash.com/premium_photo-1688497830977-f9ab9f958ca7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGZhc2hpb24lMjBtZW58ZW58MHwwfDB8fHww&auto=format&fit=crop&q=60&w=600",
      "https://plus.unsplash.com/premium_photo-1733701621287-f1023730af18?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fGZhc2hpb24lMjBtZW58ZW58MHwwfDB8fHww&auto=format&fit=crop&q=60&w=600",
      "https://plus.unsplash.com/premium_photo-1687294575706-1f1bb95ea822?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGZhc2hpb24lMjBtZW58ZW58MHwwfDB8fHww&auto=format&fit=crop&q=60&w=600",
      "https://images.unsplash.com/photo-1688198911740-77dde4d0c5d6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fGZhc2hpb24lMjBtZW58ZW58MHwwfDB8fHww&auto=format&fit=crop&q=60&w=600",
    ],
    books: [
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJvb2t8ZW58MHwwfDB8fHww&auto=format&fit=crop&q=60&w=600",
      "https://plus.unsplash.com/premium_photo-1682125773446-259ce64f9dd7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fGJvb2t8ZW58MHwwfDB8fHww&auto=format&fit=crop&q=60&w=600",
      "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fGJvb2t8ZW58MHwwfDB8fHww&auto=format&fit=crop&q=60&w=600",
      "https://images.unsplash.com/photo-1618365908648-e71bd5716cba?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fGJvb2t8ZW58MHwwfDB8fHww&auto=format&fit=crop&q=60&w=600",
      "https://images.unsplash.com/photo-1509021436665-8f07dbf5bf1d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fGJvb2t8ZW58MHwwfDB8fHww&auto=format&fit=crop&q=60&w=600",
      "https://images.unsplash.com/photo-1630343710506-89f8b9f21d31?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fGJvb2t8ZW58MHwwfDB8fHww&auto=format&fit=crop&q=60&w=600",
      "https://images.unsplash.com/photo-1491841651911-c44c30c34548?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njh8fGJvb2t8ZW58MHwwfDB8fHww&auto=format&fit=crop&q=60&w=600",
      "https://images.unsplash.com/photo-1593340010859-83edd3d6d13f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODN8fGJvb2t8ZW58MHwwfDB8fHww&auto=format&fit=crop&q=60&w=600",
      "https://images.unsplash.com/photo-1702285630048-0594da47cf4e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGJvb2slMjBzaW5nbGV8ZW58MHwwfDB8fHww&auto=format&fit=crop&q=60&w=600",
      "https://images.unsplash.com/photo-1555236905-32b368f020af?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJvb2slMjBzaW5nbGV8ZW58MHwwfDB8fHww&auto=format&fit=crop&q=60&w=600",
      "https://images.unsplash.com/photo-1475855108103-e43b88c99052?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGJvb2slMjBzaW5nbGV8ZW58MHwwfDB8fHww&auto=format&fit=crop&q=60&w=600",
    ],
    toys: [
      "https://media.istockphoto.com/id/183804142/photo/crane.webp?a=1&b=1&s=612x612&w=0&k=20&c=hp9h_ECSpn78Zv5ay8ds5udyoSPBczCnZsU8dipSpww=",
      "https://media.istockphoto.com/id/1641521847/photo/green-dancing-cactus-tree-toys-for-children-isolated-on-white-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=bEdv0LjEsq-ZdQ2fBdGlXcYFI63r-zfPiioOFXA5U5o=",
      "https://images.unsplash.com/photo-1675638719161-00a19be91c2e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXxIeFoxY2dnX29COHx8ZW58MHx8fHx8&auto=format&fit=crop&q=60&w=600",
      "https://images.unsplash.com/photo-1556012018-50c5c0da73bf?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHRveXxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
      "https://images.unsplash.com/photo-1582845512747-e42001c95638?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRveXxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
      "https://plus.unsplash.com/premium_photo-1661558951515-47f7706fd9c6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHRveXxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
      "https://images.unsplash.com/photo-1612355524120-462e49e4ffe6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHRveXxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
      "https://images.unsplash.com/photo-1611604548018-d56bbd85d681?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fHRveXxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
      "https://images.unsplash.com/photo-1517686748843-bb360cfc62b3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fHRveXxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
      "https://images.unsplash.com/photo-1456082902841-3335005c3082?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fHRveXxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
    ],
    watches: [
      "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2F0Y2h8ZW58MHwwfDB8fHww&auto=format&fit=crop&q=60&w=600",
      "https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d2F0Y2h8ZW58MHwwfDB8fHww&auto=format&fit=crop&q=60&w=600",
      "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2F0Y2h8ZW58MHwwfDB8fHww&auto=format&fit=crop&q=60&w=600",
      "https://images.unsplash.com/photo-1434056886845-dac89ffe9b56?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2F0Y2h8ZW58MHwwfDB8fHww&auto=format&fit=crop&q=60&w=600",
      "https://images.unsplash.com/photo-1609587312208-cea54be969e7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2F0Y2h8ZW58MHwwfDB8fHww&auto=format&fit=crop&q=60&w=600",
      "https://images.unsplash.com/photo-1524592094714-0f0654e20314?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHdhdGNofGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
      "https://images.unsplash.com/photo-1539874754764-5a96559165b0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHdhdGNofGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
      "https://images.unsplash.com/photo-1639006570490-79c0c53f1080?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHdhdGNofGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
      "https://images.unsplash.com/photo-1600003014755-ba31aa59c4b6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fHdhdGNofGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
      "https://images.unsplash.com/photo-1612817159623-0399784fd0ce?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fHdhdGNofGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
      "https://images.unsplash.com/photo-1670404160620-a3a86428560e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fHdhdGNofGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
      "https://images.unsplash.com/photo-1703505841379-2f863b201212?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fHdhdGNofGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
    ],
    computers: [
      "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGN8ZW58MHwwfDB8fHww&auto=format&fit=crop&q=60&w=600",
      "https://images.unsplash.com/photo-1587831990711-23ca6441447b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGN8ZW58MHwwfDB8fHww&auto=format&fit=crop&q=60&w=600",
      "https://images.unsplash.com/photo-1625842268584-8f3296236761?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBjfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
      "https://images.unsplash.com/photo-1512729343400-4fcf83a18f72?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHBjfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
      "https://images.unsplash.com/photo-1551033541-2075d8363c66?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fHBjfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
      "https://images.unsplash.com/photo-1636489948870-058e57b5f7d9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fHBjfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
      "https://images.unsplash.com/photo-1598057076865-c67fefd248d3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fHBjfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
      "https://plus.unsplash.com/premium_photo-1661578367971-d38d3d277b53?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTd8fHBjfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
      "https://images.unsplash.com/photo-1590212151175-e58edd96185b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzB8fHBjfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
      "https://plus.unsplash.com/premium_photo-1678565546519-199bd54cf7d9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzN8fHBjfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
      "https://images.unsplash.com/photo-1614624532983-4ce03382d63d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjJ8fHBjfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
      "https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTR8fHBjfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
    ],
    kitchen: [
      "https://images.unsplash.com/photo-1570643509348-4fe54c998566?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Q2hlZiVFMiU4MCU5OXMlMjBrbmlmZXxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
      "https://images.unsplash.com/photo-1624811533744-f85d5325d49c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Q3V0dGluZyUyMGJvYXJkfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
      "https://images.unsplash.com/photo-1590759485285-0e5c13ebba50?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Q29sYW5kZXJ8ZW58MHwwfDB8fHww&auto=format&fit=crop&q=60&w=600",
      "https://images.unsplash.com/photo-1611255534761-de0f80f0152c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fFdoaXNrfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
      "https://images.unsplash.com/photo-1612549224441-2e25903372d1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8U3BhdHVsYXxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
      "https://images.unsplash.com/photo-1610505127058-2ed68ad7d21e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8VG9uZ3N8ZW58MHwwfDB8fHww&auto=format&fit=crop&q=60&w=600",
      "https://media.istockphoto.com/id/813338420/photo/opening-a-beer.webp?a=1&b=1&s=612x612&w=0&k=20&c=2Gkv3MJy0hAKr_Tt3z7YMOHn70NcMeOT-mC_qELNTNI=",
      "https://images.unsplash.com/photo-1726153148717-cdf427a0f4d1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QmFraW5nJTIwc2hlZXR8ZW58MHwwfDB8fHww&auto=format&fit=crop&q=60&w=600",
      "https://media.istockphoto.com/id/1734736310/photo/a-deep-indian-pan-pot-on-the-lpg-stove-with-blue-flames-on-in-the-kitchen.webp?a=1&b=1&s=612x612&w=0&k=20&c=R9Lg6YkPLjhI1u1Faw9BPYA-klQfSlys8ZvipSKHNMs=",
    ],
  };

  const images = categoryImages[category?.toLowerCase() || ""] || [];

  // Mock products based on category
  const products = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    name: `${category || "Product"} ${i + 1}`,
    price: Math.floor(Math.random() * 500) + 50,
    originalPrice: Math.floor(Math.random() * 700) + 100,
    image: images[i % images.length] || "https://via.placeholder.com/500",
    rating: Math.floor(Math.random() * 2) + 4,
  }));

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <CategoryNav />

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 capitalize">
          {category || "Products"}
        </h1>

        {products.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {products.map((products) => (
              <ProductCard key={products.id} {...products} />
            ))}
          </div>
        ) : (
          <p className="text-gray-500 text-center mt-10">No products found.</p>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default CategoryPage;
