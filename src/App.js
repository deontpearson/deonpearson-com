import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import { Paper, Grid, IconButton, Card, CardContent } from "@material-ui/core";

import TypoGraphy from "@material-ui/core/Typography";

import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
  },
}));

const message =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mattis rhoncus urna neque viverra justo. Est ante in nibh mauris cursus mattis. Accumsan sit amet nulla facilisi morbi tempus iaculis. Purus in massa tempor nec feugiat nisl. Imperdiet massa tincidunt nunc pulvinar sapien et. Sit amet commodo nulla facilisi nullam vehicula ipsum. Aliquam id diam maecenas ultricies mi eget mauris pharetra et. Ut aliquam purus sit amet luctus venenatis. Id donec ultrices tincidunt arcu non sodales. Aliquet enim tortor at auctor urna nunc. Duis ut diam quam nulla porttitor massa. Purus viverra accumsan in nisl nisi scelerisque eu ultrices vitae. Augue ut lectus arcu bibendum at varius vel pharetra vel. Fringilla urna porttitor rhoncus dolor purus.";

function App() {
  const classes = useStyles();

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Card className={classes.root} align="center">
          <CardContent>
            <TypoGraphy variant="h3">Deon Pearson</TypoGraphy>
            <IconButton
              aria-label="linkedin"
              onClick={() => {
                window.open(
                  "https://www.linkedin.com/in/deon-pearson-0a3341104/"
                );
              }}
            >
              <LinkedInIcon style={{ fontSize: 40 }} />
            </IconButton>
            <IconButton
              aria-label="github"
              onClick={() => {
                window.open("https://github.com/deontpearson");
              }}
            >
              <GitHubIcon style={{ fontSize: 40 }} />
            </IconButton>
            <IconButton
              aria-label="twitter"
              onClick={() => {
                window.open("https://twitter.com/deontpearson");
              }}
            >
              <TwitterIcon style={{ fontSize: 40 }} />
            </IconButton>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={2}>
          <Grid key={0} item xs={6}>
            <Paper className={classes.paper}>
              <TypoGraphy>{message}</TypoGraphy>
            </Paper>
          </Grid>
          <Grid key={1} item xs={6}>
            <Paper className={classes.paper}>
              <TypoGraphy>{message}</TypoGraphy>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default App;
