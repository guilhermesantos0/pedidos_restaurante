import '../styles/components/Product.css';

import useFetch from '../hooks/useFetch';

function Product(props) {

    const handleAddProduct = () => {
        const _ = useFetch("/add", {
            method: "POST",
            data: {
                product: props.id
            }
        })
    }

    return(
        <div className="Product" onClick={handleAddProduct}>
            <h2>{props.name}</h2>
            <p>R${props.price}</p>
        </div>
    )
}

export default Product