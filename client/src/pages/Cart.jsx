import '../styles/pages/Cart.css';

import useFetch from "../hooks/useFetch";

import Header from "../components/Header";
import CartProduct from "../components/CartProduct";

function Cart() {

    const {data: products, isPending, error} = useFetch("/getCart", { headers: { accept: 'application/json' } })

    if(products){
        products.forEach(a => {
            console.log(a)
        })
    }

    return(
        <div className="Cart">
            <Header />
            <div className="cart_area">
                <div className="cart_container">
                    {products && products.map(i => <CartProduct name={i.name} price={i.price} amount={i.amount} productid={i.id} />)}
                </div>
                <div className="bottom_buttons">
                    <button id="confirm">CONFIRMAR</button>
                    <button id="cancel">CANCELAR</button>
                </div>
            </div>
        </div>
    )
}

export default Cart