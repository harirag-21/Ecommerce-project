import React,{ useState, useEffect } from 'react';
export const ShopContext = React.createContext();

export const ShopProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const fetchProducts = async () => {
    try {
        const response = await fetch('http://localhost:8000/api/products/list');
        const data = await response.json();
        setProducts(data.products || []);
    } catch (error) {
        console.error('Error fetching products:', error);
    }
}


useEffect(() => {
    fetchProducts();
}, []);
const value = {products};
return (
 <ShopContext.Provider value={value}>
    {children}
 </ShopContext.Provider>
)

}