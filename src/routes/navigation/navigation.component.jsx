import { 
  NavigationContainer,
  LogoContainer,
  NavLinksContainer,
  Navlink } from './navigation.styles';

import {Link, Outlet} from 'react-router-dom'
import { Fragment , useContext } from 'react';

import {useSelector} from 'react-redux'

import {ReactComponent as CrwLogo} from '../../assets/crown.svg'
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';

import { UserContext } from '../../contexts/user.context';
import { CartContext } from '../../contexts/cart.context';

import {signOutUser} from '../../utils/firebase/firebase.utils'
import {selectCurrentUser} from '../../store/user/user.selector'


const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser)
  const {isCartOpen} = useContext(CartContext)
    return (
      <>
        <NavigationContainer>

            <LogoContainer to='/'>
                <CrwLogo />
            </LogoContainer>
            
            <NavLinksContainer>
                <Navlink to='shop'>
                    SHOP
                </Navlink>
                {
                  currentUser ? ( 
                    <Navlink as='span' onClick={signOutUser}>Sign Out</Navlink>) :
                    (
                    <Navlink to='/auth'>
                      Sign In
                  </Navlink>
                    ) 
                  
                }
              <CartIcon />
            </NavLinksContainer>
            {
             isCartOpen && <CartDropdown / >
            }
            
            </NavigationContainer>
        <Outlet />
      </>
    )
  }


export default Navigation;