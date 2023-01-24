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
} from "./AdminUsers.styles";
import CardInfo from "../../components/CardInfo/CardInfo";
import { useDispatch, useSelector } from "react-redux";
import { getAllOffers } from "../../redux/actions/actions";
import { Link, useNavigate } from "react-router-dom";

const AdminUsers = () => {
  const navigate = useNavigate()
  
  const users = [
    {
      id: 1,
      first_name: "Kaitlyn",
      last_name: "Peaddie",
      email: "kpeaddie0@miitbeian.gov.cn",
    },
    {
      id: 2,
      first_name: "Piggy",
      last_name: "Legh",
      email: "plegh1@sourceforge.net",
    },
    {
      id: 3,
      first_name: "Benyamin",
      last_name: "Pickthorne",
      email: "bpickthorne2@apple.com",
    },
    {
      id: 4,
      first_name: "Germana",
      last_name: "Baleine",
      email: "gbaleine3@telegraph.co.uk",
    },
    {
      id: 5,
      first_name: "Archibald",
      last_name: "Entreis",
      email: "aentreis4@google.com.br",
    },
    {
      id: 6,
      first_name: "Gannie",
      last_name: "Bande",
      email: "gbande5@csmonitor.com",
    },
    {
      id: 7,
      first_name: "Tiffany",
      last_name: "Shellibeer",
      email: "tshellibeer6@apache.org",
    },
    {
      id: 8,
      first_name: "Sullivan",
      last_name: "Yurevich",
      email: "syurevich7@google.com",
    },
    {
      id: 9,
      first_name: "Jobie",
      last_name: "Pawlik",
      email: "jpawlik8@google.co.uk",
    },
    {
      id: 10,
      first_name: "Frasier",
      last_name: "Hort",
      email: "fhort9@diigo.com",
    },
  ];

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
          {users.map((e) => (
            <CardInfo props={e} />
          ))}
        </DashboardContainer>
      </AdminPageContainer>
    </>
  );
};

export default AdminUsers;
