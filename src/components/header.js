import React, { Component } from 'react';
 class Header extends Component {
    render() {
      return (
        <div>
          Hello {this.props.firstname} {this.props.lastname}
        </div>
      );
    }
  }


  export default Header;
  
 