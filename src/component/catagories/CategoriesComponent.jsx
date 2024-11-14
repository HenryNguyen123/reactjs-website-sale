
import PropTypes from 'prop-types';
import { Badge } from 'react-bootstrap';
import ItemProduct from '../products/ItemProduct';
import './categories.css'
import { useContext, useEffect, useState } from 'react';
import { Context } from '../../appContext/AppContext';
import { categoriesData } from '../../util/data';

CategoriesComponent.propTypes = {
    data: PropTypes.object
}


export default function CategoriesComponent({data}) {

    const [dataApi, setDataApi] = useState([])
    const [getName, setGetName] = useState('')
    const [dataCate, setDataCate] = useState([])
    const { idCategory } = useContext(Context)


    const handleGetApiData = () => { 
        if (data) {
            fetch(data.api)
            .then(res => res.json())
            .then((res)=>{
                setDataApi(res)
            }) 
            setGetName(data.name) 

        }

        // hiển thị sản phẩm khi click vào listcategory
        
        else if (!data) {
            let filter = categoriesData.filter((item) => item.id === idCategory)
            fetch(filter[0].api)
            .then(res => res.json())
            .then((res)=>{
                console.log(res)
                setDataApi(res)
            })
            setGetName(filter[0].name) 
        }
    } 

    useEffect(()=>{
        handleGetApiData()
    }, [data, idCategory])

    useEffect(()=>{
        setDataCate(dataApi)
    }, [dataApi])
   

    return (
        <>
            <div className="categories">
                <div className="container">
                    <div className="cate-title">
                        <h3><Badge bg="warning" text="dark">{getName}</Badge></h3>
                    </div>
                    <div className="cate-products">
                        {
                            dataCate.length > 0 && dataCate.map((value, key) => (
                                <div className="item" key={key}>
                                    <ItemProduct data={value} listDataProducts={dataCate}></ItemProduct>
                                </div>
                            ))
                        }
                    </div>

                </div>
            </div>
        
        </>
    )
}