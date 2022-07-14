import React from 'react'
import CheckOutProduct from './CheckoutProduct';
import './Payment.css' 
import { useStateValue } from './StateProvider';
import {Link} from "react-router-dom";
import {CardElement, useStripe,useElements} from "@stripe/react-stripe-js";

function Payment() {
    const [{basket,user},dispatch]=useStateValue();
    const stripe=useStripe();
    const element=useElements();
    const handleSubmit=e=>{

    }
    const handleChange=e=>{

    }
  return (
     
    <div className='payment'>
        <div className="payment__container">
            <h1>
                Checkout(<Link to="/checkout">{basket.length} items</Link>)
            </h1>
            {/* ps1 */}
            <div className="payment__section">
               <div className="payment__title">
                    <h3>Dilivery Address</h3>
                </div> 
                <div className="payment__address">
                <p>{!user?'Guest':user.email}</p>
                       <p>123 React Lane</p>
                       <p>Los Angeles, CA</p>
                </div>
            </div>
            {/* ps2 */}
            <div className="payment__section">
                <div className="payment__title">
                    <h3>Review items and delivery</h3>
                </div>
                <div className="payment__items">
                    {basket.map(item=>(
                        <CheckOutProduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            pricr={item.price}
                            rating={item.rating}
                        />
                    ))}
                </div>
            </div>
            {/* ps3 */}
            <div className="payment__section">
                <div className="payment__title">
                    <h3>Payment Method</h3>
                </div>
                <div className="payment__details">
                    <form onSubmit={handleSubmit}>
                        <CardElement onChange={handleChange}/>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Payment

