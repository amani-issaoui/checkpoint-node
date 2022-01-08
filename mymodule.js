const fs=require('fs');
const path=require('path');
module.exports= (folder,ext,callback)=>{
    ext=`.${ext}`
    fs.readdir(folder,(err,list)=>{
        if(err) return callback(err);
        const filter=list.filter((el)=>{
            return (path.extname(el)===ext);
        });
        return callback(null,filter)
    })
}