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
import s from './Footer.css';

function Footer() {
  return (
    <footer className={s.root}>
      <div className={s.text}>
        <span className={s.copyright}>© 2016 </span>Офіційний сайт Мар'яни Михайлової
      </div>
    </footer>
  );
}

export default Footer;
