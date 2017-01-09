/**
 * React Static Boilerplate
 * https://github.com/kriasoft/react-static-boilerplate
 *
 * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Link from '../Link';
import s from './Navigation.scss'

class Navigation extends React.Component {
  state = {
    opened: false
  }
  toggle = () =>{
    this.setState({
      opened: !this.state.opened
    })
  }
  hide = ()=>{
    this.setState({
      opened: false
    })
  }

  render() {
    return (
      <div className={s.container}>
      <div className={s.open} onClick={this.toggle}/>
      <nav className={`${s.nav} ${this.state.opened?s.opened:s.hidden}`} onClick={this.hide} >
        <Link className="mdl-navigation__link" to="/">Головна</Link>
        <Link className="mdl-navigation__link" to="/about">Про нас</Link>
        <Link className="mdl-navigation__link" to="/services">Сервiси</Link>
        <Link className="mdl-navigation__link" to="/gallery">Наші роботи</Link>
      </nav>
      </div>
    );
  }

}

export default Navigation;
