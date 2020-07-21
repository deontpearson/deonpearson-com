import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import TypoGraphy from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { Home, Book, AccountBox } from "@material-ui/icons";

function NavBar(props) {
  return (
    <List component="nav">
      <ListItem component="div">
        <ListItemText inset>
          <TypoGraphy color="inherit" variant="h6">
            <Link color="inherit" href="#/">
              <Home />
            </Link>
          </TypoGraphy>
        </ListItemText>

        <ListItemText inset>
          <TypoGraphy color="inherit" variant="h6">
            <Link color="inherit" href="#/posts">
              <Book />
            </Link>
          </TypoGraphy>
        </ListItemText>

        <ListItemText inset>
          <TypoGraphy color="inherit" variant="h6">
            <Link color="inherit" href="#/contact">
              <AccountBox />
            </Link>
          </TypoGraphy>
        </ListItemText>
      </ListItem>
    </List>
  );
}

export default NavBar;
