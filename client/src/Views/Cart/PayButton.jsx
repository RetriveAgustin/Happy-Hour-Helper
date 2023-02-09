import axios from "axios";
import { useSelector } from "react-redux";
import { Button } from "./Cart.styles";



const PayButton = ({ productItem }) => {
    const user = useSelector((state) => state.user.userLogged)
    console.log(user.id)



    if (user.id) {
        const handleCheckout = async () => {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/stripe/create-checkout-session`, {
                method: "POST",
                body: productItem,
                headers: {
                    "Content-Type": "application/json"
                }
            })
            // axios.post(`${process.env.REACT_APP_API_URL}/stripe/create-checkout-session`, {

                // productItem,
                // userId: user.id

            // })
            // .then((res) => {
            //     if (res.data.url) {
            //         window.location.href = res.data.url
            //     }
            // })
            console.log(`response: ${response}`)
        };

        return (
            <>
                {/* <form action={`${process.env.REACT_APP_API_URL}/stripe/create-checkout-session`} method="POST">
                    <input type="hidden" value={productItem} /> */}
                    <Button onClick={handleCheckout}>Check Out</Button>
                {/* </form> */}
            </>
        )
    }else{
        return
    }
}
export default PayButton;