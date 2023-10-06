import useFetch from "../hooks/useFetch";

import Header from "../components/Header";

import CartProduct from "../components/CartProduct";

function Cart() {

    const {data: _products, isPending, error} =  useFetch("/getCart", { headers: { accept: 'application/json' } })

    console.log(_products)

    if(_products){
        
    }

    return(
        <div className="Cart">
            <Header />
        </div>
    )
}

export default Cart