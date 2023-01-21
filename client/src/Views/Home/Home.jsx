import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Card } from "../../components/Card/Card";
import { getAllBrands, getAllCategories, getAllSubCategories } from "../../redux/actions/actions";
import styles from "./Home.module.css";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
      dispatch(getAllCategories());
      dispatch(getAllBrands());
      dispatch(getAllSubCategories());
  }, [dispatch])
  
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
