const { readdir: pReadDir, readFile: pReadFile, writeFile: pWriteFile } = require('fs/promises');

(async () => {
    const files = await pReadDir('./input');
    const contents = await Promise.all(
        files.map(file =>
            pReadFile('./input/'.concat(file), 'utf-8')
        )
    );
    let output = contents.join('\n');
    await pWriteFile('./outputs/asaw.txt',output);
    console.log('end');
})();

// pReadDir('./input')
//     .then((files) => {
//         return Promise.all(
//             files.map(file =>
//                 pReadFile('./input/'.concat(file), 'utf-8')
//             )
//         )
//     })
//     .then((contents) => {
//         let output = contents.join('\n');
//         return pWriteFile('./outputs/promise.txt',output);
//     })
//     .then(() => {
//         console.log('end');
//     })
//     .catch((error => {
//         throw error;
//     }));


// readdir('./input',(error,files) => {
//     if(error) throw error;
//     const contents = [];
//     files.forEach(file => {
//         readFile('./input/'.concat(file),'utf-8',(error,content) => {
//             if(error) throw error;
//             contents.push(content);
//             if(contents.length == files.length) {
//                 console.log(contents);
//                 let output = contents.join('\n');
//                 writeFile('./outputs/callback.txt',output,(error)=>{
//                     if(error) throw error;
//                     console.log('file created');
//                     console.log('end');
//                 });
//             }
//         })
//     })
//     console.log(files);
// });
