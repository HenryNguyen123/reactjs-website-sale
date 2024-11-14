import PropTypes from 'prop-types';
import { createContext, useState } from 'react';


AppContext.propTypes = {
    children: PropTypes.node
}

export const Context = createContext()

export default function AppContext ({children}) {

    // lấy data từ list-category
    const [idCategory, setIdCategory] = useState([])

    // lấy data từng sản phẩm từ categories
    const [getDataProduct, setGetDataProduct] = useState([])
    const [getListDataProducts, setGetListDataProducts] = useState([])


    return <Context.Provider value={{
        idCategory, setIdCategory,
        getDataProduct, setGetDataProduct,
        getListDataProducts, setGetListDataProducts
    }}>
    {children}</Context.Provider>
}