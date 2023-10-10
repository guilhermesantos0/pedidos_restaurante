import '../styles/components/CartProduct.css'

import removeFromCart from '../helpers/removeFromCart';

function CartProduct ({ name, price, amount, productid }) {

    const amountDisplay = document.getElementById("amount");
    const finalPriceDisplay = document.querySelector("#final_price");

    const handleAddAmount = () => {
        if(typeof(amount) == "string") amount = Number(amount)
        amount += 1
    
        amountDisplay.innerHTML = `${amount} x R$${price}`
        finalPriceDisplay.innerHTML = `R$${(amount * price).toFixed(2)}`
    }

    const handleRemoveAmount = () => {
        if(typeof(amount) == "string") amount = Number(amount)
        if(amount == 0) {
            removeFromCart(productid)
            return
        }
        amount -= 1

        amountDisplay.innerHTML = `${amount} x R$${price}`
        finalPriceDisplay.innerHTML = `R$${(amount * price).toFixed(2)}`
    }

    const handleDelete = () => {
        removeFromCart(productid)
    }

    return (
        <div className="CartProduct">
            <h2>{name}</h2>
            <button onClick={handleDelete} className="delete">X</button>
            <div className="price_area">
                <p id='amount' >{amount} x R${price}</p>
                <p id='final_price' >R${amount * price}</p>
            </div>
            <div className="control_amount">
                <button onClick={handleAddAmount}>+</button>
                <button onClick={handleRemoveAmount}>-</button>
            </div>
        </div>
    )
}

export default CartProduct