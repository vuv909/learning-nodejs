const {readFile,writeFile} = require('fs')
console.log('start');
readFile('./content/first.txt','utf-8',(err,result)=>{
    if(err){
        console.log(err);
        return;
    }
     const first = result;
     readFile('./content/second.txt','utf-8',(err,result)=>{
       if(err){
        console.log(err);
        return;
       } 
       const second = result;
       writeFile('./content/new.txt',`Here is the result ${first,second}`,'utf-8',(err,result)=>{
        if(err){
            console.log(err);
            return;
        }
        console.log('done with thes task !!1');
       })
     })
   })
console.log('starting nezxt tak');