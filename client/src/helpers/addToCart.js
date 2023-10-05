function addToCard(productId) {

    fetch('/add', {
        method: "POST",
        headers: {
            product: productId
        }
    })

}

export default addToCard