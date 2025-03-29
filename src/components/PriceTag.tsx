import { formatPrice } from "@/lib/format"

interface PriceTagprops {
    price: number 
className?: string
}

export default function PriceTag({
    price,className} :PriceTagprops){
 
        return <span className={
    `badge ${className}`
        }>{formatPrice(price)}</span>
}