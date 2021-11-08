const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const axios = require('axios')
const { Countries } = require('./src/db');

// Syncing all the models at once.

let CreateDataBase = async () => {

let countries = await axios.get(`https://restcountries.com/v2/all`)
await Promise.all(countries.data.map((c) =>{
    let data = {  
        name: c.name,
        alpha3Code: c.alpha3Code,
        flag: c.flag,
        capital: c.capital ? c.capital : 'No have Capital',
        region: c.region ? c.region : 'No have Region',
        subregion: c.subregion ? c.subregion : 'No have SubRegion',
        area: parseInt(c.area) ? parseInt(c.area) : 0,
        population: parseInt(c.population)  
    }
        Countries.findOrCreate({where: data})
        
    }))
    
  }

    CreateDataBase();
    console.log('DataBaseCreated')

  

conn.sync({ force: true }).then(() => {
   
  server.listen(3001, () => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console
  });
});
