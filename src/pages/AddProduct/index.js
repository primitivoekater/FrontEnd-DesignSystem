import './styles.css';
import { Button, Input, Typography, InputLabel, InputAdornment, Divider } from '@mui/material'
import { Link } from 'react-router-dom';
import { CustomFormControl, CustomTextField } from './syle'


function AddProduct() {
  return (
    <div className="container-add-product">
      <Typography
        variant="h6"
        align='left'
        width='100%'
      >
        Produtos
      </Typography>
      <form>
        <div className='content-form'>
          <CustomTextField
            id="standard-basic"
            label="Nome do produto"
            variant="standard" />

          <div className='contant-price-stock'>
            <CustomFormControl variant="standard">
              <InputLabel htmlFor="input-price">Preço</InputLabel>
              <Input
                id="input-price"

                startAdornment={<InputAdornment position="start">R$</InputAdornment>}
                type='number'
              />
            </CustomFormControl>

            <CustomFormControl variant="standard">
              <InputLabel htmlFor="input-stock">Estoque</InputLabel>
              <Input
                id="input-stock"

                startAdornment={<InputAdornment position="start">Unidade</InputAdornment>}
                type='number'
              />

            </CustomFormControl>
          </div>

          <CustomTextField
            id="standard-basic"
            label="descrição"
            variant="standard" />

          <CustomTextField
            id="standard-basic"
            label="Imagem"
            variant="standard" />
        </div>
        <Divider
          variant='fullWidth'
          orientation='horizontal'
          sx={{
            height: '1px',
            margin: '80px 0 32px 0'
          }} />
        <div className='container-buttons'>
          <Link to='/'>
            <Button
              sx={{ textDecorario: 'underline' }}
              variant="text"
              type='button'
            >Cancelar</Button>
          </Link>
          <Button
            type='subbmit'
            variant="contained"
          >Adicionar</Button>

        </div>
      </form >
    </div >
  );
}

export default AddProduct;
