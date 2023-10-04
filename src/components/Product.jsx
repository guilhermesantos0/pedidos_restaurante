import '../styles/components/Product.css';

function Product(props) {

    /* 
        "id": 1,
        "name": "Hamburguer Clássico",
        "description": "Um delicioso hamburguer de carne com queijo, alface, tomate e maionese.",
        "price": 15.99
    */

    return(
        <div className="Product">
            <h2>{props.name}</h2>
            <p>R${props.price}</p>
        </div>
    )
}

export default Product