

import { Badge } from 'react-bootstrap'
import './product.css'
import PropTypes from 'prop-types';
import { VND } from '../../util/convert';
import { useContext } from 'react';
import { Context } from '../../appContext/AppContext';
import { useNavigate } from 'react-router';

ItemProduct.propTypes = {
    data: PropTypes.object,
    listDataProducts: PropTypes.array,
    setQuantity: PropTypes.array

}


export default function ItemProduct ({data, listDataProducts, setQuantity}) {

    const navigate = useNavigate()
    const {setGetDataProduct, setGetListDataProducts} = useContext(Context)

    const handleOnclickProduct = () => {
        setGetDataProduct(data)
        setGetListDataProducts(listDataProducts)
        setTimeout(() => {
            setQuantity(1)
            
        }, 100);
        navigate(`/product/${data.id}/${data.name}`)
    }
    

    return (
        <>
            <div className="product-item"  onClick={handleOnclickProduct}>
                <div className="product-item-container">
                    <div className="product-class">
                        <div className="image">
                            <img src={data?.image?.[0]?.img} alt={data.title} />
                        </div>
                        <div className="product-content">
                            <h4>{data.name.slice(0,28)}</h4>
                            <p><Badge pill bg="secondary">Detail</Badge><span> {data.detail.slice(0,160)+ '...'}</span></p>
                        </div>
                        <div className="price">
                            <p>
                                <span className='price-font'>Giá: </span>
                                <span className='number'>{VND.format(data.price)}</span>
                            </p>
                        </div>
                        <div className="button">
                            <button onClick={handleOnclickProduct}>Product Detail</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}