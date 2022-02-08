import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import React, { useState, useEffect } from "react";

import Embed from "./Embed";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  title: {
    paddingTop: theme.spacing(2),
  },
}));

const Dashboard_API =
  "https://hfzx0rhmy6.execute-api.us-east-1.amazonaws.com/test/anonymous-embed-sample";

function App() {
  const classes = useStyles();
  const [Dashboard, setDashboard] = useState([]);

  const getDashboard = (API) => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.EmbedUrl);
        setDashboard([...data.EmbedUrl]);
      });
  };

  useEffect(() => {
    getDashboard(Dashboard_API);
  }, []);

  return (
    <div>
      <Container maxWidth="md">
        <Typography
          variant="h4"
          component="h1"
          align="center"
          color="textPrimary"
          className={classes.title}
          gutterBottom
        >
          Amazon QuickSight Embed
        </Typography>
      </Container>
    </div>
  );
}

export default App;
