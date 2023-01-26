import React, { useEffect, useState } from "react";
import ArrowBackIos from "@mui/icons-material/ArrowBackIos";
import {
  AdminNavContainer,
  NavButton,
  PrevButton,
  UserImage,
  UserInfo,
} from "./AdminDashboard.styles";
import styled from "styled-components";
import CardInfo from "./CardInfo";


function AdminDashboard() {
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

  const products = [
    {
      id: 1,
      name: "Coca-cola 1.5L",
      brand: "Coca-cola",
      price: "$300",
      capacity: 1000,
      "minimum-amount-for-bulk": 6,
      "bulk-discount": 10,
      quantity: 14,
      rating: 4.8,
      "show ": true,
      image: "http://dummyimage.com/125x100.png/5fa2dd/ffffff",
    },
    {
      id: 2,
      name: "Coca-cola 2.25L",
      brand: "Coca-cola",
      price: "$4574019.60",
      capacity: 21,
      "minimum-amount-for-bulk": 37,
      "bulk-discount": 23,
      quantity: 81,
      rating: 75,
      "show ": true,
      image: "http://dummyimage.com/195x100.png/dddddd/000000",
    },
    {
      id: 3,
      name: "Coca-cola Light 1.5",
      brand: "Coca-cola",
      price: "$6016848.12",
      capacity: 21,
      "minimum-amount-for-bulk": 69,
      "bulk-discount": 77,
      quantity: 50,
      rating: 96,
      "show ": false,
      image: "http://dummyimage.com/142x100.png/cc0000/ffffff",
    },
    {
      id: 4,
      name: "Coca-cola Light 2.25L",
      brand: "Coca-cola",
      price: "$3899635.16",
      capacity: 100,
      "minimum-amount-for-bulk": 97,
      "bulk-discount": 22,
      quantity: 40,
      rating: 78,
      "show ": true,
      image: "http://dummyimage.com/130x100.png/cc0000/ffffff",
    },
    {
      id: 5,
      name: "Coca-cola Zero 1.5L",
      brand: "Coca-cola",
      price: "$5038017.74",
      capacity: 49,
      "minimum-amount-for-bulk": 14,
      "bulk-discount": 81,
      quantity: 62,
      rating: 10,
      "show ": false,
      image: "http://dummyimage.com/197x100.png/5fa2dd/ffffff",
    },
    {
      id: 6,
      name: "Coca-cola Zero 2.25L",
      brand: "Coca-cola",
      price: "$4836208.43",
      capacity: 79,
      "minimum-amount-for-bulk": 20,
      "bulk-discount": 98,
      quantity: 56,
      rating: 10,
      "show ": true,
      image: "http://dummyimage.com/172x100.png/5fa2dd/ffffff",
    },
    {
      id: 7,
      name: "Sprite 1.5L",
      brand: "Coca-cola",
      price: "$4782938.11",
      capacity: 71,
      "minimum-amount-for-bulk": 59,
      "bulk-discount": 2,
      quantity: 43,
      rating: 60,
      "show ": false,
      image: "http://dummyimage.com/218x100.png/ff4444/ffffff",
    },
    {
      id: 8,
      name: "Sprite 2.5L",
      brand: "Coca-cola",
      price: "$5211530.36",
      capacity: 26,
      "minimum-amount-for-bulk": 66,
      "bulk-discount": 96,
      quantity: 97,
      rating: 97,
      "show ": true,
      image: "http://dummyimage.com/204x100.png/cc0000/ffffff",
    },
    {
      id: 9,
      name: "Fernet Branca 225cc",
      brand: "Fernet Branca",
      price: "$1400",
      capacity: 225,
      "minimum-amount-for-bulk": null,
      "bulk-discount": null,
      quantity: 27,
      rating: 52,
      "show ": true,
      image: "http://dummyimage.com/127x100.png/cc0000/ffffff",
    },
    {
      id: 10,
      name: "Fernet Branca 750cc",
      brand: "Fernet Branca",
      price: "$1800",
      capacity: 750,
      "minimum-amount-for-bulk": 6,
      "bulk-discount": 10,
      quantity: 61,
      rating: 10,
      "show ": true,
      image: "http://dummyimage.com/207x100.png/dddddd/000000",
    },
    {
      id: 11,
      name: "Fernet Branca 1L",
      brand: "Fernet Branca",
      price: "$2200",
      capacity: 1000,
      "minimum-amount-for-bulk": 6,
      "bulk-discount": 10,
      quantity: 88,
      rating: 45,
      "show ": true,
      image: "http://dummyimage.com/149x100.png/ff4444/ffffff",
    },
    {
      id: 12,
      name: "Fernet Branca menta 750cc ",
      brand: "Fernet Branca",
      price: "$1439428.39",
      capacity: 750,
      "minimum-amount-for-bulk": 81,
      "bulk-discount": 10,
      quantity: 6,
      rating: 8,
      "show ": false,
      image: "http://dummyimage.com/115x100.png/5fa2dd/ffffff",
    },
    {
      id: 13,
      name: "Santa Julia Malbec",
      brand: "Santa Julia",
      price: "$450",
      capacity: 750,
      "minimum-amount-for-bulk": 6,
      "bulk-discount": 10,
      quantity: 91,
      rating: 8,
      "show ": true,
      image: "http://dummyimage.com/104x100.png/cc0000/ffffff",
    },
    {
      id: 14,
      name: "Santa Julia Blanco dulce",
      brand: "Santa Julia",
      price: "$450",
      capacity: 750,
      "minimum-amount-for-bulk": 6,
      "bulk-discount": 10,
      quantity: 6,
      rating: 97,
      "show ": true,
      image: "http://dummyimage.com/219x100.png/dddddd/000000",
    },
    {
      id: 15,
      name: "Santa Julia cabernet",
      brand: "Santa Julia",
      price: "$450",
      capacity: 750,
      "minimum-amount-for-bulk": 6,
      "bulk-discount": 10,
      quantity: 60,
      rating: 43,
      "show ": true,
      image: "http://dummyimage.com/178x100.png/dddddd/000000",
    },
    {
      id: 16,
      name: "Jack Daniel whisky",
      brand: "Jack Daniel ",
      price: "$7000",
      capacity: 700,
      "minimum-amount-for-bulk": 4,
      "bulk-discount": 15,
      quantity: 42,
      rating: 57,
      "show ": true,
      image: "http://dummyimage.com/204x100.png/dddddd/000000",
    },
    {
      id: 17,
      name: "Jack Daniel whisky honey",
      brand: "Jack Daniel",
      price: "$7500",
      capacity: 700,
      "minimum-amount-for-bulk": 4,
      "bulk-discount": 10,
      quantity: 94,
      rating: 32,
      "show ": false,
      image: "http://dummyimage.com/236x100.png/5fa2dd/ffffff",
    },
    {
      id: 18,
      name: "Jack Daniel whiskey bourbon",
      brand: "Jack Daniel",
      price: "$8000",
      capacity: 700,
      "minimum-amount-for-bulk": 4,
      "bulk-discount": 10,
      quantity: 35,
      rating: 59,
      "show ": false,
      image: "http://dummyimage.com/179x100.png/cc0000/ffffff",
    },
    {
      id: 19,
      name: "Quilmes rubia lata 330cc",
      brand: "Quilmes",
      price: "$1200",
      capacity: 330,
      "minimum-amount-for-bulk": 12,
      "bulk-discount": 10,
      quantity: 43,
      rating: 59,
      "show ": false,
      image: "http://dummyimage.com/238x100.png/ff4444/ffffff",
    },
    {
      id: 20,
      name: "Quilmes lata negra 330cc",
      brand: "Quilmes",
      price: "$1300",
      capacity: 330,
      "minimum-amount-for-bulk": 12,
      "bulk-discount": 10,
      quantity: 44,
      rating: 46,
      "show ": false,
      image: "http://dummyimage.com/189x100.png/cc0000/ffffff",
    },
    {
      id: 21,
      name: "Quilmes lata bock 330cc",
      brand: "Quilmes",
      price: "$1200",
      capacity: 330,
      "minimum-amount-for-bulk": 12,
      "bulk-discount": 10,
      quantity: 51,
      rating: 22,
      "show ": true,
      image: "http://dummyimage.com/115x100.png/ff4444/ffffff",
    },
    {
      id: 22,
      name: "Andes lata roja 330cc",
      brand: "Andes",
      price: "$1400",
      capacity: 330,
      "minimum-amount-for-bulk": 12,
      "bulk-discount": 10,
      quantity: 95,
      rating: 49,
      "show ": true,
      image: "http://dummyimage.com/236x100.png/cc0000/ffffff",
    },
    {
      id: 23,
      name: "Andes lata negra 330cc",
      brand: "Andes",
      price: "$1500",
      capacity: 330,
      "minimum-amount-for-bulk": 12,
      "bulk-discount": 10,
      quantity: 16,
      rating: 18,
      "show ": true,
      image: "http://dummyimage.com/114x100.png/ff4444/ffffff",
    },
    {
      id: 24,
      name: "Andes lata mendocina 330cc",
      brand: "Andes",
      price: "$1500",
      capacity: 330,
      "minimum-amount-for-bulk": 12,
      "bulk-discount": 10,
      quantity: 63,
      rating: 72,
      "show ": false,
      image: "http://dummyimage.com/188x100.png/dddddd/000000",
    },
  ];
  
  const DashboardContainer = styled.div`
    width: 100%;
    background-color: #3d3d3d;
    overflow-y: scroll;
    display: grid;
    grid-template-columns: repeat(2, 2fr);
    gap: 0.5rem 1rem;
    padding: 0.5rem;
    `;

  const AdminPageContainer = styled.div`
    display: flex;
    height: 100vh;
    `;

const [text, setText] = useState('')

return (
  <>
    <AdminPageContainer>
      <AdminNavContainer>
        <PrevButton>
          <ArrowBackIos color="inherit" />
        </PrevButton>
        <UserInfo>
          <UserImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgTgK1EYhwitE3CCCdbK1bNwFIu-vo2B5dnA&usqp=CAU" />
          <h1>Admin</h1>
        </UserInfo>
        <NavButton>Users</NavButton>
        <NavButton>Products</NavButton>
        <NavButton>Offers</NavButton>        
        <input type='text' placeholder="Buscar..." value={text} onChange={(e) => setText(e.target.value)}/>        
      </AdminNavContainer>
      <DashboardContainer>
        {products.filter(val => {
          if (text == "") {
            return val
          } else if (val.name.toLowerCase().includes(text.toLowerCase())) {
            return val
          }
        }).map((e) => (
          <CardInfo props={e} />
        ))}
      </DashboardContainer>
    </AdminPageContainer>
  </>
);
}

export default AdminDashboard;
