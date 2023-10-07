import '../styles/components/CartProduct.css'

function CartProduct (props) {
    return (
        <div className="CartProduct">
            <h2>{props.name}</h2>
            <div className="price_area">
                <p>{props.amount} x R${props.price}</p>
                <p>R${props.amount * props.price}</p>
            </div>
        </div>
    )
}

export default CartProduct