import '../styles/components/Product.css';

import addToCard from '../helpers/addToCart';

function Product(props) {

    const handleAddProduct = () => {
        addToCard(props.id)
    }

    return(
        <div className="Product" onClick={handleAddProduct}>
            <h2>{props.name}</h2>
            <p>R${props.price}</p>
        </div>
    )
}

export default Product