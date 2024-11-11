
import { Link } from "react-router-dom"
import { listMenu } from "../../util/data"

export default function MenuHeader () {

    return (
        <>
            <ul>
                {
                    listMenu.map((value, key) => (
                        <li key={key}><Link to={value.link}>{value.name}</Link></li>
                    ))
                }
            </ul>
        </>
    )
    
}