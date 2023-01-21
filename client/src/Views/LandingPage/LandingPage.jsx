import { Link } from "react-router-dom";
import { Card } from '../../components/Card/Card'

const LandingPage = () => {
  return (
    <>
    <Link to='/form'>
      <button>Create</button>
    </Link>
    <Card />
    </>
    // <Background>
    //   <ImageBackground>
    //     <h1>Bienvenido a Happy Hour Helper</h1>
    //   </ImageBackground>
    // </Background>
  );
};

export default LandingPage;
