
import { useNavigate } from "react-router"
import { logoData } from "../../util/data"
import './header.css'
import MenuHeader from "./MenuHeader"
import { useContext } from "react"
import { Context } from "../../appContext/AppContext"
import { FaShoppingCart } from "react-icons/fa"
import ShowItemCart from "../cart/ShowItemCart"
import { RiFindReplaceLine } from "react-icons/ri"

export default function HeaderComponent() {
    const navigate = useNavigate()

    const {cartCount, showCart, setShowCart, getsearch, setGetSearch} =  useContext(Context)
    return (
        <>
            <div className="header">
                <div className="container">
                        <div className="top-header">
                            <div></div>
                            <div className="header-logo">
                                <img src={logoData} alt="" />
                            </div>
                            <div className="header-right">
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
                            <div className="icon-menu">
                                <div className="find">
                                    <div className="search"><input type="text" placeholder="Search ..." name='getsearch' value={getsearch} onChange={(e) => setGetSearch(e.target.value)} onClick={() => navigate('/search')}/></div>
                                    <span><RiFindReplaceLine className="find-item" onClick={() => navigate('/search')} /></span>
                                </div>
                            </div>
                        </div>
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