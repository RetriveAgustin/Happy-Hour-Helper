import axios from "axios";
<<<<<<< HEAD
import {useDispatch, useSelector} from "react-redux";
import CreateAdress from "../../components/CreateAdress/CreateAdress";


=======
import { useDispatch, useSelector } from "react-redux";
>>>>>>> faef0fcbb168dbd28c378191d72c28a66340c6af
/* import { url } from "../../../../api" */

const PayButton = ({ productItem }) => {
  const user = useSelector((state) => state.user.userLogged);
  console.log(user.id);

<<<<<<< HEAD


    if (user.id) {const handleCheckout = () => {
        axios.post("http://localhost:3001/stripe/create-checkout-session" , {
            
            productItem,
            userId: user.id 
            
        }).then((res) => {
            if(res.data.url){
                window.location.href = res.data.url
            }
=======
  if (user.id) {
    const handleCheckout = () => {
      axios
        .post("http://localhost:3001/stripe/create-checkout-session", {
          productItem,
          userId: user.id,
>>>>>>> faef0fcbb168dbd28c378191d72c28a66340c6af
        })
        .then((res) => {
          if (res.data.url) {
            window.location.href = res.data.url;
          }
        });
    };

    return (
<<<<<<< HEAD
        <>
        <CreateAdress/>
        <button onClick={()=> handleCheckout()}>Check Out</button>
        </>
    )}
}
=======
      <>
        <button onClick={() => handleCheckout()}>Check Out</button>
      </>
    );
  }
};
>>>>>>> faef0fcbb168dbd28c378191d72c28a66340c6af

export default PayButton;
