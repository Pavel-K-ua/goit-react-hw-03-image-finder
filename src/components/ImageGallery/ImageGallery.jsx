import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import React from 'react';
import { ImageGalleryUl } from './ImageGallery.Styled';

export const ImageGallery = ({ dataArr, handleOpenModal }) => {
  return (
    <ImageGalleryUl class="gallery">
      {dataArr.map(item => (
        <ImageGalleryItem
          key={item.id}
          {...item}
          handleOpenModal={handleOpenModal}
        />
      ))}
    </ImageGalleryUl>
  );
};
