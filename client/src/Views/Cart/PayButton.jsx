import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import CreateAdress from "../../components/CreateAdress/CreateAdress";


const PayButton = ({ productItem }) => {
    const user = useSelector((state) => state.user.userLogged)
    console.log(user.id)



    if (user.id) {
        const handleCheckout = () => {
            axios.post("http://localhost:3001/stripe/create-checkout-session", {

                productItem,
                userId: user.id

            }).then((res) => {
                if (res.data.url) {
                    window.location.href = res.data.url
                }
            })
        };

        return (
            <>
                <button onClick={() => handleCheckout()}>Check Out</button>
            </>
        )
    }
}
export default PayButton;