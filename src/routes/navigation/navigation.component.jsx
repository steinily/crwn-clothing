import '../../routes/navigation/navigation.styles.scss'

import {Link, Outlet} from 'react-router-dom'
import { Fragment , useContext } from 'react';



import {ReactComponent as CrwLogo} from '../../assets/crown.svg'
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';

import { UserContext } from '../../contexts/user.context';
import { CartContext } from '../../contexts/cart.context';

import {signOutUser} from '../../utils/firebase/firebase.utils'

const Navigation = () => {
  const {currentUser  } = useContext(UserContext)
  const {isCartOpen} = useContext(CartContext)
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
                {
                  currentUser ? ( 
                    <span className='nav-link' onClick={signOutUser}>Sign Out</span>) :
                    (
                    <Link className='nav-link' to='/auth'>
                      Sign In
                  </Link>
                    ) 
                  
                }
              <CartIcon />
            </div>
            {
             isCartOpen && <CartDropdown / >
            }
            
        </div>
        <Outlet />
      </>
    )
  }


export default Navigation;