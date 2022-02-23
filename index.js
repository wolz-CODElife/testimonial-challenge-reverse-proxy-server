const express = require("express");
const app = express()
const axios = require("axios")
const port = process.env.PORT || 4000
const cors = require("cors")

app.use(cors({
    origin: "*"
}))

app.get(":endpoint([\\/\\w\\.-]*)", (req, res) => {
    let endpoint = "https://exercism.org/api/v2" + req.url

    if(req.url !== "/favicon.ico"){
        console.log(endpoint);
        axios.get(endpoint).then(response => {
            res.json(response.data)
        }).catch(error => {
            res.json(error)
        })
    }
})

app.listen(port)
