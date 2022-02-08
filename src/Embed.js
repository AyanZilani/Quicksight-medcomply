import React from "react";

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

    const options = {
      url: "https://us-east-1.quicksight.aws.amazon.com/embed/11275a8c669b4a4d864d031f870f26a1/dashboards/2ec3873c-e454-4e70-b1ae-0c68934e42f1?code=AYABeGkTMhTmAt0Q5Co6ThX6XIoAAAABAAdhd3Mta21zAEthcm46YXdzOmttczp1cy1lYXN0LTE6MjU5NDgwNDYyMTMyOmtleS81NGYwMjdiYy03MDJhLTQxY2YtYmViNS0xNDViOTExNzFkYzMAuAECAQB4EeOLgrUr51nsHbjCawUUKjOqEm284CNxqOjvtm6TGiwBMuqgg9HjkKzUmBDCM7F6YgAAAH4wfAYJKoZIhvcNAQcGoG8wbQIBADBoBgkqhkiG9w0BBwEwHgYJYIZIAWUDBAEuMBEEDOyT2jaC-58V8EdSQQIBEIA7LPJVphvSHXt1WjApEGyXw230kYYUZfMetgQUdwmgAwOYUTySaJ4VMnIxN8IbUkLx1E8qiP_T3VbXs0QCAAAAAAwAABAAAAAAAAAAAAAAAAAACs5HDYD1pvPziE77x2l8jP____8AAAABAAAAAAAAAAAAAAABAAAAmzEd3R__XkfPHcgIxU9BMv4aD8PbZ-Ge37g0tBVtdeOrFxJMVBcRhgzq88GDZ-lSNWucdeCUwdGH5L6SI5YG25e6oaTrJq5LMQ-fD7W-m3tjK3zEDpo3IGsBXLj6J6pOW1W66S0Wy-7dsnDT3z7BS66ip2bd0V-PY4c_rQlG3Wiu-HonYuwivduTo12EqovPVAcm1gRuwMHa0ByfyXVuCSfTMhyyHcuZkoK5jg%3D%3D&identityprovider=quicksight&isauthcode=true",
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
            {" "}
            <CircularProgress />{" "}
          </div>
        )}
        <div id="dashboardContainer"></div>
      </div>
    );
  }
}

export default withStyles(useStyles)(Embed);
