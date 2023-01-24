import React, { useEffect } from "react";
import ArrowBackIos from "@mui/icons-material/ArrowBackIos";
import {
  AdminNavContainer,
  NavButton,
  PrevButton,
  UserImage,
  UserInfo,
  DashboardContainer,
  AdminPageContainer,
} from "./AdminOffers.styles";
import CardInfo from "../../components/CardInfo/CardInfo";
import { useDispatch, useSelector } from "react-redux";
import { getAllOffers } from "../../redux/actions/actions";
import { Link, useNavigate } from "react-router-dom";

const AdminOffers = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const offers = useSelector((state) => state.offers);

  useEffect(() => {
    dispatch(getAllOffers())
  }, [dispatch])
  return (
    <>
      <AdminPageContainer>
        <AdminNavContainer>
          <PrevButton>
          <ArrowBackIos color="inherit" onClick={() => navigate(`/admin`)}/>
          </PrevButton>
          <UserInfo>
            <UserImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgTgK1EYhwitE3CCCdbK1bNwFIu-vo2B5dnA&usqp=CAU" />
            <h1>Admin</h1>
          </UserInfo>

          <Link to="/admin/users">
            <NavButton>Users</NavButton>
          </Link>

          <Link to="/admin/products">
            <NavButton>Products</NavButton>
          </Link>

          <Link to="/admin/offers">
            <NavButton>Offers</NavButton>
          </Link>
        </AdminNavContainer>
        <DashboardContainer>
          {offers.map((o) => (
            <CardInfo props={o} />
          ))}
        </DashboardContainer>
      </AdminPageContainer>
    </>
  );
}

export default AdminOffers;