import { useEffect, useState } from "react";
import { Button, Col, Row, Toast } from "react-bootstrap";
// import Toast from 'react-bootstrap/Toast';
import './toast.css'
// import styled from 'styled-components';

// const DivParent = styled.div`
//     .toast-body {
//         color: white;
//     }
//     .toast {
//         left: unset !important;
//         right: 0 !important;
//     }
// `


export default function ToastNoticed () {
    const [showNotication, setShowNotication] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setShowNotication(false)
        }, 3000);
    }, [showNotication])

    return(
        <>  
            {/* <div className="toast">
                <div className="toast-container"> */}
                    <Toast show={showNotication} bg="success" className="fixed-top" delay={3000} onClose={() => setShowNotication(false)}>
                    <Toast.Header>
                        <img
                        src="holder.js/20x20?text=%20"
                        className="rounded me-2"
                        alt=""
                        />
                        <strong className="me-auto">Thông báo</strong>
                        <small>11 mins ago</small>
                    </Toast.Header>
                    <Toast.Body>Đặt hàng thành công</Toast.Body>
                    </Toast>

                {/* </div>
            </div> */}
        
        </>
    )
}