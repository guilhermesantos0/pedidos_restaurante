import { useParams } from "react-router-dom"

import Header from "../components/Header";
import Product from "../components/Product";

import useFetch from "../hooks/useFetch";
import { useEffect, useState } from "react";

import "../styles/pages/Category.css";

function _Category() {

    const [ products, setProducts ] = useState(null);

    const { category } = useParams();
    const {data: _products, isPending, error } = useFetch("http://localhost:8000/items")
    useEffect(() => {
        if (_products){
            // console.log(_products[category])
            setProducts(_products[category])   
        }
    })

    console.log(products?.items)

    return (
        <div className="_Category">
            <Header></Header>
            <div className="products_area">
                {products?.items && products?.items.map(i => <Product id={i.id} name={i.name} price={i.price}/>)}
            </div>
        </div>
    )
}

export default _Category