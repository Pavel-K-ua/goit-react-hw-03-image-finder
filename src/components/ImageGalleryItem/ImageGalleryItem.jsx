import React from 'react';
import {
  GalleryItemLi,
  GalleryItemImg,
  handleOpenModal,
} from './ImageGalleryItem.Styled';

export const ImageGalleryItem = ({
  id,
  webformatURL,
  largeImageURL,
  handleOpenModal,
}) => {
  return (
    <GalleryItemLi class="gallery-item">
      <GalleryItemImg
        src={webformatURL}
        alt={id}
        onClick={() => handleOpenModal(largeImageURL, id)}
      />
    </GalleryItemLi>
  );
};
