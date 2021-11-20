import React, { Component } from 'react';
import s from '../ImageGallery/ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import Modal from '../Modal/Modal';
import { imgOpen } from './OpenModal';

class ImageGalleryView extends Component {
  state = {
    showModal: false,
    largeImageURL: '',
    imgId: null,
  };

  openModal = imageId => {
    const { largeImageURL, imgId } = imgOpen(imageId, this.props.imgObj);
    this.setState(({ showModal }) => ({
      showModal: !showModal,
      largeImageURL,
      imgId,
    }));
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { imgObj } = this.props;
    const { toggleModal } = this;
    const { showModal, largeImageURL } = this.state;
    return (
      <>
        {imgObj.length === 0 && <h1>no images was found</h1>}
        <ul className={s.gallery}>
          {imgObj.length > 0 &&
            imgObj.map(hit => {
              return (
                <li className={s.imgItem} key={hit.id}>
                  <ImageGalleryItem hit={hit} imageId={this.openModal} />
                </li>
              );
            })}
        </ul>

        {showModal && (
          <Modal onClose={toggleModal}>
            <img className={s.modalImg} src={largeImageURL} alt="=)" />
          </Modal>
        )}
      </>
    );
  }
}

export default ImageGalleryView;
