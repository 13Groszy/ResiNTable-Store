"use client"

import { Product } from "@/types";
import Currency from "./ui/currency";
import Button from  "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import useCart from "@/hooks/use-cart";

interface InfoProps{
    data: Product;
}

const Info: React.FC<InfoProps> = ({data}) => {

    const cart = useCart();

    const onAddToCart = () => {
        cart.addItem(data);
    }
    return ( 
        <div>
            <h1 className="text-3xl font-bold text-gray-900">{data.name}</h1>
            <div className="mt-3 flex items-end justify-between">
                <p className="text-2xl text-gray-900">
                    <Currency value={data?.price} />
                </p>
            </div>
            <hr className="my-4" />
            <div className="flex flex-col gap-y-6">
                <div className="flex items-center gap-x-4">
                    <h3 className="font-semibold text-black">Size:</h3>
                    <div>
                        {data?.size?.name}
                    </div>
                </div>
                <div className="flex items-center gap-x-4">
                    <h3 className="font-semibold text-black">Color:</h3>
                    <div className="flex gap-2">
                        <div className="w-6 h-6 rounded-full border border-black" style={{ backgroundColor : data?.color?.value}} />
                        <p>{data?.color?.name}</p>
                    </div>
                </div>
            </div>
            <div className="mt-10 flex items-center gap-x-3">
                <Button onClick={onAddToCart} className="flex items-center gap-x-2">
                    Add to Cart
                    <ShoppingCart />
                </Button>
            </div>
        </div>
        );
}
 
export default Info;