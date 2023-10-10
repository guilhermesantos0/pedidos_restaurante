const express = require("express")
const colors = require("colors");
const menu = require("./db.json")

const app = express()

const cart = []

const logRequest = (req, res) => {
    const date = new Date()
    
    console.log(`${res.statusCode == 200 ? colors.green(res.statusCode) : colors.blue(res.statusCode)} - ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} ${colors.yellow(req.originalUrl)}`)
}

app.get("/items", (req, res) => {
    res.json(menu.items)
    logRequest(req, res)
})

app.post("/add", (req, res) => {
    
    const productId = req.headers.product

    for(let[k,v] of Object.entries(menu.items)){
        v.items.forEach(i => {
            if(i.id == productId) {
                
                let productInCart = cart.find(j => j.id == productId)
                if(productInCart){
                    productInCart.amount += 1
                }else{
                    cart.push({
                        ...i,
                        amount: 1
                    })
                }

                console.log(cart)
                
                res.status(200)
            
                logRequest(req, res)
            } 
        })
    }

})

app.post("/remove", (req, res) => {
    if(cart[req.headers.product]){
        const { removedProduct, ...cart } = cart
    }

    res.status(200)

    logRequest(req, res)
})

app.get("/getCart", (req, res) => {
    res.json(cart)
    logRequest(req, res)
})

app.get("/getProduct", (req, res) => {
    const productId = req.headers.productid

    for(let[k,v] of Object.entries(menu.items)){
        v.items.forEach(i => {
            if(i.id == productId) {
                res.json(i)
            } 
        })
    }

    logRequest(req, res)

})

app.listen(8000, () => {
    console.log("Servidor rodando na porta 8000\n\nhttp://localhost:8000")
})