import React, { Component } from 'react';
import { Responsive, Sidebar, Menu, Segment, Container, Icon, Header } from 'semantic-ui-react';
import  PropTypes  from 'prop-types';

class HeaderMobile extends Component {
  state = {}

  handleSidebarHide = () => this.setState({ sidebarOpened: false })

  handleToggle = () => this.setState({ sidebarOpened: true })

  render() {
    const { children, getWidth } = this.props
    const { sidebarOpened } = this.state

    return (
      <Responsive
        as={Sidebar.Pushable}
        getWidth={getWidth}
        {...Responsive.onlyMobile}
      >
        <Sidebar
          as={Menu}
          animation='push'
          inverted
          onHide={this.handleSidebarHide}
          vertical
          visible={sidebarOpened}
          width='thin'
        >
          <Menu.Item as='a' active >
            Home
          </Menu.Item>
          <Menu.Item as='a'>Work</Menu.Item>
          <Menu.Item as='a'>Company</Menu.Item>
          <Menu.Item as='a'>Careers</Menu.Item>
          <Menu.Item as='a'>Log in</Menu.Item>
          <Menu.Item as='a'>Sign Up</Menu.Item>
        </Sidebar>

        <Sidebar.Pusher 
          dimmed={sidebarOpened}
          // Makes the vertical bar span to the bottom of the page
          style={{ minHeight: "100vh" }}
        >  
          <Segment
            inverted
            textAlign='center'
            vertical
            style={{minHeight: 40}}
          >
            <Container>
              <Menu fixed='top' inverted>
                <Menu.Item className='logo_container'>
                  <Header className='logo--main' as='h1' content='Manila Venue'/>
                  <Header className='logo--sub' as='h6' content='MUSICAL EVENTS AND PERFORMANCES'/>
                </Menu.Item>
                <Menu.Item 
                  position='right'
                  onClick={this.handleToggle}>
                  <Icon name='sidebar' size='large' />
                </Menu.Item>
              </Menu>
            </Container>
          </Segment>
          {children}
        </Sidebar.Pusher>
      </Responsive>
    )
  }
}

HeaderMobile.propTypes = {
  children: PropTypes.node,
}

export default HeaderMobile;