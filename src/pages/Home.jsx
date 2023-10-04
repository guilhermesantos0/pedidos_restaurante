// import { useState } from "react";

import useFetch from "../hooks/useFetch";
import '../styles/pages/Home.css';

import Category from "../components/Category";
import Header from "../components/Header";

function Home() {

    const {data: products, isPending, error} = useFetch("http://localhost:8000/items")

    console.log(products)

    if(products){
        Object.keys(products).forEach(a => {
            console.log(a)
        })
    }
    return (
        <div className="Home">
            <Header></Header>
            <div className="categories">
                {products && Object.keys(products).map(category => <Category category={category} categoryname={products[category]?.lang["pt-BR"]}></Category>)}
            </div>
        </div>
    )
}

export default Home