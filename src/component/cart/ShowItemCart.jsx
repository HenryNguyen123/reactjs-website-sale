import { useContext } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { Context } from "../../appContext/AppContext";
import './cart.css'
import CartItem from "./CartItem";
import { VND } from "../../util/convert";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router";



export default function ShowItemCart () {

    const navigate = useNavigate()
    const {setShowCart, cartSubTotal, cartItems} = useContext(Context)

    return (
        <>
            <div className="items-cart">
                <div className="items-cart-container">
                    <div className="cart-content">
                        <div className="header-cart">
                            <div className="cart-title">
                                <h4>CART</h4>
                            </div>
                            <div className="cart-close" onClick={() => setShowCart(false)}>
                                <h4><IoCloseSharp /></h4>
                            </div>
                        </div>

                        {
                            cartItems.length <= 0 && (
                                <div className="not-found">
                                    <h3>Your cart is currently empty.</h3>
                                    <ul onClick={() => {
                                                navigate('/')
                                                setShowCart(false)
                                            }}>
                                        <li>Best Selling</li>
                                        <li><FaArrowRight /></li>
                                    </ul>
                                </div>

                            )
                        }

                        {
                            cartItems.length > 0 && (
                                <div className="flex">
                                    {
                                        cartItems?.map((value, key) => (
                                            <div className="cart-items" key={key}>
                                                <CartItem data={value}></CartItem>
                                            </div>

                                        ))
                                    }
                                    <div className="subtotal">
                                        <div className="subtotat-text">
                                            <p>Free Shipping</p>
                                        </div>
                                        <div className="total">
                                            <h5>SubTotal</h5>
                                            <span>{VND.format(cartSubTotal)}</span>
                                        </div>
                                    </div>
                                    <div className="check-out" onClick={() => {
                                                navigate('/cart')
                                                setShowCart(false)
                                            }}>
                                        <h5>Check Out</h5>
                                    </div>
                                </div>
                            )
                        }

                    </div>
                </div>
            </div>
        </>
    )
}