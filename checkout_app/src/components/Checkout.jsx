import React, {useState, useEffect, useRef} from "react";
import Total from "./Total";
import Promotion from "./Promotion";

const Checkout = () => {
    const cart =[
        {id:1, name:"Mobile", price:600},
        {id:2, name:"Laptop", price:1000},
        {id:3, name:"Speaker", price:500},
    ];
    
    const mockPromotions ={
        SAVE10: 10,
        SAVE40: 40,
        SAVE70: 70,
    };
    
   
    const [couponCode, setCouponCode] = useState("")
    const [discount, setDiscount] = useState(0);
    const inputEl = useRef(null);

    const focusInput = () => {
        console.log(inputEl.current);
        inputEl.current?.focus();
    }


    useEffect(
        focusInput,[]
    );

    const applyCoupon = () =>{
        const validCoupon = mockPromotions[couponCode]
        if(validCoupon !== undefined){
            setDiscount(validCoupon)
        } else {
            setDiscount(0)
            alert('Invalid Coupon Code')
        }
    }

    const calculateTotal = () => {
        const subtotal = cart.reduce((acc, item)=>acc + item.price, 0)
        return subtotal - discount;
    }
    

    return (
        <div>
            <h1>Checkout</h1>
            <Total total={calculateTotal()} />
            <Promotion inputEl={inputEl} couponCode={couponCode} setCouponCode={setCouponCode} applyCoupon={applyCoupon}></Promotion>
            <h2>Cart</h2>
            <ul>
                {cart.map(item => (
                    <li key={item.id}>{`${item.name} - $${item.price}`}</li>
                ))}
            </ul>
        </div>
    )
}

export default Checkout