

import { Badge } from 'react-bootstrap'
import './product.css'


export default function ItemProduct () {
    

    return (
        <>
            <div className="product-item">
                <div className="product-item-container">
                    <div className="product-class">
                        <div className="image">
                            <img src="https://image.donghohaitrieu.com/wp-content/uploads/2023/09/T006.407.16.033.00-1.jpg" alt="" />
                        </div>
                        <div className="product-content">
                            <h4><Badge bg="primary">Name</Badge></h4>
                            <p><Badge pill bg="secondary">Detail</Badge><span> thông tin</span></p>
                        </div>
                        <div className="price">
                            <p>
                                <span className='price-font'>Giá: </span>
                                <span className='number'>number</span>
                            </p>
                        </div>
                        <div className="button">
                            <button>Product Detail</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}