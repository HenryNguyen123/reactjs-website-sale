import { useState } from "react"

import './product.css'
import { Badge } from "react-bootstrap"
import { FaStar } from "react-icons/fa"
import ItemProduct from "./ItemProduct"



export default function ProductsComponent() {
    const [star, setStar] = useState(5)
    const [showStar, setShowStar] = useState(false)

    const handleStar = () => {

        
        if (showStar) {
            setShowStar(false)
        } else {
            setShowStar(true)
        }
    }

    const handleOnsubmit = (e) => {
        e.preventDefault()
        setShowStar(false)

        if (star > 5) {
            setStar(5)
        }
        if (star < 1) {
            setStar(1)
        }

    }

    return (
        <>
            <div className="product">
                <div className="container">
                    <div className="product-container">
                        <div className="image">
                            <img src="https://image.donghohaitrieu.com/wp-content/uploads/2023/09/T006.407.16.033.00-1.jpg" alt="" />
                        </div>
                        <div className="product-content">
                            <div className="product-infor">
                                <h4><Badge bg="primary">Name</Badge></h4>
                                <p><Badge pill bg="secondary">Detail</Badge><span> thông tin</span></p>
                            </div>
                            <div className="product-star">
                                <p onClick={handleStar}>Đánh giá: <span>{star}<FaStar /></span></p>
                            </div>
                            <div className="quantity">
                                <p>
                                    <span className="desc">-</span>
                                    <span className="number">1</span>
                                    <span className="plus">+</span>
                                </p>
                            </div>
                            <div className="price-button">
                                <p>
                                    <span className="price">Price: </span>
                                    <span className="number">number</span>
                                </p>
                                <button>Add To Cart</button>
                            </div>
                        </div>
                    </div>

                    <div className="title-text">
                        <h3><Badge bg="secondary">Sản phẩm liên quan</Badge></h3>
                    </div>

                    <ItemProduct></ItemProduct>

                </div>
            </div>

            {
                showStar && (<div className="input-star">
                    <form onSubmit={handleOnsubmit} action="">
                        <input type="text" name='star' value={star} onChange={(e) => setStar(e.target.value)} />
                        <button type='submit'>Đánh giá sản phẩm</button>
                    </form>
                </div>)
            }

        </>
    )
}