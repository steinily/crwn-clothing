import {Link, Outlet} from 'react-router-dom'
import { Fragment } from 'react';
import {ReactComponent as CrwLogo} from '../../assets/crown.svg'
import '../../routes/navigation/navigation.styles.scss'

const Navigation = () => {
    return (
      <>
        <div className='navigation'>

            <Link className='logo-container' to='/'>
                <CrwLogo />
            </Link>
            
            <div className='nav-links-container'>
                <Link className='nav-link' to='shop'>
                    SHOP
                </Link>
                <Link className='nav-link' to='/auth'>
                    Sign In
                </Link>
            </div>
        </div>
        <Outlet />
      </>
    )
  }


export default Navigation;