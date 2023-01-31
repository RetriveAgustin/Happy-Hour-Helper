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
import { FormContainer, SingUpContainer } from "./LoginBtn.styles.js";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import CircularProgress from "@mui/material/CircularProgress";
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

function LoginBtn() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);
  const [loading, setLoading] = useState(false);

  function handleChangePassword({ target }) {
    setPassword(target.value);
  }

  function handleChangeEmail({ target }) {
    setEmail(target.value);
    if (!target.value) setError(true);
    else setError(false);
  }

  const [error, setError] = useState(false);

  async function handleSubmit() {
    try {
      setLoading(true);
      await signInWithEmailAndPassword(getAuth(), email, password);
      setLoading(false);
    } catch ({ message }) {
      setLoading(false);
      alert(message);
    }
  }

  return (
    <>
      <Button onClick={handleOpen}>Login</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        disableScrollLock
      >
        <Zoom
          in={open}
          style={{ left: "calc(50% - 275px)", top: "calc(50% - 275px)" }}
        >
          <Box sx={style}>
            <FormContainer>
              <h2 style={{ marginBottom: "50px" }}>Iniciar sesión</h2>

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
                error={error}
                // si queremos mostrar un mensaje de error
                helperText={
                  error && (
                    <span style={{ fontSize: "13px", whiteSpace: "nowrap" }}>
                      Este campo es obligatorio
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

              <Button
                color="primary"
                variant="contained"
                style={{
                  width: "100%",
                  height: "50px",
                  marginBottom: "15px",
                  textTransform: "none",
                }}
                onClick={loading ? "" : handleSubmit}
              >
                {loading ? (
                  <CircularProgress style={{ color: "#fff" }} size={25} />
                ) : (
                  "Iniciar sesión"
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
                Iniciar sesión con Google
              </Button>
            </FormContainer>

            <SingUpContainer>
              <p>
                No tienes una cuenta? <span>Registrate</span>
              </p>
            </SingUpContainer>
          </Box>
        </Zoom>
      </Modal>
    </>
  );
}

export default LoginBtn;
