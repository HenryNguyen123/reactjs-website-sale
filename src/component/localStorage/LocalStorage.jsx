import { useState } from "react"
import { VND } from '../../util/convert';

import './local.css'
import { IoCloseSharp } from "react-icons/io5";




export default function LocalStorage () {

    const [showProducts, setShowProducts] = useState(false)
    const [itemProduct, setItemProduct] = useState([])
    const getLocalStorage = JSON.parse(localStorage.getItem("historyBuyProducts"))

    const handleButton = (data) => {
        setShowProducts(true)
        setItemProduct(data)
    }
    // console.log('itemProduct: ' + itemProduct.products[0].name)
    return (
        <>
            <div className="local">
                <div className="container">
                    <div className="local-container">
                        <div className="local-title">
                            <ul>
                                <li><span>Customer name</span></li>
                                <li><span>Phone</span></li>
                                <li><span>Email</span></li>
                                <li><span>Address</span></li>
                                <li><span>City</span></li>
                                <li><span>Request</span></li>
                                <li><span>Products</span></li>
                                <li><span>Total</span></li>
                            </ul>
                        </div>
                        <div className="local-item">
                            {
                                getLocalStorage?.map((value, key) => (
                                    <ul key={key}>
                                        <li>{value.name}</li>
                                        <li>{value.phone}</li>
                                        <li>{value.email}</li>
                                        <li>{value.address}</li>
                                        <li>{value.city}</li>
                                        <li>{value.request}</li>
                                        <li className="button"><button onClick={() => handleButton(value)}>Show</button></li>
                                        <li>{VND.format(value.total)}</li>
                                    </ul>
                                ))
                            }
                        </div>


                    </div>
                </div>
            </div>

            {
                showProducts && (
                    <div className="show-local">
                        <div className="container">
                            <div className="products">
                                <div className="products-header">
                                    <div></div>
                                    <div className="custumer-name">
                                        <h4>{itemProduct.name}</h4>
                                    </div>
                                    <div className="close" onClick={() => setShowProducts(false)}>
                                        <h4><IoCloseSharp /></h4>
                                    </div>
                                </div>
                                <div className="products-title">
                                    <ul>
                                        <li>Name</li>
                                        <li>Quantity</li>
                                        <li>Price</li>
                                        <li>Total</li>
                                    </ul>
                                </div>

                                <div className="products-item">
                                    {
                                        itemProduct?.products?.length > 0 && itemProduct?.products?.map((value, key) => (
                                            <ul key={key}>
                                                <li>{value.name}</li>
                                                <li>{value.quantity}</li>
                                                <li>{VND.format(value.price)}</li>
                                                <li>{VND.format(value.total)}</li>
                                            </ul>

                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    )
}