import { Link } from "react-router-dom";
import { Card } from "../../components/Card/Card";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.background}>
      <Link to="/admin">
        <button>Create</button>
      </Link>
      <Card />
    </div>
  )
}
export default Home;
