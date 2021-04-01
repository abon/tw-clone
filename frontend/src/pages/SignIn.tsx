import React, { useState } from "react";

import {
  makeStyles,
  Typography,
  Button,
  FormControl,
  FormGroup,
  TextField,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import TwitterIcon from "@material-ui/icons/Twitter";
import PeopleOutlineIcon from "@material-ui/icons/PeopleOutline";
import MessageIcon from "@material-ui/icons/ChatBubbleOutline";
import { ModalBlock } from "../components/ModalBlock";

export const useStylesSignIn = makeStyles((theme) => ({
  wrapper: {
    display: "flex",
    height: "100vh",
  },
  blueSideBigIcon: {
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate( -50%, -50%)",
    width: "350%",
    height: "350%",
  },
  blueSide: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#65d6ce",
    flex: "0 0 50%",
    overflow: "hidden",
    position: "relative",
  },
  loginSide: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flex: "0 0 50%",
  },
  blueSideListInfo: {
    position: "relative",
    listStyle: "none",
    padding: 0,
    margin: 0,
    width: 380,
    "& h5": {
      display: "flex",
      alignItems: "center",
      color: "white",
      fontWeight: 700,
      fontSize: 20,
    },
  },

  loginSideTwitterIcon: {
    fontSize: 45,
  },
  blueSideListInfoIcon: {
    fontSize: 32,
    marginRight: 15,
  },
  loginSideWrapper: {
    width: 380,
  },
  blueSideListInfoItem: {
    marginBottom: 40,
  },
  loginSideTitle: {
    fontWeight: 600,
    fontSize: 32,
    marginBottom: 45,
    marginTop: 20,
  },
  loginSideField: {
    marginBottom: 18,
  },
  registerField: {
    marginBottom: theme.spacing(5),
  },
}));

export const SignIn: React.FC = (): React.ReactElement => {
  const classes = useStylesSignIn();

  const [visibleModal, setVisibleModal] = useState<"signIn" | "signUp">();

  const handleClickOpenSignIn = (): void => {
    setVisibleModal("signIn");
  };

  const handleClickOpenSignUp = (): void => {
    setVisibleModal("signUp");
  };

  const handleCloseModal = (): void => {
    setVisibleModal(undefined);
  };

  return (
    <div className={classes.wrapper}>
      <section className={classes.blueSide}>
        <TwitterIcon color="primary" className={classes.blueSideBigIcon} />
        <ul className={classes.blueSideListInfo}>
          <li className={classes.blueSideListInfoItem}>
            <Typography variant="h5">
              <SearchIcon className={classes.blueSideListInfoIcon} />
              Read what is happening around the world
            </Typography>
          </li>
          <li className={classes.blueSideListInfoItem}>
            <Typography variant="h5">
              <PeopleOutlineIcon className={classes.blueSideListInfoIcon} />
              Know what is up
            </Typography>
          </li>
          <li className={classes.blueSideListInfoItem}>
            <Typography variant="h5">
              <MessageIcon className={classes.blueSideListInfoIcon} />
              Join Twitter to be in the trend
            </Typography>
          </li>
        </ul>
      </section>
      <section className={classes.loginSide}>
        <div className={classes.loginSideWrapper}>
          <TwitterIcon
            color="primary"
            className={classes.loginSideTwitterIcon}
          />
          <Typography className={classes.loginSideTitle} variant="h3">
            Happening now
          </Typography>
          <Typography>
            {" "}
            <b> Join Twitter today !</b>{" "}
          </Typography>
          <br />
          <Button
            onClick={handleClickOpenSignUp}
            style={{ marginBottom: 15 }}
            variant="contained"
            color="primary"
            fullWidth
          >
            Sign up
          </Button>
          <Button
            onClick={handleClickOpenSignIn}
            variant="outlined"
            color="primary"
            fullWidth
          >
            Login
          </Button>
          <ModalBlock
            visible={visibleModal === "signIn"}
            onClose={handleCloseModal}
            classes={classes}
            title="Login Account"
          >
            <FormControl component="fieldset" fullWidth>
              <FormGroup aria-label="position" row>
                <TextField
                  className={classes.loginSideField}
                  autoFocus
                  id="email"
                  label="Email"
                  type="email"
                  fullWidth
                />
                <TextField
                  className={classes.loginSideField}
                  autoFocus
                  id="password"
                  label="Password"
                  type="password"
                  fullWidth
                />
                <Button
                  onClick={handleCloseModal}
                  color="primary"
                  style={{ marginBottom: 14 }}
                  variant="contained"
                  fullWidth
                >
                  Login
                </Button>
              </FormGroup>
            </FormControl>
          </ModalBlock>

          {/**********   REGISTER MODAL ************/}

          <ModalBlock
            visible={visibleModal === "signUp"}
            onClose={handleCloseModal}
            classes={classes}
            title="Create a new account"
          >
            <FormControl component="fieldset" fullWidth>
              <FormGroup aria-label="position" row>
                <TextField
                  className={classes.registerField}
                  autoFocus
                  id="name"
                  label="Name"
                  type="name"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  fullWidth
                />
                <TextField
                  className={classes.registerField}
                  autoFocus
                  id="email"
                  label="Email"
                  type="email"
                  fullWidth
                />
                <TextField
                  className={classes.registerField}
                  autoFocus
                  id="password"
                  label="Password"
                  type="password"
                  fullWidth
                />
                <Button
                  onClick={handleCloseModal}
                  color="primary"
                  style={{ marginBottom: 14 }}
                  variant="contained"
                  fullWidth
                >
                  Next
                </Button>
              </FormGroup>
            </FormControl>
          </ModalBlock>
        </div>
      </section>
    </div>
  );
};
