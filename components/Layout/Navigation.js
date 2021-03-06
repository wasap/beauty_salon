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
import s from './Navigation.scss';

class Navigation extends React.Component {
  constructor() {
    super();
    const links = [
      { to: '/', text: 'Головна', active: s.selected },
      { to: '/services', text: 'Послуги' },
      { to: '/gallery', text: 'Портфоліо' },
      { to: '/contacts', text: 'Контакти' },
    ];
    links.forEach(l => {
      if (l.to === location.pathname) {
        l.active = s.active;
      }
    });
    this.state = {
      opened: false,
      links,
    };
  }

  toggle = () => {
    this.setState({
      opened: !this.state.opened,
    });
  }
  hide = () => {
    this.setState({
      opened: false,
    });
  }

  render() {
    return (
      <div className={s.container}>
        <div className={s.open} onClick={this.toggle} />
        <nav className={`${s.nav} ${this.state.opened ? s.opened : s.hidden}`} onClick={this.hide} >
        {this.state.links.map((x, key) =>
          <Link className={`${s.link} ${x.active}`} to={x.to} key={key}>{x.text}</Link>
        )}
        </nav>
      </div>
    );
  }

}

export default Navigation;
