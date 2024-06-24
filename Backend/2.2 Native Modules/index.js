const fs = require('fs');

// fs.writeFile('message.txt', 'Hello From The NodeJS' , function(err){
//     if(err){throw err;}
//     console.log('File is written to the file successfully!');
// })

fs.readFile('message.txt', {"encoding":"utf-8"}, (err, data)=>{
    if(err) {throw err;}
    console.log(data);
})

