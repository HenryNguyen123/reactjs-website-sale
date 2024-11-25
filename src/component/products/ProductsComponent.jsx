import { useContext, useEffect, useState } from "react"

import './product.css'
import { Badge } from "react-bootstrap"
import { FaStar } from "react-icons/fa"
import ItemProduct from "./ItemProduct"
import { Context } from "../../appContext/AppContext"
import { VND } from "../../util/convert"
import { useLocation } from "react-router"
import { IoCloseSharp } from "react-icons/io5"


export default function ProductsComponent() {
    const [star, setStar] = useState(5)
    const [showStar, setShowStar] = useState(false)
    const [data, setData] = useState([])
    const [listData, setListdata] = useState([])
    const [quantity, setQuantity] = useState(1)

    const [showImage, setShowImage] = useState(false)


    const {getDataProduct, getListDataProducts, handleAddToCart, handleToCart} = useContext(Context)


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

    const handleOnclickDesc = () => {
        setQuantity(()=>{
            if (quantity <= 1 ){
                return 1
            } 
            return quantity -1
        })
    }

    const handleOnclickPlus = () => {
        setQuantity( quantity + 1)
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

    // const indexImage = data.image.indexOf(item => item.id === data.image.id )
    const [firstImage, setFirstImage] = useState('')
    const [listFilterImage, setListFilterImage] = useState([])
    const handleImage = () => {
        for (let i = 0; i< data?.image?.length; i++) {
            let firstImg = data?.image?.[0].img
            setFirstImage(firstImg)
            // if (firstImg) {
            let filterImage = data?.image?.filter(item => item.img !== firstImg)
            setListFilterImage(filterImage)
            // }
        }
    }

    const handleOncickImg = (imgItem) => {
        // for (let i = 0; i< data?.image?.length; i++) {
            let filterImage = data?.image?.filter(item => item.img !== imgItem.img)
            setListFilterImage(filterImage)
            setFirstImage(imgItem.img)

        // }
    }

    useEffect(() => {
        handleImage()
    }, [data])



    return (
        <>
            <div className="product">
                <div className="container">
                    <div className="product-container">
                        <div className="image">
                            <img src={firstImage} alt={data.name} onClick={() => setShowImage(true)}/>
                            <div className="fiter-img">
                                {
                                    listFilterImage?.length > 0 && listFilterImage.map((value, key) => (
                                        <div key={key} className="image-item" onClick={() => handleOncickImg(value)}>
                                            <img src={value.img} alt="" />
                                        </div>
                                    
                                    ))
                                }
                            </div>
                        </div>
                        <div className="product-content">
                            <div className="product-infor">
                                <h4><Badge bg="primary">{data.name}</Badge></h4>
                                <p><Badge pill bg="secondary">Detail</Badge><span> {data.detail}</span></p>
                            </div>
                            <div className="product-star">
                                <p onClick={handleStar}>Đánh giá: <span>{star}<FaStar /></span></p>
                            </div>
                            <div className="quantity">
                                <p>
                                    <span className="desc" onClick={handleOnclickDesc}>-</span>
                                    <span className="number">{quantity}</span>
                                    <span className="plus" onClick={handleOnclickPlus}>+</span>
                                </p>
                            </div>
                            <div className="price-button">
                                <p>
                                    <span className="price">Price: </span>
                                    <span className="number">{VND.format(data.price)}</span>
                                </p>
                                <button onClick={() => handleAddToCart( data , quantity)}>Add To Cart</button>
                                <button className="buy-now" onClick={() => handleToCart( data , quantity)}>Buy Now</button>
                            </div>
                        </div>
                    </div>

                    <div className="product-detail">
                        <div className="product-detail-title">
                            <h4>PRODUCT DETAILs</h4>
                        </div>
                        <div className="product-detail-text">
                            <p>{data.detail}</p>
                            <p className="strong">{data.description}</p>
                        </div>
                    </div>

                    <div className="title-text">
                        <h3><Badge bg="secondary">Sản phẩm liên quan</Badge></h3>
                    </div>


                    <div className="product-desc">
                        <div className="product-desc-item">
                            <div className="img">
                                <img src="" alt="" />
                            </div>
                        </div>
                    </div>

                    <div className="products-list">
                        {
                            filters?.length > 0 && filters?.map((value, key) => (
                                <div className="product-list-item" key={key}>
                                    <ItemProduct data={value} listDataProducts={listData} setQuantity={setQuantity}></ItemProduct>
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

            {
                showImage && (
                    <div className="show-image">
                        <div className="container">
                            <div className="image">
                                <div className="title">
                                    <div></div>
                                    <div className="img">
                                        <img className="img-master" src={firstImage} alt={data.name} />
                                        <div className="fiter-img">
                                            {
                                                listFilterImage?.length > 0 && listFilterImage.map((value, key) => (
                                                     <div key={key} className="image-item" onClick={() => handleOncickImg(value)}>
                                                        <img src={value.img} alt={value.name} />
                                                    </div>
                                               
                                               ))
                                            }
                                        </div>
                                    </div>
                                    <div className="close" onClick={() => setShowImage(false)}>
                                        <p><IoCloseSharp /></p>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>

                )
            }

        </>
    )
}