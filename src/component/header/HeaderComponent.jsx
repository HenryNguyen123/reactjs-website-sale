
import { useNavigate } from "react-router"
import { logoData } from "../../util/data"
import './header.css'
import MenuHeader from "./MenuHeader"
import { useContext } from "react"
import { Context } from "../../appContext/AppContext"
import { FaShoppingCart } from "react-icons/fa"
import ShowItemCart from "../cart/ShowItemCart"

export default function HeaderComponent() {
    const navigate = useNavigate()

    const {cartCount, showCart, setShowCart} =  useContext(Context)
    return (
        <>
            <div className="header">
                <div className="container">
                    {/* <div className="position"> */}
                        <div className="top-header">
                            <div style={{width: '200px'}}></div>
                            <div className="header-logo">
                                <img src={logoData} alt="" />
                            </div>
                            <div className="header-right">
                                <div className="search"><input type="text" placeholder="Search ..." onClick={() => navigate('/search')}/></div>
                                <div className="cart" onClick={() => setShowCart(true)}>
                                    <div className="cart-left">
                                        <FaShoppingCart />
                                    </div>
                                    <div className="cart-right">
                                        <span>{cartCount}</span>
                                    </div>    
                                </div>
                            </div>
                        </div>
                        <div className="header-menu">
                            <div className="header-list-menu">
                                <MenuHeader/>
                            </div>
                        </div>
                    {/* </div> */}
                </div>

                <div className="show-cart">
                    {
                        showCart && <ShowItemCart></ShowItemCart>
                    }
                </div>
            </div>

        </>
    )
}