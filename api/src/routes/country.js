const router = require('express').Router();
const { Sequelize } = require("sequelize");
const { Countries, Activities} = require('../db');

router.get("/", async (req, res) => {
    let { name, page, sort} = req.query
    try {
        if(page==="all"){
            let country = await Countries.findAll({
                include: { model: Activities },
            })
            return country ? res.status(200).json(country) : res.sendStatus(404)
        }
     
        if (sort) {     
                    switch (sort) {
                        case "AtoZ":
                            return res.json(await Countries.findAll({
                                order: [['name', 'ASC']],
                                include: {model: Activities},
                                
                            }))
                        case "ZtoA":
                            return res.json(await Countries.findAll({
                                order: [['name', 'DESC']],
                                include: { model: Activities},
                                
                            }))
                        case "pobAsc":
                            return res.json(await Countries.findAll({
                                order: [['population', 'ASC']],
                                include: {model: Activities},
                                
                            }))
                        case "pobDes":
                            return res.json(await Countries.findAll({
                                order: [['population', 'DESC']],
                                include: {model: Activities},
                                
                            }))
                  
                    case "default":
                                    return res.json(await Countries.findAll({
                                        include: { model: Activities },
                                        
                                    }))
                }

               
            }

        

        if (name) {
            let country = await Countries.findAll({
                include: { model: Activities },
                where: { name: { [Sequelize.Op.iLike]: `%${name}%` } }
            })  
            return country ? res.json(country) : res.sendStatus(404)
        }

    } catch (e) {
        res.status(505).send(e)
    }
})

router.get('/:idPais', async function (req, res) {
    try {
        let { idPais } = req.params
        let country = await Countries.findByPk(
            idPais.toUpperCase(),
            { include: { model: Activities } }
        )
        country ? res.json(country) : res.sendStatus(404)
    } catch (error) {
        res.status(505).send(error)
    }
})


module.exports = router;