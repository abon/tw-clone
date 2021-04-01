import cn from "classnames";
import {
  Grid,
  Paper,
  Typography,
  makeStyles,
  Container,
  withStyles,
  createStyles,
  InputBase,
  Theme,
  IconButton,
  InputAdornment,
  TextField,
  ListItem,
  Divider,
  ListItemAvatar,
  Avatar,
  ListItemText,
  List,
  Button,
  TextareaAutosize,
  CircularProgress,
} from "@material-ui/core";
import { Tweet } from "../../components/Tweet";
import { SideMenu } from "../../components/SideMenu";

import SearchIcon from "@material-ui/icons/Search";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import ImageOutlinedIcon from "@material-ui/icons/ImageOutlined";
import EmojiIcon from "@material-ui/icons/EmojiEmotionsOutlined";
import React from "react";
import { AddTweetForm } from "../../components/AddTweetForm";
import { useHomeStyles } from "./useHomeStyles";
import { SearchTextField } from "../../components/SearchTextField";

export const Home: React.FC = (): React.ReactElement => {
  const classes = useHomeStyles();

  return (
    <Container className={classes.wrapper} maxWidth="lg">
      <Grid container spacing={3}>
        <Grid item sm={1} md={3} xs={3}>
          <SideMenu classes={classes} />
        </Grid>
        <Grid item sm={8} md={6} xs={6}>
          <Paper className={classes.tweetsWrapper} variant="outlined">
            <Paper className={classes.tweetsHeader} variant="outlined">
              <Typography variant="h6">Home</Typography>
            </Paper>
            <Paper>
              <AddTweetForm
                classes={classes}
                //  maxRows={15}
              />
            </Paper>
            {[
              ...new Array(10).fill(
                <Tweet
                  text="31 мартдан бошлаб «Фарғона – Истанбул – Фарғона» йўналишида авиақатнов йўлга қўйилди. Мунтазам рейслар чоршанба ва шанба кунлари амалга оширилади."
                  classes={classes}
                  user={{
                    fullname: "Abdullah",
                    username: "@im_abon",
                    avatarUrl:
                      "https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=879&q=80",
                  }}
                />
              ),
            ]}
          </Paper>
        </Grid>
        <Grid item sm={3} md={3}>
          <div className={classes.rightSide}>
            <SearchTextField
              fullWidth
              variant="outlined"
              placeholder="Search"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
            <Paper className={classes.rightSideBlock}>
              <Paper className={classes.rightSideBlockHeader}>
                <b>Actual theme</b>
              </Paper>
              <List>
                <ListItem className={classes.rightSideBlockItem}>
                  <ListItemText
                    primary="#coronavirus"
                    secondary={
                      <Typography component="span" variant="body1">
                        25k tweets
                      </Typography>
                    }
                  />
                  <ListItemText
                    primary="#tesla"
                    secondary={
                      <Typography component="span" variant="body1">
                        10k tweets
                      </Typography>
                    }
                  />
                </ListItem>
                <Divider component="li" />
              </List>
            </Paper>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};
