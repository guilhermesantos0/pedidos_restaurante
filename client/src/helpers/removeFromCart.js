function removeFromCart(productId) {

    fetch('/remove', {
        method: "POST",
        headers: {
            product: productId
        }
    })

    window.location.reload()

}

export default removeFromCart