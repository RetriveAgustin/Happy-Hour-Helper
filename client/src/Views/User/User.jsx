import React from 'react'
import { useSelector } from 'react-redux'
import { Avatar, Box, Grid, Paper, Popover, Typography } from '@mui/material'
import Stack from '@mui/material/Stack';
import { Container } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { getAllAddresses, getAllPayments } from '../../redux/actions/actions.js';
import AddAddres from '../../components/AddAddress/AddAddress.jsx';

function User() {

  const user = useSelector(state => state.user.userLoged)
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
      const addresses = await getAllAddresses({uid: user.id});
      const payments = await getAllPayments({uid: user.id})

      console.log(addresses)

      setAddress(addresses);
      setPayment(payments);
    }
    fetchData();
  })

  const [address, setAddress] = useState([]);
  const [payment, setPayment] = useState([]);

  function stringToColor(string) {
    let hash = 0;
    let i;
  
    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }
  
    let color = '#';
  
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
      children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    };
  }  

  return (
    <Container>
        <Grid container direction="column" justifyContent="center" alignItems="center"
        >
          {user && user.name ? 
          <>
            <Stack direction="row" spacing={2}>
              <Avatar alt="User" {...stringAvatar(`${user.name} ${user.lastname}`)}/>
            </Stack>
            <Typography variant="h5">{`${user.name} ${user.lastname}`}</Typography>
            <Typography variant="subtitle1">{user.mail}</Typography>
            <Box sx={{display: 'flex', flexDirection: 'row'}}>
              <Typography variant="h6">
                Métodos de pago:
              </Typography>
              {payment && payment[0] ? payment.map(p => {
                return (
                  <Paper elevation='3'>
                    <Typography variant="subtitle2">
                      `${p.name} ${p.code}`
                    </Typography>
                  </Paper>
                )
              }) 
              : <h3>Usar popover de add-Payment cuando llegue a casa </h3>}
            </Box>
            <Box sx={{display: 'flex', flexDirection: 'row'}}>
              <Typography variant="h6">
                Dirección:
              </Typography>
              {address && address[0] ? address.map(p => {
                return (
                  <Paper elevation='3'>
                    <Typography variant="subtitle2">
                      `${p.name} ${p.code}`
                    </Typography>
                  </Paper>
                )
              }) 
              : <Popover><AddAddres /></Popover>}
            </Box>
          </>
          :
          <h2>hehe</h2>}
        </Grid>
    </Container>
  )
}

export default User
