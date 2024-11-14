import { useContext, useEffect, useState } from "react"

import './product.css'
import { Badge } from "react-bootstrap"
import { FaStar } from "react-icons/fa"
import ItemProduct from "./ItemProduct"
import { Context } from "../../appContext/AppContext"
import { VND } from "../../util/convert"
import { useLocation } from "react-router"



export default function ProductsComponent() {
    const [star, setStar] = useState(5)
    const [showStar, setShowStar] = useState(false)
    const [data, setData] = useState([])
    const [listData, setListdata] = useState([])

    const {getDataProduct, getListDataProducts} = useContext(Context)


    useEffect(() => {
        setData(getDataProduct)
        setListdata(getListDataProducts)
    }, [getDataProduct, getListDataProducts])

    let filters = listData.filter((item) => item.id != data.id)

    const handleStar = () => {
        if (showStar) {
            setShowStar(false)
        } else {
            setShowStar(true)
        }
    }

    // lắng nghe sự thay đổi, khi có bất kì sự thay đổi nào thì hiển thị về vị trí đầu trang
    const location = useLocation()

    useEffect(() =>{
        window.scrollTo(0, 0)
    }, [location])

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
                            <img src={data.image} alt={data.name} />
                        </div>
                        <div className="product-content">
                            <div className="product-infor">
                                <h4><Badge bg="primary">{data.name}</Badge></h4>
                                <p><Badge pill bg="secondary">Detail</Badge><span> {data.description}</span></p>
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
                                    <span className="number">{VND.format(data.price)}</span>
                                </p>
                                <button>Add To Cart</button>
                            </div>
                        </div>
                    </div>

                    <div className="title-text">
                        <h3><Badge bg="secondary">Sản phẩm liên quan</Badge></h3>
                    </div>

                    <div className="products-list">
                        {
                            filters?.length > 0 && filters?.map((value, key) => (
                                <div className="product-list-item" key={key}>
                                    <ItemProduct data={value} listDataProducts={listData}></ItemProduct>
                                </div>
                            ))
                        }
                    </div>

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