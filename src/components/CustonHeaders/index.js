import {
    Toolbar, Typography
} from '@mui/material'
import './style.css'
import { CustomAppBar } from './style'
import Logo from '../../assets/logo.svg'
import { Link, Outlet } from 'react-router-dom'


function CustomHead() {
    return (
        <div className='container'>
            <div className='container-head'>
                <CustomAppBar>
                    <Toolbar>
                        <Link to='/'>
                            <img src={Logo} alt='logo' className='logo' />
                        </Link >
                    </Toolbar>
                </CustomAppBar >
                <Typography variant="h4"
                    align='left'
                    width='100%'
                    className='shop-name'>
                    Loja de plantinha
                </Typography>;
            </div>

            <div className='content-page'>
                <Outlet />
            </div>

        </div>
    )
};
export default CustomHead;