import FormSubmitButton from "@/components/FormSubmitButton";
import { prisma } from "@/lib/db/prisma";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation"
import { authOptions } from "../api/auth/[...nextauth]/route";

export const metadata ={
    title: "Add Product - Flowmazon"
}

  async  function  addProduct(formData: FormData){
"use server";
const session = await getServerSession(authOptions);
const name = formData.get("name")?.toString();
const description = formData.get("description")?.toString();
const imageUrl = formData.get('imageUrl')?.toString();
const price = Number(formData.get("price") || 0);


if(!name || !description || !imageUrl || !price){
   throw Error("Missing required fields") 
}
//remeber to remove this is add product automatically.
//remove it later



redirect("/")
  }
export default async function AddProductPage(){

    const session = await getServerSession(authOptions)

    if(!session){
        redirect("/api/auth/signin?callbackUrl=/add-product");
    }
return (
    <div>
       <h1 className="custom-h1 text-lg mb-3 font-bold">Add Product</h1> 
    <form action={addProduct}> 
        <input
        required
        className=" customized-input mb-3 w-full input input-bordered"
    name="name"
    placeholder="Name"
        />
        <textarea required name="description"
        placeholder="Description"
        className="  customized-input textarea-bordered textarea mb-3 w-full"

        
        />
         <input
        required
        className="  customized-input input-bordered input mb-3 w-full "
    name="imageUrl"
    placeholder="image URL"
    type="url"
        />
        <input
        required
        className="  customized-input mb-3 w-full input input-bordered"
    name="price"
    placeholder="price"
    type="number"
        />
        <FormSubmitButton className="btn-block" >Add Product</FormSubmitButton>
    </form>
    </div>
)
}