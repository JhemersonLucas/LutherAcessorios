export const vars = {
  urlImage: 'https://fisger.com.br/luther/',
};

export const getImage = (name: string) => {
  return `${vars.urlImage + name}.JPG`;
};

export const formatPrice = (value: string) => {
  return parseFloat(value).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
};
