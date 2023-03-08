import { useContext } from 'react';
import { ShoppingCartIcon, IconContainer, ItemCount } from './cart-icon.styles.jsx';
import { CartContext } from '../../contexts/cart.context';
import './cart-icon.styles.jsx';

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <IconContainer onClick={toggleIsCartOpen}>
      <ShoppingCartIcon/>
      <ItemCount>{cartCount}</ItemCount>
    </IconContainer>
  );
};

export default CartIcon;
