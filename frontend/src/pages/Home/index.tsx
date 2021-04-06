import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  Grid,
  Paper,
  Typography,
  Container,
  InputAdornment,
  ListItem,
  Divider,
  ListItemText,
  List,
} from "@material-ui/core";

import SearchIcon from "@material-ui/icons/Search";

import { Tweet } from "../../components/Tweet";
import { useHomeStyles } from "./useHomeStyles";
import { SideMenu } from "../../components/SideMenu";
import { AddTweetForm } from "../../components/AddTweetForm";
import { SearchTextField } from "../../components/SearchTextField";
import { fetchTweets } from "../../store/ducks/tweets/actionCreators";
import { selectTweetsItems } from "../../store/ducks/tweets/selectors";

export const Home: React.FC = (): React.ReactElement => {
  const dispatch = useDispatch();
  const classes = useHomeStyles();

  const tweets = useSelector(selectTweetsItems);

  useEffect(() => {
    dispatch(fetchTweets());
  }, [dispatch]);

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
              <div className={classes.addForm}>
                <AddTweetForm
                  classes={classes}
                  //  maxRows={15}
                />
              </div>
            </Paper>
            {[
              tweets.map((tweet) => (
                <Tweet
                  key={tweet._id}
                  text={tweet.text}
                  classes={classes}
                  user={tweet.user}
                />
              )),
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
