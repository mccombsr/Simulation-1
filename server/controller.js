module.exports = {
    getAll: (req,res)=>{
        const dbInstance = req.app.get('db')
        dbInstance.get_inventory()
        .then((response)=>{
            res.status(200)
            .send(response)
        })
        .catch((err)=>{
            res.status(500).send({errorMessage: "Well... crap..."})
        })
        // res.send(console.log("Gotcha"))
    },
    create: (req,res)=>{
        const {product_name, price, image_url} = req.body;
        const dbInstance = req.app.get('db')
        dbInstance.create_product([product_name, price, image_url])
        .then((response)=>{
            res.sendStatus(200)
        })
        .catch((err)=>{
            res.status(500).send({errorMessage: `Darn it all!!!`})
            console.log(err)
        })
        // res.send(console.log(product_name, price, image_url));
    }
}