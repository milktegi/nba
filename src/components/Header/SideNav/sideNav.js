import React from 'react';
import SideNav from 'react-simple-sidenav';

const SideNavigation = (props) => {
    return(
      <div>
        {/** 캐치해야 하는 props 
       showNav={this.state.showNav}
       onHideNav={()=> this.togglesidenav(false)}
       onOpenNav={()=> this.togglesidenav(true)}
       /> */}
        <SideNav
        showNav={props.showNav}
        onHideNav={props.onHideNav}
        >
          Options
        </SideNav>
      </div>
    )
}

export default SideNavigation;