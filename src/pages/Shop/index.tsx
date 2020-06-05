import React, { useRef, useEffect } from 'react';

import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { FiInfo, FiUser, FiSearch, FiChevronRight } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  Container,
  Content,
  ContentProducts,
  BoxProduct,
  SearchBar,
} from './styles';

import Header from '../../components/Header';

import { ProductsTypes, Product } from '../../store/ducks/products/types';

import { ApplicationState } from '../../store';
import { getImage, formatPrice } from '../../utils';
import { RootState } from '../../store/ducks/rootReducer';

const Shop: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();
  const [search, setSearch] = React.useState('');
  const [list, setList] = React.useState<Product[]>([]);
  const { products } = useSelector((s: RootState) => s);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: ProductsTypes.LOAD_REQUEST });
  }, []);

  useEffect(() => {
    if (products.data.length > 0) setList(products.data);
  }, [products]);

  useEffect(() => {
    if (products.data) {
      const l = products.data.filter(item => {
        return item.name.toLowerCase().indexOf(search.toLowerCase()) > -1;
      });
      setList(l);
    }
  }, [search]);

  return (
    <>
      <Header />
      <Container>
        <Content>
          <SearchBar>
            <FiSearch />
            <input
              onChange={str => setSearch(str.target.value)}
              value={search}
            />
            <button onClick={() => alert('foi')}>
              <FiChevronRight />
            </button>
          </SearchBar>
          <ContentProducts>
            {list.map((product, index) => (
              <BoxProduct
                key={product.id}
                onClick={() =>
                  history.push({
                    pathname: `/p/${product.id}`,
                    search: ``,
                    state: {
                      products,
                    },
                  })
                }
              >
                <div>
                  <img src={getImage(product.image)} />
                </div>
                <section>
                  <span>{product.name}</span>
                  <strong>{formatPrice(product.price)}</strong>
                </section>
              </BoxProduct>
            ))}
          </ContentProducts>
        </Content>
      </Container>
    </>
  );
};

export default Shop;
