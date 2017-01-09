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
import s from './Footer.css'

function Footer() {
  return (
    <footer className={s.root}>
      <Link to="/terms">Умови використання</Link>
      <div className={s.social}>
        <a href="http://vk.com" target="_blank">vk
      </a>
      </div>
    </footer>
  );
}

export default Footer;
