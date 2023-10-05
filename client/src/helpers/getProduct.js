function getProduct (productId) {
    const product = fetch(`/getProduct?productId=${productId}`, { headers: { accept: 'application/json' }})

    return product ? product : { name: 'Undefined', price: 0 }
}