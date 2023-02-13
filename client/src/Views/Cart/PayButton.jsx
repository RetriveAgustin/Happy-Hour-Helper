import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import style from './PayButton.module.css'

const PayButton = ({ productItem }) => {
    const user = useSelector((state) => state.user.userLogged)
    console.log(user.id)



    if (user.id) {
        const handleCheckout = async () => {
            const response = await axios.post(`${process.env.REACT_APP_API_URL}/stripe/create-checkout-session/`, {

                productItem,
                userId: user.id

            })
            .then((res) => {
                if (res.data.url) {
                    window.location.href = res.data.url
                }
            })
        };

        return (
            <>
                <button className={style.payBtn} onClick={() => handleCheckout()}>Ir a Pagar</button>
            </>
        )
    }else{
        return
    }
}
export default PayButton;