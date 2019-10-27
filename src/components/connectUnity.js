import React from 'react';
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
});

class ConnectUnity extends React.Component {

    constructor(props) {
      super(props);
      this.state = {};
    }
  
    render() {
      const classes = this.props.classes;
      return (
        <div>  test
        </div>)
    }
  }
  
export default withStyles(styles)(ConnectUnity);