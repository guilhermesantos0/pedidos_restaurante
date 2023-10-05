import useFetch from "../hooks/useFetch"

import CartProduct from "../components/CartProduct"

function Cart() {

    const {data: _products, isPending, error} =  useFetch("/get", { headers: { accept: 'application/json' } })

    console.log(_products)

    if(_products){
        
    }

    return(
        <div className="Cart">
            
        </div>
    )
}

export default Cart