const express = require("express");
const app = express()
const axios = require("axios")
const port = process.env.POST || 3000


app.get(":endpoint([\\/\\w\\.-]*)", (req, res) => {
    let endpoint = "https://exercism.org/api/v2/" + req.params.endpoint

    axios.get(endpoint).then(response => {
        res.json(response.data)
    }).catch(error => {
        res.json(error)
    })
})

app.listen(3000)
