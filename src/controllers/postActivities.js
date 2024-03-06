const {Activity, Country} = require("../db")

const postActivities = async (req, res)=>{
    const {name, difficulty, duration, season, country} = req.body
    console.log(req.body)
    
    try {
        let [activity, created] = await Activity.findOrCreate({
            where: { name },
            defaults: {name, difficulty, duration, season}
        });
        if (created) {
            const countryNames = country.split(',').map(c => c.trim());
            await countryNames.map((c)=> activity.addCountry(c.toUpperCase()))
            
            res.status(201).json("actividad creada con exito");
        } else {
            res.status(200).json("este nombre de actividad ya existe");
        }
    } catch (error) {
        res.status(500).json({error: "error en el servidor "+error})
    }
}
module.exports = postActivities