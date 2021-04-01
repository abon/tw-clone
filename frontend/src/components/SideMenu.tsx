import { IconButton, Typography, Button, Hidden } from "@material-ui/core";

import SearchIcon from "@material-ui/icons/Search";
import CreateIcon from "@material-ui/icons/Create";
import TwitterIcon from "@material-ui/icons/Twitter";
import ListAltIcon from "@material-ui/icons/ListAlt";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import { useHomeStyles } from "../pages/Home/useHomeStyles";

interface SideMenuProps {
  classes: ReturnType<typeof useHomeStyles>;
}

export const SideMenu: React.FC<SideMenuProps> = ({
  classes,
}: SideMenuProps): React.ReactElement => {
  return (
    <ul className={classes.sideMenuList}>
      <li className={classes.sideMenuListItem}>
        <IconButton className={classes.logo}>
          <TwitterIcon className={classes.logoIcon} color="primary" />
        </IconButton>
      </li>

      <li className={classes.sideMenuListItem}>
        <div>
          <SearchIcon className={classes.sideMenuListIcon} />
          <Hidden smDown>
            <Typography className={classes.sideMenuListLabel} variant="h6">
              Search
            </Typography>
          </Hidden>
        </div>
      </li>

      <li className={classes.sideMenuListItem}>
        <div>
          <NotificationsNoneIcon className={classes.sideMenuListIcon} />
          <Hidden smDown>
            <Typography className={classes.sideMenuListLabel} variant="h6">
              Notifications
            </Typography>
          </Hidden>
        </div>
      </li>
      <li className={classes.sideMenuListItem}>
        <div>
          <MailOutlineIcon className={classes.sideMenuListIcon} />
          <Hidden smDown>
            <Typography className={classes.sideMenuListLabel} variant="h6">
              Message
            </Typography>
          </Hidden>
        </div>
      </li>
      <li className={classes.sideMenuListItem}>
        <div>
          <BookmarkBorderIcon className={classes.sideMenuListIcon} />
          <Hidden smDown>
            <Typography className={classes.sideMenuListLabel} variant="h6">
              Bookmarks
            </Typography>
          </Hidden>
        </div>
      </li>
      <li className={classes.sideMenuListItem}>
        <div>
          <ListAltIcon className={classes.sideMenuListIcon} />
          <Hidden smDown>
            <Typography className={classes.sideMenuListLabel} variant="h6">
              Lists
            </Typography>
          </Hidden>
        </div>
      </li>
      <li className={classes.sideMenuListItem}>
        <div>
          <PersonOutlineIcon className={classes.sideMenuListIcon} />
          <Hidden smDown>
            <Typography className={classes.sideMenuListLabel} variant="h6">
              Profile
            </Typography>
          </Hidden>
        </div>
      </li>
      <li className={classes.sideMenuListItem}>
        <Button
          className={classes.sideMenuTweetButton}
          variant="contained"
          color="primary"
          fullWidth
        >
          <Hidden smDown> Tweet</Hidden>
          <Hidden mdUp>
            {" "}
            <CreateIcon />{" "}
          </Hidden>
        </Button>
      </li>
    </ul>
  );
};
