import React from 'react';
import { GalleryItemLi, GalleryItemImg } from './ImageGalleryItem.Styled';

export const ImageGalleryItem = ({
  id,
  webformatURL,
  largeImageURL,
  handleOpenModal,
}) => {
  return (
    <GalleryItemLi>
      <GalleryItemImg
        src={webformatURL}
        alt={id}
        onClick={() => handleOpenModal(largeImageURL, id)}
      />
    </GalleryItemLi>
  );
};
