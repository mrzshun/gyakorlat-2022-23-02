const {readdir,readFile} = require('fs');
readdir('./input',(error,files)=>{
    if(error) throw error;
    // for(const file of files) {
    //     readFile('./input/'.concat(file),(error,content) => {
    //         if(error) throw error;
    //         console.log(content.toString());
    //     })
    // }
    files.forEach(file => {
        readFile('./input/'.concat(file),'utf-8',(error,content) => {
            if(error) throw error;
            console.log(content);
        })
    })
    console.log(files);
});
console.log('end');