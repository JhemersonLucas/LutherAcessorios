import React from 'react';
import { useHistory } from 'react-router-dom';
import { FiShoppingCart } from 'react-icons/fi';
import * as S from './styles';

const imgLogo = require('../../assets/logo_luther.png');

const Header: React.FC = () => {
  const history = useHistory();
  return (
    <S.Container>
      <S.Content onClick={() => history.push('/')}>
        <img src={imgLogo} />
        <FiShoppingCart />
      </S.Content>
    </S.Container>
  );
};

export default Header;
