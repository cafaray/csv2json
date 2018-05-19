const fs = require('fs')
const filePath = './customer-data.csv'
const csv = require('csvtojson')

csv()
.fromFile(filePath)
.on('end_parsed', function(jsonObj){
    console.log(jsonObj);
    fs.writeFileSync('customer-data.json',  JSON.stringify(jsonObj));
})
.on('done', (error)=>{
    if(error){
        console.log(error)
    }
})
