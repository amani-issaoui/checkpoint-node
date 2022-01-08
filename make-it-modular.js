const mymodule=require('./mymodule');
const dir=process.argv[2];
const extension=process.argv[3];
mymodule(dir,extension,(err,filteredlist)=>{
    if(err) return console.log(err)
    filteredlist.forEach((file)=>{
        console.log(file);
    })
})