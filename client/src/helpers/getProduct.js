async function getProduct (productId) {
    let a;
    fetch(`/getProduct`, { headers: { accept: 'application/json', productid: productId }}).then(product => {
        product.json().then(i => {
            a = i ? i : { name: 'Undefined', price: 0 }
            console.log(a)
        })
    })

    return a
}

export default getProduct