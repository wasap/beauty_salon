import Layout from '../../components/Layout';
import { connect } from 'react-redux';
import React from 'react';
import s from './styles.css'
import { getServices } from '../../core/info';

class servicesPage extends React.Component {
  static propTypes = {
    services: React.PropTypes.array.isRequired,
    route: React.PropTypes.instanceOf(Object),
    dispatch: React.PropTypes.func,
  }

  componentDidMount(){
    this.props.dispatch(getServices());
    document.body.classList.add(s.body);
    if (this.scrollTo) {
      this.scrollTo.scrollIntoView();
    }
  }
  componentWillUnmount() {
    document.body.classList.remove(s.body);
  }

  saveServiceToScroll =(el, name) => {
    if (name === this.props.route.params.name) {
      this.scrollTo = el;
    }
  }

  prices(p) {
    const result = [];
    for (const key in p) {
      result.push(
        <li key={key}>{key}: {p[key]}</li>
      )
    }
    return result;
}

  render() {
    return (<Layout>
      <div className={s.full}>
        <div className={s.nameHeader}>
          <div className={s.nameHeaderHolder}>
            <div className={s.nameHeaderText}>Мої послуги</div>
            <div className={s.nameHeaderDescription}>{this.props.services.map(se => se.name).join(', ')}</div>
          </div>
        </div>
      </div>
      {this.props.services.map((s, i) =>
        <div className={s.full} key={i} ref={service => (this.saveServiceToScroll(service,s.url))}>
          <h2>{s.name}</h2>
          <ul>
            {this.prices(s.prices)}
          </ul>
        </div>
      )}
    </Layout>);
  }

}
const mapState = state => ({
  services: state.infoReducer.services,
})
export default connect(mapState)(servicesPage);
