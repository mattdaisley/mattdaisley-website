import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import {
  Grid,
  Paper,
  makeStyles,
  createStyles,
  Theme
} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      height: "100%",
      color: theme.palette.text.secondary
    }
  })
);

export default function App() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
        <Grid
          container
          direction="column"
          justify="flex-end"
          style={{ height: "100vh" }}
        >
          <Grid item xs>
            <Paper className={classes.paper}>xs</Paper>
          </Grid>
          <Grid item xs>
            <Paper className={classes.paper}>xs</Paper>
          </Grid>
          <Grid item xs style={{ maxHeight: 50 }}>
            <Paper className={classes.paper}>
              <Typography>
                {/* <ArrowDownward /> */}
                Portfolio
                {/* <ArrowDownward /> */}
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
      <Container fixed>
        <Typography
          component="div"
          style={{ backgroundColor: "#cfe8fc", height: "100vh" }}
        >
          Test
        </Typography>
      </Container>
    </React.Fragment>
  );
}
