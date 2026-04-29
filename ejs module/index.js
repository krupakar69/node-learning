import express from "express"
import { dirname } from "path"
import { fileURLToPath } from "url"

const __dirname = dirname(fileURLToPath(import.meta.url))

const app = express()
const port = process.env.PORT || 3000
app.set("views", `${__dirname}/views`)
app.set("view engine", "ejs")

app.get("/", (req, res) => {
    let today = new Date()
    let day = today.getDay()

    let type = "weekday"
    let adv = "go to work"
    if(day === 0 || day === 6){
        type = "weekend"
        adv = "enjoy your day"
    }
    res.render("index.ejs",
        {dayname: type,
         advice: adv

    })
})

app.listen(port,()=>{
    console.log("this shit is fine on ", port)
})
