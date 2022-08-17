const express = require("express")
const serverless = require ("serverless-http")


const app = express()
const router = express.Router()

router.get("/", (req, res) => {
    res.send("User List")
})

router.post("/", (req, res) => {
    res.send("Create New User")
})

router
.route("/:id")
.get((req, res) => {
    res.send(`Get User with ID: ${req.params.id}`) 
})

.put((req, res) => {
    res.send(`Update User with ID: ${req.params.id}`) 
})

.delete((req, res) => {
    res.send(`Delete User with ID: ${req.params.id}`) 
})


app.use("/.netlify/functions/api", router)
module.exports.handler = serverless(app)
