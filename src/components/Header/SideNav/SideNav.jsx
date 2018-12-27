import React from 'react'
import {SideNav as SideNavigation} from 'react-simple-sidenav'
import SideNavItems from './SideNavItems'

 const SideNav=(props)=> {
  return (
    <div>
      <SideNavigation
      showNav={props.showNav}
      onHideNav={props.onHideNav}
      navStyle={{
          background:'#242424',
          maxWidth:'220px',
       
      }}
      >
      <SideNavItems hideNav={props.onHideNav}/>
      </SideNavigation>
    </div>
  )
}


export default SideNav;