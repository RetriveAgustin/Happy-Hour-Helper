import React from "react";
import { useSelector } from "react-redux";
import {
  Avatar,
  Box,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import Stack from "@mui/material/Stack";
import { useEffect } from "react";
import { useState } from "react";
import AddAddres from "../../components/AddAddress/AddAddress.jsx";

function User() {
  
  const user = useSelector((state) => state.user.userLogged);

  const [address, setAddress] = useState([]);
  const [order, setOrder] = useState([]);
  const [alter, setAlter] = useState(false)
  
  function fetchData() {
    const id = localStorage.getItem('User_ID');
    fetch(`${process.env.REACT_APP_API_URL}/address/getAddress`)
    .then((r) => r.json())
    .then((r) => {
      const data = r.filter((e) => e.user_id === id);
      console.log(data);
      setAddress(data);
    })
    fetch(`${process.env.REACT_APP_API_URL}/orders/getOrders`)
    .then((r) => r.json())
    .then((r) => {
      const data = r.filter((e) => e.user_id === id);
      console.log(data);
      setOrder(data);
    })
  }

  useEffect(() => {
    fetchData();
  }, [alter]);

  function stringToColor(string) {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = "#";

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */

    return color;
  }

  function stringAvatar(name) {
    return {
      sx: {
        bgcolor: stringToColor(name),
      },
      children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
    };
  }

  return (
    <div
      style={{ display: "flex", marginTop: "20px", justifyContent: "center"}}
    >
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        {user && user.name ? (
          <>
            <Stack direction="row" spacing={2}>
              {user.name && user.lastname ? (
                <Avatar
                  alt="User"
                  {...stringAvatar(`${user.name} ${user.lastname}`)}
                />
              ) : (
                <Avatar>{user.name[0]}</Avatar>
              )}
            </Stack>
            <Typography variant="h5">
              {user.name && user.lastname
                ? `${user.name} ${user.lastname}`
                : `${user.name}`}
            </Typography>
            <Typography variant="subtitle1">{user.mail}</Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "50vw",
                alignContent: "center",
              }}
            >
              <Typography variant="h6">Dirección:</Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  width: "50vw",
                  height: "25vh",
                  bgcolor: "#f1f1f1",
                  overflowY: 'scroll'
                }}
              >
                {address && address[0] ? (
                  address.map((p) => {
                    return (
                      <Paper elevation={3} sx={{marginBottom: '5px', p: '10px'}}>
                        <Typography variant="subtitle2">
                          {`${p.name} ${p.number}`}
                        </Typography>
                      </Paper>
                    );
                  })
                ) : (
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      width: "50vw",
                      height: "25vh",
                      overflowY: "scroll",
                    }}
                  >
                    <Paper elevation={3}>
                      <Typography variant="h5" sx={{ m: "10px" }}>
                        No hay direcciones agregadas
                      </Typography>
                      <AddAddres alter={alter} setAlter={setAlter}/>
                    </Paper>
                  </Box>
                )}
              </Box>
              <AddAddres alter={alter} setAlter={setAlter}/>
            </Box>
            <Box 
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "50vw",
              alignContent: "center",
            }}>
              <Typography variant="h6">Compras:</Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  width: "50vw",
                  height: "25vh",
                  bgcolor: "#f1f1f1",
                  overflowY: 'scroll'
                }}
              >

              </Box>
            </Box>
          </>
        ) : (
          <h2>Users</h2>
        )}
      </Grid>
    </div>
  );
}

export default User;
