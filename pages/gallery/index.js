import Layout from '../../components/Layout';
import React from 'react';
import { getPhotos } from '../../core/info';
import { connect } from 'react-redux';
import s from './styles.scss';
import Modal from 'react-modal';

class galeryPage extends React.Component {
  static propTypes = {
    dispatch: React.PropTypes.func.isRequired,
    photos: React.PropTypes.object.isRequired,
  }
  state = {
    modalOpen: false,
    imgIndex: 0,
  }

  componentDidMount() {
    this.props.dispatch(getPhotos());
  }

  showModal = (imgIndex) => () => {
    window.addEventListener('keydown', this.keysEvents)
    this.setState({
      modalOpen: true,
      imgIndex,
    });
  }

  closeModal = () => {
    window.removeEventListener('keydown', this.keysEvents);
    this.setState({
      modalOpen: false,
    });
  }

  scrollImg = (next) => () => {
    if (next) {
      if (this.props.photos.img[this.state.imgIndex + 1]) {
        this.setState({
          imgIndex: this.state.imgIndex + 1,
        });
      } else {
        this.setState({
          imgIndex: 0,
        });
      }
    } else {
      if (this.props.photos.img[this.state.imgIndex - 1]) {
        this.setState({
          imgIndex: this.state.imgIndex - 1,
        });
      } else {
        this.setState({
          imgIndex: this.props.photos.img.length - 1,
        });
      }
    }
  }

  keysEvents = (e) => {
    switch (e.keyCode) {
      case 37:
        this.scrollImg(false)();
        break;
      case 39:
        this.scrollImg(true)();
        break;
      default:
    }
  }

  render() {
    return (<Layout>
      <h2 className={s.title}>{this.props.photos.title}</h2>
      <div className={s.photos}>
      {this.props.photos.img.map((f, key) =>
        <img
          key={key}
          className={s.photos_item}
          src={f}
          role="presentation"
          onClick={this.showModal(key)}
        />
      )}
      </div>
      <Modal
        isOpen={this.state.modalOpen}
        onRequestClose={this.closeModal}
        contentLabel="Modal"
        className={s.modal}
      >
        <div className={s.modal_box}>
          <img
            src={this.props.photos.img[this.state.imgIndex]}
            className={s.modal_img} role="presentation"
          />
          <div className={s.modal_prev} onClick={this.scrollImg(false)} />
          <div className={s.modal_next} onClick={this.scrollImg(true)} />
          <div className={s.modal_close} onClick={this.closeModal} />
        </div>
      </Modal>
    </Layout>);
  }
}
const mapState = (state => ({ photos: state.infoReducer.photos }))
export default connect(mapState)(galeryPage);
