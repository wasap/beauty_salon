import Layout from '../../components/Layout'
import React from 'react';
import s from './styles.css'

class servicesPage extends React.Component {
  static propTypes = {
    services: React.PropTypes.array.isRequired,
    route:React.PropTypes.instanceOf(Object)
  }

  componentDidMount(){
    if (this.scrollTo) {
      this.scrollTo.scrollIntoView();
    }
  }

  saveServiceToScroll =(el, name)=>{
    if(name == this.props.route.params.name){
      this.scrollTo = el
    }
  }

  prices(p) {
    const result = [];
    for (let key in p)
      result.push(
        <li key={key}>{key}: {p[key]}</li>
      )
    return result;
}

  render(){
    return <Layout>
      {this.props.services.map((s,i)=>
        <div className={s.full} key={i} ref={service=>(this.saveServiceToScroll(service,s.url))}>
          <h2>{s.name}</h2>
          <ul>
            {this.prices(s.prices)}
          </ul>
        </div>
      )}
  </Layout>
  }

}
export default servicesPage;
