import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
/* import { url } from "../../../../api" */

const PayButton = ({productItem}) => {
    const user = useSelector((state) => state.userLoged)

    const handleCheckout = () => {
        axios.post("http://localhost:3001/stripe/create-checkout-session" , {
            
            productItem,
            userId: user.id 
        }).then((res) => {
            if(res.data.url){
                window.location.href = res.data.url
            }
        })
    };

    return (
        <>
        <button onClick={()=> handleCheckout()}>Check Out</button>
        </>
    )
}

export default PayButton;