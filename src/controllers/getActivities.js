const {Activity, Country} = require ("../db")

const getActivities = async (req, res)=>{
    try {
        const data = await Activity.findAll({
            include: {
                model: Country,
                attributes: ["id"],
                through: {
                    attributes: []
                }
            }
        })
        if (data.length>0) {
            res.status(200).json(data)
        } else {
            res.status(200).json("no hay actividades por el momento")
        }
    } catch (error) {
        res.status(500).json({error: "error en servidor "+error})
    }
}
module.exports = getActivities