const router = require('express').Router();
const { Sequelize } = require("sequelize");
const { Countries, Activities } = require('../db');

router.post('/', async (req, res) =>{
    try {
        let createActivity = await Activities.create(
               req.body[0]
        )
        
            req.body[1].forEach(async e =>{
            const CountriesPush = await Countries.findOne({
                where: { alpha3Code: e }
            })
            
             createActivity.addCountries(CountriesPush)
        })
        console.log(createActivity)
        res.json(createActivity)
    } catch (e) {
        res.status(404).send(e)
    }
})


module.exports = router;