import axios from "axios";
import { useSelector } from "react-redux";
import { Button } from "./Cart.styles";



const PayButton = ({ productItem }) => {
    const user = useSelector((state) => state.user.userLogged)
    console.log(user.id)



    if (user.id) {
        const handleCheckout = () => {
            axios.post(`${process.env.REACT_APP_API_URL}/stripe/create-checkout-session`, {

                productItem,
                userId: user.id

            })
            // .then((res) => {
            //     if (res.data.url) {
            //         window.location.href = res.data.url
            //     }
            // })
            console.log("lo que tu quieras")
        };

        return (
            <>

                <Button onClick={() => handleCheckout()}>Check Out</Button>
            </>
        )
    }else{
        return
    }
}
export default PayButton;