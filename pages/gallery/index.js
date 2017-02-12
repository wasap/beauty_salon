import Layout from '../../components/Layout';
import React from 'react';
import { getPhotos } from '../../core/info';
import { connect } from 'react-redux';
import s from './styles.scss';
import Modal from 'react-modal';

class galeryPage extends React.Component {
  static propTypes = {
    dispatch: React.PropTypes.func.isRequired,
    photos: React.PropTypes.array.isRequired,
  }
  state = {
    modalOpen: false,
    modalSrc: '',
    currentImgIndex: 0,
  }

  componentDidMount() {
    this.props.dispatch(getPhotos());
  }

  showModal = (src, currentImgIndex) => () => {
    this.setState({
      modalOpen: true,
      modalSrc: src,
      currentImgIndex,
    });
  }

  closeModal = () => {
    this.setState({
      modalOpen: false,
      modalSrc: '',
    });
  }

  scrollImg = (next) => () => {
    if (next){

    }
  }

  render() {
    return (<Layout>
      <h2 className={s.title}>Галерея</h2>
      <div className={s.photos}>
      {this.props.photos.map((f, key) =>
        <img
          key={key}
          className={s.photos_item}
          src={f}
          role="presentation"
          onClick={this.showModal(f, key)}
        />
      )}
      </div>
      <Modal
        isOpen={this.state.modalOpen}
        onRequestClose={this.closeModal}
        contentLabel="Modal"
      >
        <div className={s.modal_box}>
          <div className={s.modal_close} onClick={this.closeModal()} />
          <img src={this.state.modalSrc} className={s.madal_body} role="presentation" />
          <div className={s.modal_prev} onClick={this.scroll_img(true)} />
          <div className={s.modal_next} onClick={this.scroll_img(false)} />
        </div>
      </Modal>
    </Layout>);
  }
}
const mapState = (state => ({ photos: state.infoReducer.photos }))
export default connect(mapState)(galeryPage);
