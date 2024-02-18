const { Country, Activity } = require("../db");

const getCountriesId = async (req, res)=>{
    const {id} = req.params
    const idMayus = id.toUpperCase()

    try {
        const country = await Country.findByPk(idMayus, {
            include: {
                model: Activity,
                attributes: ["id", "name", "difficulty", "duration", "season"],
                through: {
                    attributes: []
                }
            }
        });
        if (country) {
            res.status(200).json(country)
        } else {
            res.status(200).json({message: "lo que buscaste es inexistente"})
        }
    } catch (error) {
        res.status(500).json({error: "error al buscar y traer por id de pais de base de datos "+error})
    }

}
module.exports = getCountriesId