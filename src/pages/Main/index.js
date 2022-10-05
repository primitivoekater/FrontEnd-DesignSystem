import './styles.css';
import { Typography, Button } from '@mui/material'
import ProductCard from '../../components/ProductCard'
import { Link } from 'react-router-dom'



function Main() {
  return (
    <div className="container-main">
      <div className='content-action'>
        <Typography
          variant="h6"
          align='left'
          width='100%'
        >
          Produtos
        </Typography>

        <Link to='/add-products'>
          <Button
            className='btn-add'
            size='small'
            variant="contained"
          >
            Adicionar produtos
          </Button>
        </Link>
      </div>

      <div className='content-products'>
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>



    </div>

  );
}

export default Main;
