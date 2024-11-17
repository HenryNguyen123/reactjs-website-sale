import PropTypes from 'prop-types';
import { VND } from '../../util/convert';
import { useContext } from 'react';
import { Context } from '../../appContext/AppContext';
import { useNavigate } from 'react-router';

CartItem.propTypes = {
    data: PropTypes.object
}


export default function CartItem ({data}) {

    const navigate = useNavigate()

    const {handleUpdateToCart, handleDeleteCart, setGetDataProduct} = useContext(Context)

    return (
        <>
            <div className="item">
                <div className="cart-item">
                    <img src={data.image} alt={data.name} onClick={() => {
                                    navigate(`/product/${data.id}/${data.name}`)
                                    setGetDataProduct(data)
                                }}/>
                    <div className="cart-title">
                        <p className="name">{data.name}</p>
                        <p>{VND.format(data.price)}</p>
                    </div>
                </div>
                <div className="cart-quantity">
                    <p className="quantity">
                        <span className="desc" onClick={() => handleUpdateToCart('desc', data)}>-</span>
                        <span className="number">{data.quantity}</span>
                        <span className="plus" onClick={() => handleUpdateToCart('plus', data)}>+</span>
                    </p>
                    <p className="remove" onClick={()=> handleDeleteCart(data)}>Remove</p>
                </div>
            </div>
        </>
    )
}