import ProductCard from "@/components/ProductCard";
import { prisma } from "@/lib/db/prisma";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const products = await prisma.product.findMany({
    orderBy: {
      id: "desc",
    },
    take: 10,
  });
  return (
    <div >
{/* <ProductCard product={products[0]} /> */}
<div  className="hero rounded-xl bg-base-200">
  <div className = "hero-content flex-col lg:flex-row">
  <Image  src={products[0].imageUrl}
  alt={products[0].name}
  width={400}
  height={300}
  className="object-center h-48 w-full max-w-sm rounded-l-lg shadow 2xl"
  priority
  />

  <div>
    <h1 className="text-5xl font-bold">{
      products[0].name}
    </h1>
    <p className = "py-6">{products[0].description}</p>
  <Link href={`/product/${products[0].id}`} className="btn-primary btn" >Check it out </Link>
  
  </div>

  </div>
 
</div>
<div className ="my-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
  {
    products.slice(1).map(product =>(
      <ProductCard key={product.id} product={product} />
    ))
  }
</div>
    </div>
  );
}
