// import { useState } from "react";

import useFetch from "../hooks/useFetch";
import '../styles/pages/Home.css';

import Category from "../components/Category";
import Header from "../components/Header";
import { useEffect, useState } from "react";

function Home() {

    const {data: products, isPending, error} = useFetch("/items", { headers: { accept: 'application/json' } })

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