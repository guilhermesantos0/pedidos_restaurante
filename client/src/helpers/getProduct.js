async function getProduct (productId) {
    return fetch(`/getProduct`, { headers: { accept: 'application/json', productid: productId }}).then(product => {
        product.json().then(JSONproduct => {
            const product = JSONproduct ? JSONproduct : { id: productId, name: 'Undefined', price: 0 }
            return product
        })
    })
}

export default getProduct