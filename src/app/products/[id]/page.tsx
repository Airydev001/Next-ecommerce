import { prisma } from "@/lib/db/prisma"
import { notFound } from "next/navigation"
import Image from "next/image";
import PriceTag from "@/components/PriceTag";
import { Metadata } from "next/dist/lib/metadata/types/metadata-interface";
import { cache } from "react";
interface ProductPageProps{
    params: {
        id: string,
    }
}
const getProduct = cache(async (id: string) => {
    const product = await prisma.product.findUnique({ where: { id } });
    if (!product) notFound();
    return product;
  });
  
export async function generateMetadata({
    params: { id },
  }: ProductPageProps): Promise<Metadata> {
    const product = await getProduct(id);
  
    return {
      title: product.name + " - Flowmazon",
      description: product.description,
      openGraph: {
        images: [{ url: product.imageUrl }],
      },
    };
}
// export default async function ProductPage(
//     {params: {id},
// }: ProductPageProps
// ){
//     const product = await prisma.product.findUnique({
//     where: {id}
// })
export default async function ProductPage(
    {params: {id},
}: ProductPageProps
){
   const product = await getProduct(id);


return(
    <div className =" gap-4 flex flex-col lg:flex-row lg:items-center">
<img  src={product.imageUrl}
alt={product.name}
width= {500}
height= {500}
className="object-center h-48 w-full rounded-lg"

/>

<div>
    <h1 className="text-5xl font-bold">{product.name}</h1>
<PriceTag price={product.price}className="mt-4"/>
<p className="py-6">{product.description}</p>
</div>
    </div>
)


}