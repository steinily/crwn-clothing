import Button from '../button/button.component';
import '../../components/cart-dropdown/cart-dropdown.styles.scss'
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import CartItem from '../cart-item/cart-item.component';
import { CartContext } from '../../contexts/cart.context';

const CartDropdown = () =>{
    const navigate = useNavigate()
    const { cartItems} = useContext(CartContext)
    
    const goTocheckoutHandler = () => {
        navigate('/checkout')
    }
    
    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items' >
                {cartItems.map(item => (
                    <CartItem key={item.id} cartItem={item} />
                ))

                }
            </div>
            <Button onClick= {goTocheckoutHandler}>Go TO CheckOut</Button>
        </div>
    )

}

export default CartDropdown;