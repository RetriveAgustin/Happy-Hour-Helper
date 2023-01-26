import React, { useEffect } from "react";
import {
  AdminPageContainer,
  ContainerDashboard,
  Div,
} from "./AdminUsers.styles";
import CardInfo from "../../components/CardInfo/CardInfo";
import { useDispatch, useSelector } from "react-redux";
import { getAllOffers } from "../../redux/actions/actions";
import { Link, useNavigate } from "react-router-dom";
import PanelAdmin from "../../components/PanelAdmin/PanelAdmin";

const AdminUsers = () => {
  // const navigate = useNavigate();

  const users = [
    {
      id: "492e4163-6f23-4477-9dcd-6f15ef80daa3",
      name: "Kaitlyn",
      last_name: "Peaddie",
      created_in_google: true,
      email: "kpeaddie0@miitbeian.gov.cn",
    },
    {
      id: "68c1d84c-e6ce-4298-9051-ff21787f401b",
      name: "Piggy",
      last_name: "Legh",
      created_in_google: false,
      email: "plegh1@sourceforge.net",
    },
    {
      id: "b8f64197-94c5-4d81-af34-b1d21586ffbe",
      name: "Benyamin",
      last_name: "Pickthorne",
      created_in_google: true,
      email: "bpickthorne2@apple.com",
    },
    {
      id: "68c1d84c-e6ce-4298-9051-ff21787f401b",
      name: "Germana",
      last_name: "Baleine",
      created_in_google: false,
      email: "gbaleine3@telegraph.co.uk",
    },
    {
      id: "de0d5a16-e3e7-45fd-81e8-cfabba7edb8e",
      name: "Archibald",
      last_name: "Entreis",
      created_in_google: true,
      email: "aentreis4@google.com.br",
    },
    {
      id: "74ece2d6-8f28-4f37-bfa7-c4b1c9488f89",
      name: "Gannie",
      last_name: "Bande",
      created_in_google: false,
      email: "gbande5@csmonitor.com",
    },
    {
      id: "6a725060-7f4a-4f3f-a270-0eb51a0c465f",
      name: "Tiffany",
      last_name: "Shellibeer",
      created_in_google: true,
      email: "tshellibeer6@apache.org",
    },
    {
      id: "f840095d-f6d4-43ba-9bca-cf31f07da8a2",
      name: "Sullivan",
      last_name: "Yurevich",
      created_in_google: true,
      email: "syurevich7@google.com",
    },
    {
      id: "b8f64197-94c5-4d81-af34-b1d21586ffbe",
      name: "Jobie",
      last_name: "Pawlik",
      created_in_google: true,
      email: "jpawlik8@google.co.uk",
    },
    {
      id: "74ece2d6-8f28-4f37-bfa7-c4b1c9488f89",
      name: "Frasier",
      last_name: "Hort",
      created_in_google: true,
      email: "fhort9@diigo.com",
    },
    {
      id: "492e4163-6f23-4477-9dcd-6f15ef80daa3",
      name: "Kaitlyn",
      last_name: "Peaddie",
      created_in_google: true,
      email: "kpeaddie0@miitbeian.gov.cn",
    },
    {
      id: "68c1d84c-e6ce-4298-9051-ff21787f401b",
      name: "Piggy",
      last_name: "Legh",
      created_in_google: false,
      email: "plegh1@sourceforge.net",
    },
    {
      id: "b8f64197-94c5-4d81-af34-b1d21586ffbe",
      name: "Benyamin",
      last_name: "Pickthorne",
      created_in_google: true,
      email: "bpickthorne2@apple.com",
    },
    {
      id: "68c1d84c-e6ce-4298-9051-ff21787f401b",
      name: "Germana",
      last_name: "Baleine",
      created_in_google: false,
      email: "gbaleine3@telegraph.co.uk",
    },
    {
      id: "de0d5a16-e3e7-45fd-81e8-cfabba7edb8e",
      name: "Archibald",
      last_name: "Entreis",
      created_in_google: true,
      email: "aentreis4@google.com.br",
    },
    {
      id: "74ece2d6-8f28-4f37-bfa7-c4b1c9488f89",
      name: "Gannie",
      last_name: "Bande",
      created_in_google: false,
      email: "gbande5@csmonitor.com",
    },
  ];

  return (
    <>
      <AdminPageContainer>
        <PanelAdmin />
        <Div>
          <ContainerDashboard>
            <CardInfo type="users" />
            {users.map((e) => (
              <CardInfo props={e} type="users" />
            ))}
          </ContainerDashboard>
        </Div>
      </AdminPageContainer>
    </>
  );
};

export default AdminUsers;
