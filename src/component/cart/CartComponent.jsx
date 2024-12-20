import { useContext, useEffect, useState } from "react"
import { Context } from "../../appContext/AppContext"
import CartItem from "./CartItem"
import { useNavigate } from "react-router"
import { VND } from "../../util/convert"
import ToastNoticed from "../toastNoticed/ToastNoticed"



export default function CartComponent () {
    
    const navigate = useNavigate()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    const [city, setCity] = useState('')
    const [request, setRequest] = useState('')
    const {cartItems,SetCartItems, cartSubTotal, setShowNotication, } = useContext(Context)

    // tạo localstoryge
    var historyProducts = localStorage.getItem("historyBuyProducts")
    var custumerBuyProduct = historyProducts ? JSON.parse(historyProducts) : []

    // lịch sử mua hàng
    const [history, setHistory] = useState(custumerBuyProduct)

    useEffect(() => {
        localStorage.setItem("historyBuyProducts", JSON.stringify(history))
    }, [history])

    var products = []
    for (let i = 0; i< cartItems.length; i++) {
        let product = {
            name: cartItems[i].name,
            quantity: cartItems[i].quantity,
            price: cartItems[i].price,
            total: cartItems[i].price * cartItems[i].quantity
        }
        products.push(product)
    }


    let custumerLocal = {
        name: name,
        phone: phone,
        email: email,
        address: address,
        city: city,
        request: request,
        products: products,
        total: cartSubTotal
    }
    const handleOnsubmit = (e) => {
        e.preventDefault()
        setName('')
        setPhone('')
        setEmail('')
        setAddress('')
        setCity('')
        setRequest('')

        // sau khi submit sẽ thêm 1 phần tử vào localstoryge
        if (!history.includes(custumerLocal)) {
            setHistory((data) => [...data, custumerLocal])
        }

        SetCartItems([])

        // tạo khoảng thời gian để có thể lưu trữ vào localstorage trước khi chuyển trang
        setTimeout(() => {
            navigate('/')  
        }, 100);

        setShowNotication(true)
        setShowNotication(true)
    }



    return (
        <>
            {/* <ToastNoticed></ToastNoticed> */}

            <div className="cart">
                <div className="container">
                    <div className="cart-flex">
                        <div className="cart-left">
                            <p>Delivery</p>
                            <form onSubmit={handleOnsubmit} action="#">
                                <div className="custumer">
                                    <h4>Thông tin khách hàng</h4>
                                    <input type="text" name='name' id='name' value={name} required placeholder="Full Name" onChange={(e) => setName(e.target.value)} /> <br />
                                    <input type="text" name="phone" id='phone' value={phone} required placeholder="Your Phone" onChange={(e) => setPhone(e.target.value)} /> <br />
                                    <input type="email" name="email" id='email' value={email} required placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                                </div>
 
                                <div className="deliver">
                                    <h4>Thông tin nhận hàng</h4>
                                    <span>Quốc gia: </span>
                                    <span>Việt Nam</span> <br />
                                    <span>Địa Chỉ: *</span>
                                    <input type="text" name="address" id="address" required value={address} onChange={(e) => setAddress(e.target.value)}  placeholder='Address' />
                                    {/* <h4>Tỉnh / Thành Phố *</h4> */}
                                    <input type="text" name='city' id='city' required value={city} onChange={(e) => setCity(e.target.value)} placeholder='City' />
                                    {/* <h4>Thông tin bổ sung</h4> */}
                                    <p>Order Note:</p>
                                    <input type="text" name='request' id='request' value={request} onChange={(e) => setRequest(e.target.value)} placeholder='Order Note' />
                                    {/* <h4>Phương thức thanh toán</h4> */}
                                </div>
                                
                                <br />
                                <button className="button" type="submit">Buy Now</button>
                            </form>
                        </div>
                        <div className="cart-right">
                            {
                                cartItems?.length > 0 && (
                                    <div>
                                        {
                                            cartItems?.map((value, key) => (
                                                <div key={key} className="cart-products">
                                                    <CartItem data={value}></CartItem>
                                                </div>
                                            ))
                                        }
                                        <div className="total">
                                            <div><h5>Total:</h5></div>
                                            <div><h5 className="color-red">{VND.format(cartSubTotal)}</h5></div> 
                                        </div>

                                    </div>
                                )
                            }

                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}