import React, { Component } from 'react';
import HeaderDesktop from './header-desktop/HeaderDesktop';
import { Responsive } from 'semantic-ui-react';
import HeaderMobile from './header-mobile/HeaderMobile';
import PropTypes from 'prop-types'
import 'semantic-ui-less/semantic.less'

class HeaderContainer extends Component {

  //Called to get width of screen. Defaults to using `window.innerWidth` when in a browser; otherwise, assumes a width of 0.
  getWidth = () => {
    const isSSR = typeof window === 'undefined'
    return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
  }

  render() {

    const {getWidth, children} = this.props;

    return (
      <div>
        <HeaderDesktop 
          getWidth={getWidth}
          children={children}
        />
        <HeaderMobile
          getWidth={getWidth}
          children={children}
        />
      </div>
    );
  }
}

HeaderContainer.propTypes = {
  children: PropTypes.node,
}


export default HeaderContainer;