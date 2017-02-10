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
import Link from '../../components/Link';
import { connect } from 'react-redux';
import { getProfile, getServices } from '../../core/info';

class HomePage extends React.Component {
  static propTypes ={
    dispatch: React.PropTypes.func,
    profile: React.PropTypes.object,
    services: React.PropTypes.array,
  }
  componentDidMount() {
    document.title = 'Офіційний сайт Мар\'яни Михайлової';
    document.body.classList.add(s.body);
    this.props.dispatch(getProfile());
    this.props.dispatch(getServices());
  }
  componentWillUnmount() {
    document.body.classList.remove(s.body);
  }

  render() {
    return (
      <Layout className={s.content}>
        <div className={s.full}>
          <div className={s.nameHeader}>
            <div className={s.nameHeaderHolder}>
              <div className={s.nameHeaderText}>{this.props.profile.name}</div>
              <div className={s.nameHeaderDescription}>{this.props.profile.role}</div>
            </div>
          </div>
        </div>
        <div className={s.white}>
          <h2 className={s.aboutTitle}>{this.props.profile.role} {this.props.profile.name}</h2>
          <div className={s.tableAbout}>
            <div className={s.tableAboutCol}>
              <img src={this.props.profile.img} width="100%" alt="profile" />
              <br />
              <b>{this.props.profile.name}</b>
              <div>{this.props.profile.role}</div>
              <br />
              <b>Мої контакти</b>
              <br />
              <span>{this.props.profile.phone}</span>
              <a href={this.props.profile.vk_url}>
                <div className={s.vkIcon} />
              </a>
              <br />
              <br />
              <b>Карьєра</b>
              <br />
              {this.props.profile.career}
              <br />
              <br />
              <b>Навчання та досягнення</b>
              <br />
              {this.props.profile.achievements}
            </div>
            <div className={s.tableAboutCol}>
              <h3>Про мене</h3>
              {this.props.profile.about_text}
            </div>
          </div>
          <br />
          <br />
          <div className={s.services}>
          {this.props.services.map((service, i) =>
            <div
              className={s.serviceContainer}
              key={i}
            >
              <div
                className={s.serviceImage}
                style={{ background: `url(${service.img}) center/cover no-repeat` }}
              />
              <Link className={s.serviceLink} to={`/services#${service.id}`}>
                <div className={s.serviceLinkText}>{service.name}</div>
              </Link>
            </div>)}
          </div>
          <br />
          <br />
          {/*<h2 >Останні відгуки</h2>*/}
          {/*<div className={s.reviews}>*/}
            {/*{this.props.reviews.map((r, i) =>*/}
              {/*<div className={s.review} key={i}>*/}
                {/*<div className={s.reviewImg} style={{ backgroundImage: `url(${r.img})` }}></div>*/}
                {/*<div className={s.reviewAuthor}>{r.author}&nbsp;</div>*/}
                {/*<div className={s.reviewDate}>{r.date}</div>*/}
                {/*<div className={s.reviewRating}>{r.rating}/5</div>*/}
                {/*<div className={s.reviewBody}>{r.body}</div>*/}
              {/*</div>*/}
            {/*)}*/}
          {/*</div>*/}
          {/*<h2>Новини</h2>*/}
          {/*<div className={s.articles}>*/}
            {/*{this.props.articles.map((article, i) =>*/}
              {/*<div className={s.article} key={i}>*/}
                {/*<div className={s.articleDate}>{article.date}</div>*/}
                {/*<div className={s.articleTitle}>{article.title}</div>*/}
                {/*<div>{article.body}</div>*/}
              {/*</div>*/}
            {/*)}*/}
          {/*</div>*/}
        </div>

      </Layout>
    );
  }
}
const mapState = (state) => ({
  profile: state.infoReducer.profile,
  services: state.infoReducer.services,
});


export default connect(mapState)(HomePage);
