import React from 'react'
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';
import {useStateValue} from "./StateProvider";
function Checkout() {
    const [{basket,user},dispatch]=useStateValue();
  return (
    <div className='checkout'>
        <div className="checkout__left">
            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Sports/June/MiniART/Category/phase2/Desktop-store-header_1.jpg" alt="" className="checkout__ad" />
            <div>
                <h3>Hello,{user.email}</h3>
                <h2 className="checkout__title">
                    Your shopping Basket
                </h2>

                {basket.map(item=>(
                    <CheckoutProduct
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                    />
                ))}

            </div>
        </div>
        <div className="checkout__right">
            <Subtotal/>
             
        </div>
    </div>
  )
}

export default Checkout