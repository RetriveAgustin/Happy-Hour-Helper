import React, { useEffect } from "react";
import { IconButton, Menu, MenuItem, Tooltip } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getLoggedUser, logoutUser } from "../../redux/actions/actions";
// import { useAuth } from "../../context/authContext";

function AvatarIcon({ logout }) {
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userId = localStorage.getItem("User_ID");

  useEffect(() => {
    dispatch(getLoggedUser(userId));
  }, [dispatch]);

  const user = useSelector((state) => state.user.userLogged);
  // const { logout } = useAuth;

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const logOutHandler = () => {
    localStorage.clear();
    dispatch(logoutUser());
  };

  return (
    <>
      <div>
        <Tooltip title="Open Settings">
          <IconButton onClick={handleOpenUserMenu}>
            <AccountCircleIcon sx={{ color: "white", fontSize: 30 }} />
          </IconButton>
        </Tooltip>
        <Menu
          open={Boolean(anchorElUser)}
          onClose={handleCloseUserMenu}
          anchorEl={anchorElUser}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          {/* {settings.map((setting) => (
            <MenuItem key={setting}>
              <Typography>{setting}</Typography>
            </MenuItem>
          ))} */}
          <MenuItem onClick={() => navigate("/user")}>Account</MenuItem>
          <MenuItem onClick={logOutHandler}>Log Out</MenuItem>
          {user?.is_admin ? (
            <MenuItem onClick={() => navigate("/admin")}>
              Admin Dashboard
            </MenuItem>
          ) : (
            []
          )}
        </Menu>
      </div>
    </>
  );
}

export default AvatarIcon;
