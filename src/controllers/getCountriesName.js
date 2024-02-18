const axios = require("axios")

const getCountriesName = async (req, res)=>{
    const {name} = req.query
    try {
        const response = await axios("http://localhost:3001/countries")
        const filter = response.data.filter((c)=>c.name.toUpperCase().includes(name.toUpperCase()))
        if (filter.length>0) {
            res.status(200).json(filter)
        } else {
            res.status(200).json("Pais inexistente")
        }
    } catch (error) {
        res.status(500).json({error: "error en el servidor"})
    }
}
module.exports = getCountriesName