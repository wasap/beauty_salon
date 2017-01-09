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
import Layout from '../../components/Layout';
import s from './styles.css';

class AboutPage extends React.Component {
  static propTypes = {
    workers: React.PropTypes.array.isRequired
  };

  render() {
    return (
      <Layout className={s.content}>
        <div className={`${s.full} ${s.Page1}`}>
          <h2>Контакти</h2>
          телефон +3806300000000 карта
        </div>
        <div className={`${s.full} ${s.Page2}`}>
          <h2>Наші працівники</h2>
          {this.props.workers.map((w,i)=>
          <div className={s.workerContainer} key={i}>
            <div>{w.photo}</div>
            <div>{w.name}</div>
            <div>{w.text}</div>
          </div>
          )}
        </div>
      </Layout>
    );
  }

}

export default AboutPage;
