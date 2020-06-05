import React, { useRef, useCallback, useState } from 'react';

import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import {
  FiChevronLeft,
  FiChevronRight,
  FiSearch,
  FiShoppingCart,
} from 'react-icons/fi';
import { useHistory, useLocation, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Button2 from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import CircularProgress from '@material-ui/core/CircularProgress';
import {
  Container,
  Content,
  ContentButtons,
  ContentProducts,
  BoxProduct,
  SearchBar,
  BoxInfo,
  Button,
} from './styles';

import { useToast } from '../../hooks/Toast';
import getValidationErros from '../../utils/getValidationErros';

import Input from '../../components/Input';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import logoImg from '../../assets/logo.svg';
import api from '../../services/api';
import {
  ProductsTypes,
  Product as ProductProps,
} from '../../store/ducks/products/types';
import { ProductTypes } from '../../store/ducks/product/types';
import { formatPrice, getImage } from '../../utils';

import { RootState } from '../../store/ducks/rootReducer';

interface SignInData {
  login: string;
}
const Product: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();
  const location = useLocation();
  const produtos = [1, 2, 3, 4, 5];
  const [search, setSearch] = React.useState('');
  const [open, setOpen] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [whatsapp, setWhatsapp] = React.useState('');
  const [nome, setNome] = React.useState('');
  const [error, setError] = React.useState<string | null>(null);

  const data = useSelector((s: RootState) => s.product.data);

  const [product, setProduct] = useState<ProductProps>({
    id: '',
    image: '',
    name: '',
    description: '',
    amount: '',
    price: '',
  });

  const [prev, setPrev] = React.useState(false);
  const [next, setNext] = React.useState(false);

  const [products, setProducts] = React.useState([]);
  const [index, setIndex] = React.useState(0);

  const proxProduto = useCallback(() => {
    if (next) setIndex(old => Number(old) + 1);
  }, [next]);

  const antProduto = useCallback(() => {
    if (prev) setIndex(old => Number(old) - 1);
  }, [prev]);

  const dispatch = useDispatch();
  const { id } = useParams();

  React.useEffect(() => {
    if (id) {
      dispatch({ type: ProductTypes.LOAD_REQUEST, payload: id });
    }
  }, [id]);

  React.useEffect(() => {
    if (data) {
      setProduct(data);
    }
  }, [data]);

  const reservar = async () => {
    if (whatsapp.length < 10) {
      setError('Informe o número do seu whatsapp');
    } else if (nome.length < 10) {
      setError('Informe o seu nome completo');
    } else {
      setLoading(true);
      try {
        const response = await api.post(
          'reservar',
          JSON.stringify({ whatsapp, nome, product: id }),
        );
        setOpen(false);
        setLoading(false);
        setSuccess(true);
      } catch (err) {
        setError('Não foi possível reservar o produto, tente novamente');
      }
    }
  };

  return (
    <>
      <Header />
      <Container>
        <Content>
          <ContentButtons>
            <Button active={prev} onClick={antProduto}>
              <FiChevronLeft />
            </Button>
            <ContentProducts>
              <BoxProduct image={getImage(product.image)} />
              <BoxInfo>
                <h2>{product.name}</h2>
                <p>{product.description}</p>
                <div>
                  <b>Estoque:</b>
{' '}
{product.amount}
                  <br />
                  <b>Status:</b>
{' '}
                  {product.amount != '0' ? 'Disponível' : 'Sob Encomenda'}
                </div>

                <strong>{formatPrice(product.price)}</strong>

                <button onClick={() => setOpen(true)}>
                  <FiShoppingCart />
                  Reservar
                </button>
              </BoxInfo>
            </ContentProducts>

            <Button active={prev} onClick={proxProduto}>
              <FiChevronRight />
            </Button>
          </ContentButtons>
          <hr
            style={{
              borderColor: '#666',
              width: '100%',
              marginBottom: '15px',
            }}
          />

          <div>
            <h3 style={{ margin: '15px 0px' }}>Informações Importantes:</h3>
            <p>
              - Após clicar em
              <b> Reservar </b>
{' '}
o produto entrará em disponibilidade de reserva
              e será enviado um boleto para o whatsapp informado, se após 24
              horas não for efetuado o pagamento o produto será disponibilizado
              para compra novamente.
</p>
            <p>
              - Ao escolher um produto com disponibilidade de reserva, pode ser
              que a compra não sera concretizada, se o primeiro ao clientar em
{' '}
              <b> Reservar </b>
{' '}
efetuar o pagamento antes.
</p>
            <p>
              - Ao clicar em
{' '}
<b> Reservar </b> você se compromete em efetuar o
              pagamento da peça em até 24 horas.
            </p>
            <p>
              - Os produtos são entregues nas seguintes cidades: Governador
              Valadares, Mendes Pimentel, Nova Módica, Pescador, São José do
              Divino e São Félix de Minas.
            </p>
          </div>
        </Content>
      </Container>
      <Footer />
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Reservar Peça</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <p>
              - Após clicar em
              <b> Reservar </b> o produto entrará em disponibilidade de reserva
              e será enviado um boleto para o whatsapp informado, se após 24
              horas não for efetuado o pagamento o produto será disponibilizado
              para compra novamente.
            </p>
            <p>
              - Ao escolher um produto com disponibilidade de reserva, pode ser
              que a compra não sera concretizada, se o primeiro ao clientar em
{' '}
              <b> Reservar </b>
{' '}
efetuar o pagamento antes.
</p>
            <p>
              - Ao clicar em
{' '}
<b> Reservar </b> você se compromete em efetuar o
              pagamento da peça em até 24 horas.
            </p>
            <p>
              - Os produtos são entregues nas seguintes cidades: Governador
              Valadares, Mendes Pimentel, Nova Módica, Pescador, São José do
              Divino e São Félix de Minas.
            </p>
          </DialogContentText>
          <hr />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Nome Completo"
            type="text"
            fullWidth
            value={nome}
            onChange={e => setNome(e.target.value)}
          />
          <TextField
            margin="dense"
            id="name"
            label="Número Whatsapp"
            type="tel"
            fullWidth
            placeholder="(DDD) 99999-9999"
            value={whatsapp}
            onChange={e => setWhatsapp(e.target.value)}
          />
          {error && (
            <div
              style={{
                width: '100%',
                margin: '5px 15px',
                textAlign: 'center',
                color: '#fff',
                backgroundColor: '#d73d32',
                position: 'relative',
                left: '-15px',
              }}
            >
              {error}
            </div>
          )}
        </DialogContent>
        <DialogActions>
          <Button2 onClick={() => setOpen(false)} color="primary">
            Cancel
          </Button2>
          {loading ? (
            <CircularProgress />
          ) : (
            <Button2 onClick={() => reservar()} color="primary">
              Reservar
            </Button2>
          )}
        </DialogActions>
      </Dialog>

      <Dialog
        open={success}
        onClose={() => setSuccess(false)}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Parabéens! ;)</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <p>Produto Reservado!</p>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button2 onClick={() => setSuccess(false)} color="primary">
            Ok
          </Button2>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Product;
