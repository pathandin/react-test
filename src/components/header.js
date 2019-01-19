import React, { Component } from 'react';
 class Header extends Component {
    render() {
      return (
        <div className="header">
          <div className="contact_detail">
            <i class="fa fa-phone" aria-hidden="true"></i> <a href="tel:9873395329">{this.props.phone}</a> 
            <i class="fa fa-envelope" aria-hidden="true"></i> <a href="mailto:pathandin@gmail.com">{this.props.emailid}</a> 
          </div>
          <div className="social">
            <a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a>
            <a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a>
            <a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a>
            <a href="#"><i class="fa fa-youtube" aria-hidden="true"></i></a>         
          </div>
        </div>
      );
    }
  }


export default Header;
  
 