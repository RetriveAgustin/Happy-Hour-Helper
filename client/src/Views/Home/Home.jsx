import { Link } from "react-router-dom";
import { Card } from "../../components/Card/Card";

const LandingPage = () => {
  return (
    <>
      <Link to="/form">
        <button>Create</button>
      </Link>
      <Card />
    </>
  )
}
export default LandingPage;
