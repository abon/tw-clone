import cn from "classnames";
import grey from "@material-ui/core/colors/grey";
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
import { Tweet } from "../components/Tweet";
import { SideMenu } from "../components/SideMenu";

import SearchIcon from "@material-ui/icons/Search";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import ImageOutlinedIcon from "@material-ui/icons/ImageOutlined";
import EmojiIcon from "@material-ui/icons/EmojiEmotionsOutlined";

export const useHomeStyles = makeStyles((theme: Theme) => ({
  wrapper: {
    height: "100vh",
  },
  logo: {
    margin: "15px 0",
  },
  logoIcon: {
    fontSize: 36,
  },
  sideMenuList: {
    maxWidth: 230,
    top: 0,
    margin: 0,
    padding: 0,
    position: "sticky",
    listStyle: "none",
  },
  sideMenuListItem: {
    "&:hover": {
      cursor: "pointer",
      "& div": {
        background: "rgba(29,161,242,0.1)",
        "& h6": {
          color: theme.palette.primary.main,
        },
        "& svg ": {
          color: theme.palette.primary.main,
        },
      },
    },
    "& div": {
      height: 50,
      borderRadius: 30,
      marginBottom: 10,
      padding: "0 25px 0 20px",
      alignItems: "center",
      display: "inline-flex",
      position: "relative",
      transition: "background-color 0.1s ease-in-out",
    },
  },
  sideMenuListLabel: {
    fontSize: 20,
    marginLeft: 10,
  },
  sideMenuListIcon: {
    fontSize: 32,
    marginLeft: -5,
  },
  sideMenuTweetButton: {
    width: "80%",
    padding: theme.spacing(3),
    marginTop: theme.spacing(2),
  },
  tweetsWrapper: {
    height: "100%",
  },
  tweetsHeader: {
    padding: "10px 15px",
    "& h6": {
      fontWeight: 800,
    },
  },
  tweet: {
    cursor: "pointer",
    "&:hover": {
      background: "rgb(245,248,250)",
    },
  },
  tweetUserName: {
    color: grey[500],
  },
  tweetAvatar: {
    width: theme.spacing(5),
    height: theme.spacing(5),
  },
  tweetFooter: {
    width: "80%",
    position: "relative",
    left: -13,
    display: "flex",
    justifyContent: "space-between",
  },
  tweetIcon: {},
  rightSide: {
    paddingTop: 20,
    position: "sticky",
    top: 0,
  },
  rightSideBlock: {
    backgroundColor: "#f5f8fa",
    borderRadius: 15,
    marginTop: 20,
    "& .MuiList-root": {
      paddingTop: 0,
    },
  },
  rightSideBlockHeader: {
    borderTop: 0,
    borderLeft: 0,
    borderRight: 0,
    backgroundColor: "transparent",
    padding: "13px 18px",
    "& b": {
      fontSize: 20,
      fontWeight: 800,
    },
  },
  rightSideBlockItem: {
    cursor: "pointer",
    "& .MuiTypography-body1": {
      fontWeight: 700,
    },
    "& .MuiListItemAvatar-root": {
      minWidth: 50,
    },
    "& .MuiListItemText-root": {
      margin: 0,
    },
    "&:hover": {
      backgroundColor: "#edf3f6",
    },
  },
  addForm: {
    padding: 20,
  },
  addFormBody: {
    display: "flex",
    width: "100%",
  },
  addFormBottom: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  addFormBottomActions: {
    marginTop: 10,
    paddingLeft: 70,
  },
  addFormTextarea: {
    width: "100%",
    border: 0,
    fontSize: 20,
    outline: "none",
    fontFamily: "inherit",
    resize: "none",
  },
  addFormBottomLine: {
    height: 12,
    backgroundColor: "#e6ecf0",
  },
  addFormCircleProgress: {
    position: "relative",
    width: 20,
    height: 20,
    margin: "0 10px",
    "& .MuiCircularProgress-root": {
      position: "absolute",
    },
  },
  addFormBottomRight: {
    display: "flex",
    alignItems: "center",
  },
}));

export const SearchTextField = withStyles((theme: Theme) =>
  createStyles({
    root: {
      "& .MuiOutlinedInput-root": {
        borderRadius: 30,
        backgroundColor: "#e6ecf0",
        padding: 0,
        paddingLeft: 15,
        "& .Mui-focused": {
          backgroundColor: "#fff",
          "& fieldset": {
            borderWidth: 1,
            borderColor: theme.palette.primary.main,
          },
          "& svg path": { fill: theme.palette.primary.main },
        },
        "&:hover": {
          "& fieldset": { borderColor: "transparent" },
        },
        "& fieldset": {
          borderColor: "transparent",
          borderWidth: 1,
        },
      },
      "& .MuiOutlinedInput-input": {
        padding: "12px 14px 14px 5px",
      },
    },
  })
)(TextField);

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
              {/* <AddTweetForm classes={classes} maxRows={15} /> */}
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
            {/* <SearchTextField
              fullWidth
              variant="outlined"
              placeholder="search in twitter"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Search />
                  </InputAdornment>
                ),
              }}
            /> */}
            <Paper className={classes.rightSideBlock}>
              <Paper className={classes.rightSideBlockHeader}>
                <b>Actual theme</b>
              </Paper>
              <List>
                <ListItem className={classes.rightSideBlockItem}>
                  <ListItemText
                    primary="Las-Vegas"
                    secondary={
                      <Typography component="span" variant="body1">
                        Tweets 3 331
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
