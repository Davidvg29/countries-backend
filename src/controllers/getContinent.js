const axios = require("axios")

const getContinent = async (req, res)=>{

    try {
        const {data} = await axios("http://localhost:3001/countries")
        let continent = []

        data.map((c)=>(
            continent.push(c.continent)
        ))

        let clearContinent = new Set(continent)
        const clearArray = Array.from(clearContinent)

        res.status(200).json(clearArray)
        
    } catch (error) {
        res.status(500).json({error: "ocurrio un error en el servidor "+ error})
    }

}
module.exports = getContinent;