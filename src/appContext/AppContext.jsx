import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';


AppContext.propTypes = {
    children: PropTypes.node
}

export const Context = createContext()

export default function AppContext ({children}) {

    const navigate = useNavigate()
    // search menu
    const [getsearch, setGetSearch] = useState('')

    // lấy data từ list-category
    const [idCategory, setIdCategory] = useState([])

    // lấy data từng sản phẩm từ categories
    const [getDataProduct, setGetDataProduct] = useState([])
    const [getListDataProducts, setGetListDataProducts] = useState([])

    // cart
    const [showCart, setShowCart] = useState(false)
    const [cartItems, SetCartItems] = useState([])
    const [cartSubTotal, setCartSubTotal] = useState(0)
    const [cartCount, setCartCount] = useState(0)
    const [showNotication, setShowNotication] = useState(true);


    useEffect(() => {
        let count = 0
        cartItems.filter(item => {
            count += item.quantity
            return count
        })
        setCartCount(count)
    }, [cartItems])

    useEffect(() => {
        let count = 0
        cartItems.filter(item => {
            count += item.quantity * item.price
            return count
        })
        setCartSubTotal(count)
    }, [cartItems])

    const handleAddToCart = (product, quantity) => {
        let items = [...cartItems]
        let index = items.findIndex(item => item.id === product.id)

        if(index < 0) {
            product.quantity = quantity
            items = [...items, product]
        } else {
            items[index].quantity = quantity
        }
        SetCartItems(items)
    }

    const handleToCart = (product, quantity) => {
        let items = [...cartItems]
        let index = items.findIndex(item => item.id === product.id)

        if(index < 0) {
            product.quantity = quantity
            items = [...items, product]
        } else {
            items[index].quantity = quantity
        }
        SetCartItems(items)
        navigate('/cart')
    }

    const handleUpdateToCart = (type, product) => {
        let items = [...cartItems]
        let index = items.findIndex(item => item.id === product.id)

        if (type === 'desc'  ) {
            items[index].quantity -= 1
            if (items[index].quantity <= 1) {
                items[index].quantity =1
            }
        }
        if(type === 'plus') {
            items[index].quantity += 1
        }

        SetCartItems(items)
    }

    const handleDeleteCart = (product) => {
        let items = cartItems.filter(item => item.id !== product.id)
        
        // xet điều kiện nếu như vào mua sắm mà remove giỏ hàng về 0 thì sẽ trở về trang chủ
        if (items.length == 0) {
            navigate('/')
            setShowCart(false)
        }
        SetCartItems(items)
    }

    return <Context.Provider value={{
        getsearch, setGetSearch,
        idCategory, setIdCategory,
        getDataProduct, setGetDataProduct,
        getListDataProducts, setGetListDataProducts,
        showCart, setShowCart,
        cartItems, SetCartItems,
        cartSubTotal, setCartSubTotal,
        cartCount, setCartCount,
        showNotication, setShowNotication,
        handleAddToCart,
        handleUpdateToCart,
        handleDeleteCart,
        handleToCart
    }}>
    {children}</Context.Provider>
}