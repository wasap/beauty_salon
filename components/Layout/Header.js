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
import Navigation from './Navigation';
import Link from '../Link';
import s from './Header.css';

class Header extends React.Component {

  render() {
    return (
      <header className={s.header}>
        <a className={s.call} href="tel:+380630000000">+38(063)000-00-00</a>
        <div className="location">м. Хмельницький</div>
        <Navigation/>
      </header>
    );
  }

}

export default Header;
