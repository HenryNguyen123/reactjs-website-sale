import { Outlet } from "react-router";
import HeaderComponent from "../header/HeaderComponent";
import FooterComponent from "../footer/FooterComponent";




export default function LayoutComponent () {


    return (
        <>
            <div>
                <header>
                    <HeaderComponent></HeaderComponent>
                </header>
                <main>
                    <Outlet></Outlet>
                </main>
                <footer>
                    <FooterComponent></FooterComponent>
                </footer>
            </div>
        </>
    )
}