import { createContext , useState} from "react";

import PRODUCTS from '../shop-data.js'


export const ProductsContext = createContext({
    products: [], 

});
export const ProductsProvider = ({children}) => {
    // eslint-disable-next-line
    const [products, setProducts] = useState([]);
    const value = {products}
    return (
        <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
    )
}

