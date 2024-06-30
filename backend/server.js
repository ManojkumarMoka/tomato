import express from "express"
import cors from "cors"

//app config

const app = express()
const port = 4000

//middleware
app.use(express.json())
app.use(cors())//accessing backend from any frontend comp..  


app.get("/",(req,res)=>{
    res.send("API working")
})

app.listen(port,()=>{
    console.log(`Server running on http://localhost:${port}`)
})