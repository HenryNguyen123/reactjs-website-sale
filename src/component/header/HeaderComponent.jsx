
import { useNavigate } from "react-router"
import { logoData } from "../../util/data"
import './header.css'
import MenuHeader from "./MenuHeader"

export default function HeaderComponent() {
    const navigate = useNavigate()
    return (
        <>
            <div className="header">
                <div className="container">
                    <div className="top-header">
                        <div style={{width: '200px'}}></div>
                        <div className="header-logo">
                            <img src={logoData} alt="" />
                        </div>
                        <div className="header-right">
                            <div className="search"><input type="text" placeholder="Search ..." onClick={() => navigate('/search')}/></div>
                            <div className="cart">cart</div>
                        </div>
                    </div>
                    <div className="header-menu">
                        <div className="header-list-menu">
                            <MenuHeader/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}