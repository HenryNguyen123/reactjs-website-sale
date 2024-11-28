import { useContext, useEffect } from "react";
import { Toast } from "react-bootstrap";
// import Toast from 'react-bootstrap/Toast';
import './toast.css'
import { Context } from "../../appContext/AppContext";
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
    const {showNotication, setShowNotication} = useContext(Context)

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
                        <strong className="me-auto">Notification</strong>
                        <small>3 mins ago</small>
                    </Toast.Header>
                    <Toast.Body>Order Successfully</Toast.Body>
                    </Toast>

                {/* </div>
            </div> */}
        
        </>
    )
}