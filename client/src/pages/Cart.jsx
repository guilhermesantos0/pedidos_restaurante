import useFetch from "../hooks/useFetch";

import Header from "../components/Header";

import CartProduct from "../components/CartProduct";
import { useState } from "react";

import getProduct from "../helpers/getProduct";

import '../styles/pages/Cart.css';

function Cart() {

    const [products, setProducts] = useState([])

    const {data: _products, isPending, error} = useFetch("/getCart", { headers: { accept: 'application/json' } })

    return(
        <div className="Cart">
            <Header />
            <div className="cart_area">
                <div className="cart_container">
                    <CartProduct name="Sua Mãe" price="20.99" amount="2" />
                </div>
                <div className="bottom_buttons">
                    
                </div>
            </div>
        </div>
    )
}

export default Cart