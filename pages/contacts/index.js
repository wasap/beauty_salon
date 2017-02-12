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
import s from './styles.scss';
import { getProfile } from '../../core/info';
import { connect } from 'react-redux';

class AboutPage extends React.Component {
  static propTypes = {
    dispatch: React.PropTypes.func.isRequired,
    profile: React.PropTypes.object,
  };

  componentDidMount() {
    this.props.dispatch(getProfile());
  }

  render() {
    return (
      <Layout>
        <div className={s.content}>
          <h3 className={s.title}>Контакти</h3>
          <span>{this.props.profile.phone}</span>
          <a href={this.props.profile.vk_url}>
            <div className={s.vkIcon} />
          </a>
        </div>
      </Layout>
    );
  }

}

const mapState = (state) => ({profile: state.infoReducer.profile});

export default connect(mapState)(AboutPage);
