import { Product } from "@prisma/client";
import Link from "next/link";
import PriceTag from "./PriceTag";
import Image from "next/image";

interface ProductCardProps {
    product: Product
}
  

export default function ProductCard({product}: ProductCardProps){
    const isNew = Date.now()- new Date(product.createdAt).getTime() < 1000 *60 *60*24 *7
return(
   <Link href = {`/products/${product.id}`} className="card w-full bg-base-100 hover:shadow-x1 transition-shadow">
    <figure>
    <Image alt={product.name} className=" object-center h-48" width={800} height={400}  src={product.imageUrl}/>
    </figure>
    
    <div className="card-body">
    
    <h2 className="card-title">{product.name}</h2>
        {isNew && <div className="badge badge-secondary">NEW</div>}
     
    <p>{product.description}</p>
    <PriceTag price={product.price}/>
    </div>
   </Link>
);
}