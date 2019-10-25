import React from "react";

import NavToggleList from "../NavToggleList/NavToggleList.component";

import "./Header.styles.css";

class Header extends React.Component {
  state = {
    show: false
  };

  onToggleShow = () => {
    this.setState(state => ({
      show: !state.show
    }));
  };

  render() {
    return (
      <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
        <header className="mdl-layout__header">
          <div className="mdl-layout__header-row">
            <button
              onClick={this.onToggleShow}
              id="demo-menu-lower-left"
              class="mdl-button mdl-js-button mdl-button--icon show"
            >
              <i className="material-icons">more_vert</i>
            </button>
            <span className="mdl-layout-title">Meet Us</span>
            <div className="mdl-layout-spacer"></div>
            <nav className="mdl-navigation mdl-layout--large-screen-only hide">
              <span className="mdl-navigation__link">Link</span>
              <span className="mdl-navigation__link">Link</span>
              <span className="mdl-navigation__link">Link</span>
            </nav>
          </div>
        </header>
        {this.state.show && (
          <div className="nav-menu">
            <NavToggleList />
          </div>
        )}
      </div>
    );
  }
}

export default Header;
