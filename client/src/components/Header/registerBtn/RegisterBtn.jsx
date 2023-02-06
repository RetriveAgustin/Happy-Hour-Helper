import { useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import {
  TextField,
  InputAdornment,
  IconButton,
  Button,
  Zoom,
} from "@mui/material";
import { Google, Visibility, VisibilityOff } from "@mui/icons-material";
import { FormContainer } from "./RegisterBtn.styles";
import CircularProgress from "@mui/material/CircularProgress";
import { useDispatch } from "react-redux";
import { getLoggedUser, registerUser } from "../../../redux/actions/actions";
import { useAuth } from "../../../context/authContext";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: "500px",
  bgcolor: "background.paper",
  boxShadow: 24,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  borderRadius: "5px",
};

function RegisterBtn() {
  const dispatch = useDispatch();

  //modals
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setName("");
    setErrorName(false);
    setLastName("");
    setErrorLastName(false);
    setEmail("");
    setErrorEmail(false);
    setPassword("");
    setOpen(false);
  };
  //inputs
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repitedPassword, setRepitedPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);
  const [loading, setLoading] = useState(false);

  function handleChangeName({ target }) {
    setName(target.value);
    if (!target.value) setErrorName(true);
    else setErrorName(false);
  }
  const [errorName, setErrorName] = useState(false);

  function handleChangeLastName({ target }) {
    setLastName(target.value);
    if (!target.value) setErrorLastName(true);
    else setErrorLastName(false);
  }
  const [errorLastName, setErrorLastName] = useState(false);

  function handleChangeEmail({ target }) {
    setEmail(target.value);
    if (!target.value) setErrorEmail(true);
    else setErrorEmail(false);
  }
  const [errorEmail, setErrorEmail] = useState(false);

  function handleChangePassword({ target }) {
    setPassword(target.value);
  }
  function handleChangeRepitedPassword({ target }) {
    setRepitedPassword(target.value);
    if (target.value !== password) setErrorPassword(true);
    else setErrorPassword(false);
  }
  const [errorPassword, setErrorPassword] = useState(false);

  const { signUp } = useAuth();

  async function handleSubmit() {
    try {
      setLoading(true);
      dispatch(registerUser(signUp, { email, password, name, lastName }));
      setLoading(false);

      const id = localStorage.getItem("User_ID");
      dispatch(getLoggedUser(id));

      setName("");
      setLastName("");
      setEmail("");
      setPassword("");
      setRepitedPassword("");
      setOpen(false);
    } catch ({ message }) {
      setLoading(false);
      alert(message);
    }
  }

  return (
    <>
      <Button onClick={handleOpen} variant="contained" color="error">
        Register
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        disableScrollLock
        sx={{
          overflow: "scroll",
        }}
      >
        <Zoom
          in={open}
          style={{ left: "calc(50% - 275px)", top: "calc(50% - 275px)" }}
        >
          <Box sx={style}>
            <FormContainer>
              <h2 style={{ marginBottom: "50px" }}>Registrarse</h2>

              <TextField
                id="name"
                label="Nombre"
                value={name}
                variant="outlined"
                // sx <-  prop para mandar estilos
                sx={{
                  m: 1,
                  marginBottom: "40px",
                  width: "100%",
                  position: "relative",
                  "& p.MuiFormHelperText-root": {
                    position: "absolute",
                    bottom: "-22px",
                    left: "0px",
                  },
                }}
                // true o false si querevemos ver todo el input en rojo
                error={errorName}
                // si queremos mostrar un mensaje de error
                helperText={
                  errorName && (
                    <span style={{ fontSize: "13px", whiteSpace: "nowrap" }}>
                      Debes llenar todos los campos
                    </span>
                  )
                }
                // eventos como en cualquier input
                onFocus={handleChangeName}
                onChange={handleChangeName}
              />

              <TextField
                id="lastName"
                label="Apellido"
                value={lastName}
                variant="outlined"
                // sx <-  prop para mandar estilos
                sx={{
                  m: 1,
                  marginBottom: "40px",
                  width: "100%",
                  position: "relative",
                  "& p.MuiFormHelperText-root": {
                    position: "absolute",
                    bottom: "-22px",
                    left: "0px",
                  },
                }}
                // true o false si querevemos ver todo el input en rojo
                error={errorLastName}
                // si queremos mostrar un mensaje de error
                helperText={
                  errorLastName && (
                    <span style={{ fontSize: "13px", whiteSpace: "nowrap" }}>
                      Debes llenar todos los campos
                    </span>
                  )
                }
                // eventos como en cualquier input
                onFocus={handleChangeLastName}
                onChange={handleChangeLastName}
              />

              <TextField
                id="email"
                label="Email"
                value={email}
                variant="outlined"
                // sx <-  prop para mandar estilos
                sx={{
                  m: 1,
                  marginBottom: "40px",
                  width: "100%",
                  position: "relative",
                  "& p.MuiFormHelperText-root": {
                    position: "absolute",
                    bottom: "-22px",
                    left: "0px",
                  },
                }}
                // true o false si querevemos ver todo el input en rojo
                error={errorEmail}
                // si queremos mostrar un mensaje de error
                helperText={
                  errorEmail && (
                    <span style={{ fontSize: "13px", whiteSpace: "nowrap" }}>
                      Debes llenar todos los campos
                    </span>
                  )
                }
                // eventos como en cualquier input
                onFocus={handleChangeEmail}
                onChange={handleChangeEmail}
              />

              <TextField
                id="password"
                label="Contraseña"
                variant="outlined"
                value={password}
                type={showPassword ? "text" : "password"}
                error={errorPassword}
                helperText={
                  errorPassword && (
                    <span style={{ fontSize: "13px", whiteSpace: "nowrap" }}>
                      Las contraseñas no coinciden
                    </span>
                  )
                }
                onChange={handleChangePassword}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                sx={{
                  width: "100%",
                  marginBottom: "30px",
                }}
              />

              <TextField
                id="repitedPassword"
                label="Repita su contraseña"
                variant="outlined"
                value={repitedPassword}
                type={showPassword ? "text" : "password"}
                onChange={handleChangeRepitedPassword}
                error={errorPassword}
                helperText={
                  errorPassword && (
                    <span style={{ fontSize: "13px", whiteSpace: "nowrap" }}>
                      Las contraseñas no coinciden
                    </span>
                  )
                }
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                sx={{
                  width: "100%",
                }}
              />

              <Button
                color="primary"
                variant="contained"
                style={{
                  width: "100%",
                  height: "50px",
                  marginTop: "20px",
                  marginBottom: "15px",
                  textTransform: "none",
                }}
                onClick={loading ? "" : handleSubmit}
              >
                {loading ? (
                  <CircularProgress style={{ color: "#fff" }} size={25} />
                ) : (
                  "Registrarse"
                )}
              </Button>

              <Button
                startIcon={<Google />}
                variant="contained"
                style={{
                  width: "100%",
                  height: "50px",
                  backgroundColor: "#d32323",
                  textTransform: "none",
                }}
              >
                Registrarse con Google
              </Button>
            </FormContainer>
          </Box>
        </Zoom>
      </Modal>
    </>
  );
}

export default RegisterBtn;
