import React, { Component } from 'react';
import s from './ImageGalleryItem.module.css';

class ImageGalleryItem extends Component {
  render() {
    const { largeImageURL, webformatURL, id, tags } = this.props.hit;
    return (
      <a
        href={largeImageURL}
        id={id}
        onClick={e => {
          e.preventDefault();
          return this.props.imageId(e.currentTarget.id);
        }}
      >
        <img className={s.imgItem__image} src={webformatURL} alt={tags} />
      </a>
    );
  }
}

export default ImageGalleryItem;
