import { createContext, useState , useEffect} from "react";

export const addCartItem = (cartItems, productToAdd) => {
    //find if cartItems contains producttoadd
    const existingCartItem = 
    cartItems.find((cartItem) => cartItem.id === productToAdd.id)
    // if found increment quntaty
    if(existingCartItem){
        return cartItems.map((cartItem) => cartItem.id === productToAdd.id ? {
            ...cartItem, quantity: cartItem.quantity +1
        } : cartItem )
    }
    // return new array whit modified cart items/new cart items

    return [...cartItems, {...productToAdd , quantity: 1}];
}

export const removeCartItem = (cartItems, cartItemToRemove) => {
    // find the cart item to remove
    const existingCartItem = 
    cartItems.find((cartItem) => cartItem.id === cartItemToRemove.id)
    // check if quantity is equal to 1 if it is then remove the item.
    if(existingCartItem.quantity === 1){
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
    }

    // return back cartitems whit matchin cart item whit reduce quantity
    return cartItems.map((cartItem) => cartItem.id === cartItemToRemove.id ? {
        ...cartItem, quantity: cartItem.quantity -1
    } : cartItem )

}

export const clearCartItem = (cartItems, cartItemToClear) => {
    return cartItems.filter(cartItem => cartItem.id !== cartItemToClear.id);

}

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {
    },
    cartItems:[],
    addItemToCart:() => {},
    cartCount: 0,
    removeItemFromCart: () =>{},
    clearItemFromCart:() => {},
    cartTotal: 0
})

export const CartProvider = ({children}) => {
    const [isCartOpen , setIsCartOpen] = useState(false)
    const [cartCount, setCartCount] = useState(0)
    const [cartItems, setCartItems] = useState([])
    const [cartTotal, setCartTotal] =useState(0)

    useEffect(() => {
        const newCartCount = cartItems.reduce((total,cartItem) => 
            total+cartItem.quantity
        ,0)
        setCartCount(newCartCount)
    }, [cartItems])

    useEffect(() => {
        const newCartTotal = cartItems.reduce((total,cartItem) => 
            total+cartItem.quantity*cartItem.price
        ,0)
        setCartTotal(newCartTotal)
    }, [cartItems])

    const addItemToCart = (product) => {
        setCartItems(addCartItem(cartItems,product));
    }
    const removeItemFromCart = (product) => {
        setCartItems(removeCartItem(cartItems,product));
    }

    const clearItemFromCart = (product) => {
        setCartItems(clearCartItem(cartItems,product));
    }

    const value ={ 
        isCartOpen,
        setIsCartOpen,
        addItemToCart,
        cartItems,
        cartCount,
        removeItemFromCart,
        clearItemFromCart,
        cartTotal,
    };
    

    return(
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
}