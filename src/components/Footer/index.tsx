import React from 'react';
import { FiShoppingCart, FiInstagram } from 'react-icons/fi';
import { IconButton } from '@material-ui/core';
import * as S from './styles';

const imgLogo = require('../../assets/logo_luther_white.png');

const Footer: React.FC = () => {
  return (
    <S.Container>
      <S.Content>
        <img src={imgLogo} />
        <IconButton
          href="https://www.instagram.com/lutheracessorios/"
          target="_blank"
        >
          <FiInstagram />
        </IconButton>
      </S.Content>
    </S.Container>
  );
};

export default Footer;
