import React from 'react';
import { ButtonStyled } from './Button.Styled';

export const Button = ({ onLoadMore }) => {
  return <ButtonStyled onClick={onLoadMore}>Load more</ButtonStyled>;
};
