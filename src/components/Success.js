import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';


 class Success extends Component {
 
  
 

    render() {
        const { values : {firstName} } = this.props;
        return (
            <MuiThemeProvider>
               <React.Fragment>
                 <AppBar  title = 'Success'/>
                 <h1 style={{color:'green'}}>Thanks {firstName} For The Submission</h1>
               </React.Fragment>
            </MuiThemeProvider>
        )
    }
}


export default Success;
