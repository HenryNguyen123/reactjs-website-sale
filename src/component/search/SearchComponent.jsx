import { useContext, useEffect } from "react"
import { useState } from "react"
import { categoriesData } from "../../util/data"
import { VND } from "../../util/convert"
import './search.css'
import { useNavigate } from "react-router"
import { Context } from "../../appContext/AppContext"


export default function SearchComponent () {

    const navigate = useNavigate()

    const {setGetDataProduct, setGetListDataProducts, getsearch} = useContext(Context)


    const [search, setSearch] = useState('')
    const [searchDebounce, setSearchDebounce] = useState('')
    const [listProducts, setListProducts] = useState([])
    const [listGetSearch, setListGetSearch] = useState([])
    const [addProducts, setAddProducts] = useState([])

    useEffect(() => {
        setSearch(getsearch)
    }, [getsearch])

    useEffect(() => {

        let items = [...listProducts]
        for (let i = 0; i< categoriesData.length; i++) {
            fetch(categoriesData[i].api)
            .then(res => res.json())
            .then((data) => {
                items = [...items, data]
                setListProducts(items)
            })
        }
    }, [categoriesData])

    useEffect(() => {
        const debounce = setTimeout(() => {
            setSearchDebounce(search)
        }, 200);

        return () => {
            clearTimeout(debounce)
        } 
    }, [search])

    let nameSearch = searchDebounce.toLocaleLowerCase()



    const handleGetProductsSearch = () => {
        let items = [...listGetSearch]
        let list = [...addProducts]
        setListGetSearch([])

        let dem = 0
        for (let i = 0; i < listProducts.length; i++) {
            listProducts[i].map((item) => {
                let itemSearch = item.name.toLocaleLowerCase() == nameSearch || item.title.toLocaleLowerCase() == nameSearch || item.price == nameSearch
                // let numberIndex = (item.name.toLocaleLowerCase()).indexOf(search)

                if (itemSearch) {
                    items = [...items, item]
                    list = [...list, listProducts[i]]
                    setListGetSearch(items)
                    setAddProducts(list)
                    return dem +=1
                }
                
                
                // if (numberIndex >= 0 && nameSearch != '' && !itemSearch) {
                //     let index = items.findIndex(value => value.name == item.name)
                //     let product = items.filter(value => value.name != item.name)
                //     items = [...items, item]
                //     if (index >= 0) {
                //         // setListGetSearch([])
                //         items = [...items, product]
                //         return items
                //     } else {
                //         setListGetSearch([])
                //     }
                //     setListGetSearch(items)
                //     return dem +=1
                // }

            })
        }

        // kiểm tra nếu giá trị đếm trả về = 0 thì reset lại listgetsearch
        if (dem == 0) {
            items = []
            setListGetSearch(items)
        }

        dem = 0
    }

    useEffect(() => {
        handleGetProductsSearch()

    }, [searchDebounce])


    const handlOnclickImage = (data, key) => {
        navigate(`/product/${data.id}/${data.name}`)
        setGetDataProduct(data)
        setGetListDataProducts(addProducts[key])
    }

    return (
        <>
            <div className="search">
                <div className="container">
                    <div className="search-container">
                        <div className="search-text">
                            <input type="text" name='search' placeholder="Search ..." value={search}  onChange={(e) => setSearch(e.target.value)} />
                        </div>
                        <div className="search-content">
                            {
                                listGetSearch.map((value, key) => (
                                    <div className="search-products" key={key}>
                                        <img src={value?.image?.[0]?.img} alt={value.name} onClick={() => handlOnclickImage(value, key)}/>
                                        <div className="text">
                                            <h5>{value.name}</h5>
                                            {/* <p>detail: {value.description}</p> */}
                                            <h5 className="color-red">price: {VND.format(value.price)}</h5>
                                        </div>
                                    </div>

                                ))
                            }

                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}