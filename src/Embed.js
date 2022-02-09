import React from "react";
import { useState, useEffect } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import { withStyles } from "@material-ui/core/styles";

var QuickSightEmbedding = require("amazon-quicksight-embedding-sdk");

const useStyles = (theme) => ({
  loading: {
    alignContent: "center",
    justifyContent: "center",
    display: "flex",
    marginTop: theme.spacing(4),
  },
});
const Dashboard_API =
  "https://hfzx0rhmy6.execute-api.us-east-1.amazonaws.com/test/anonymous-embed-sample?mode=getUrl";
class Embed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loader: true,
    };
  }

  componentDidMount() {
    this.getQuickSightDashboardEmbedURL();
  }

  getQuickSightDashboardEmbedURL = async () => {
    const containerDiv = document.getElementById("dashboardContainer");

    const [Dashboard, setDashboard] = useState("");

    const getDashboard = (API) => {
      fetch(API)
        .then((res) => res.json())
        .then((data) => {
          console.log(data.EmbedUrl);
          setDashboard(data.EmbedUrl);
        });
    };

    useEffect(() => {
      getDashboard(Dashboard_API);
    }, []);

    const options = {
      url: { Dashboard },
      container: containerDiv,
      parameters: {
        country: "United States",
      },
      scrolling: "no",
      height: "800px",
      width: "912px",
      footerPaddingEnabled: true,
    };
    const dashboard = QuickSightEmbedding.embedDashboard(options);
    this.setState({ loader: false });
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        {this.state.loader && (
          <div className={classes.loading}>
            <CircularProgress />
          </div>
        )}
        <div id="dashboardContainer"></div>
      </div>
    );
  }
}

export default withStyles(useStyles)(Embed);
