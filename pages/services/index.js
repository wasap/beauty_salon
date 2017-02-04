import Layout from '../../components/Layout';
import { connect } from 'react-redux';
import React from 'react';
import s from './styles.scss';
import { getServices } from '../../core/info';

class servicesPage extends React.Component {
  static propTypes = {
    services: React.PropTypes.array.isRequired,
    dispatch: React.PropTypes.func,
  }

  componentDidMount() {
    this.props.dispatch(getServices());
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
      </div>
    </Layout>);
  }

}
const mapState = state => ({
  services: state.infoReducer.services,
})
export default connect(mapState)(servicesPage);
