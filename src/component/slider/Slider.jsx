import { Carousel } from "react-bootstrap";
import './slider.css'
import { sliderImg } from "../../util/data";
import { useNavigate } from "react-router";
import { useContext } from "react";
import { Context } from "../../appContext/AppContext";

export default function Slider () {
    const navigate = useNavigate()
    const {setIdCategory} = useContext(Context)

    return (
        <>
            <div className="slider">
                <div className="container">
                    <div className="slider-container">
                        <Carousel data-bs-theme="dark" >
                            {
                                sliderImg?.length > 0  && sliderImg?.map((value, key) => (
                                    <Carousel.Item id='slider-height' key={key} onClick={() => {
                                        navigate(value.navagita)
                                        setIdCategory(value.id)
                                    }}>
                                        <img
                                        className="d-block w-100"
                                        src={value.image}
                                        alt={value}
                                        />
                                        <Carousel.Caption className="slider-title">
                                            <h5>{value.name}</h5>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                ))
                            }
                            
                        </Carousel>
                    </div>
                </div>
            </div>
        </>
    )
}