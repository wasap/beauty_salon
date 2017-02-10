import Layout from '../../components/Layout';
import { connect } from 'react-redux';
import React from 'react';
import s from './styles.scss';
import { getServices, getBrands, getReviews } from '../../core/info';

class servicesPage extends React.Component {
  static propTypes = {
    services: React.PropTypes.array.isRequired,
    brands: React.PropTypes.object.isRequired,
    reviews: React.PropTypes.object.isRequired,
    dispatch: React.PropTypes.func,
  }

  componentDidMount() {
    this.props.dispatch(getServices());
    this.props.dispatch(getBrands());
    this.props.dispatch(getReviews());
    document.body.classList.add(s.body);
  }
  componentWillUnmount() {
    document.body.classList.remove(s.body);
  }

  render() {
    return (<Layout>
      <div className={s.full}>
        <div className={s.nameHeader}>
          <div className={s.nameHeaderHolder}>
            <div className={s.nameHeaderText}>Мої послуги</div>
            <div className={s.nameHeaderDescription}>
              {this.props.services.map(se => se.name).join(', ')}
            </div>
          </div>
        </div>
      </div>
      <div className={s.white}>
        {this.props.services.map((se, i) =>
          <div
            key={i}
            id={se.id}
          >
            <h2 className={s.center}>{se.title}</h2>
            <div>{se.description}</div>
            <div className={s.details}>
              {se.details.map((d, key) =>
                <div key={key} className={s.details_container}>
                  <div
                    className={s.details_img}
                    style={{ background: `url(${d.photo}) center/contain no-repeat` }}
                  />
                  <div className={s.details_text}>{d.title}</div>
                </div>
              )}
            </div>
          </div>
        )}
        <h2 className={s.center}>{this.props.brands.title}</h2>
        <div>{this.props.brands.text}</div>
        <div className={s.brands}>
          {this.props.brands.photos.map((b, key) =>
            <img className={s.brands_img} src={b} role="presentation" key={key} />
          )}
        </div>
        <h2 className={s.center}>{this.props.reviews.title}</h2>
        <div className={s.reviews}>
          {this.props.reviews.list.map((b, key) =>
            <div className={s.reviews_box} key={key}>
              <img className={s.reviews_img} src={b.img} role="presentation" key={key} />
              <div className={s.reviews_hidden}>
                <div className={s.reviews_title}>{b.author}</div>
                <div className={s.reviews_date}>{b.date}</div>
                <div className={s.reviews_body}>{b.body}</div>
                <a href={b.vkLink} className={s.reviews_vk} target="_blank">
                  <div className={s.vkIcon} />
                </a>
              </div>
          </div>
          )}
        </div>
      </div>
    </Layout>);
  }

}
const mapState = state => ({
  services: state.infoReducer.services,
  brands: state.infoReducer.brands,
  reviews: state.infoReducer.reviews,
})
export default connect(mapState)(servicesPage);
