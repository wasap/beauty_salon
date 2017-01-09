/**
 * React Static Boilerplate
 * https://github.com/kriasoft/react-static-boilerplate
 *
 * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import Layout from '../../components/Layout';
import s from './styles.scss';
import Link from '../../components/Link';

class HomePage extends React.Component {

  static propTypes = {
    articles: PropTypes.array.isRequired,
    services: PropTypes.array.isRequired,
    reviews: PropTypes.array.isRequired,
  };
  state = {
    bgImg: '/img/salon.jpg'
  }

  componentWillUpdate(){
    document.body.style.backgroundImage=(this.state.bgImg);
  }

  componentDidMount() {
    document.title = 'Салон краси у Мар\'яни';
    document.body.classList.add(s.body);
    window.addEventListener('scroll',this.setBgImg);
  }
  componentWillUnmount(){
    document.body.classList.remove(s.body);
    document.body.removeAttribute('style');
    window.removeEventListener('scroll',this.setBgImg)
  }
  setBgImg = ()=>{
    const top =  document.body.scrollTop;
    const height = window.screen.availHeight - 120;
    switch (true){
      case top < height:
        this.setState({
          bgImg: 'url(/img/salon.jpg)'
        });
        break;
      case top>height && top <height*2:
        this.setState({
          bgImg: 'url(/img/brushes.jpg)'
        });
        break;
      case top>height*2 && top < height*3:
        this.setState({
          bgImg: 'url(/img/reviews.jpg)'
        });
        break;
      case top>height*3:
        this.setState({
          bgImg: 'url(/img/Uzor.jpg)'
        });
        break;
    }
  }

  render() {
    return (
      <Layout className={s.content}>
        <div className={`full`}>
          <h2 className={s.mainTitle}>Вас вітає салон краси у Мар'яни</h2>
        </div>
        <div className={`full`}>
          <h2>Наші сервіси</h2>
          <div className={s.services}>
          {this.props.services.map((service,i)=>
            <div className={s.serviceContainer} key={i} style={{background:`url(${service.img}) center/cover no-repeat`}}>
              <Link className={s.serviceLink} to={`/services/${service.url}`}>
                <div className={s.serviceLinkText}>{service.name}</div>
              </Link>
            </div>)}
          </div>
        </div>
        <div className={`full`}>
          <h2 >Останні відгуки</h2>
          <div className={s.reviews}>
            {this.props.reviews.map((r,i)=>
              <div className={s.review} key={i}>
                <div className={s.reviewImg} style={{backgroundImage:`url(${r.img})`}}></div>
                <div className={s.reviewAuthor}>{r.author}&nbsp;</div>
                <div className={s.reviewDate}>{r.date}</div>
                <div className={s.reviewRating}>{r.rating}/5</div>
                <div className={s.reviewBody}>{r.body}</div>
              </div>
            )}
          </div>
        </div>
        <div className={`full`}>
        <h2>Новини</h2>
        <div className={s.articles}>
          {this.props.articles.map((article, i) =>
            <div className={s.article} key={i}>
              <div className={s.articleDate}>{article.date}</div>
              <div className={s.articleTitle}>{article.title}</div>
              <div>{article.body}</div>
            </div>
          )}
        </div>
        </div>

      </Layout>
    );
  }

}

export default HomePage;
