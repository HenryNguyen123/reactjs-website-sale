import CategoriesComponent from "../catagories/CategoriesComponent";

import { categoriesData } from "../../util/data";
import './home.css'
import { Context } from "../../appContext/AppContext";
import { useContext } from "react";
import { useNavigate } from "react-router";
import Slider from "../slider/Slider";

export default function HomeComponet () {

    const {setIdCategory} = useContext(Context)

    const navigate = useNavigate()

    return (
        <>
            <div className="list-category">
                <div className="container">
                    <div className="category-content">
                        {
                            categoriesData.length > 0 && categoriesData.map((value, key) => (
                                <div className="item" key={key} onClick={()=> {
                                    setIdCategory(value.id)
                                    navigate(`/categories/${value.id}`)
                                }}>
                                    <div className="img">
                                        <img src={value.image} alt={value.name} />
                                    </div>
                                    <div className="title">
                                        <p>{value.name}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            
            

            <Slider></Slider>

            {
                categoriesData?.length > 0 && categoriesData?.map((value, key) => (
                    <CategoriesComponent key={key} data={value}></CategoriesComponent>
                ))
            }
        </>
    )
}