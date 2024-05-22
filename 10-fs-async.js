//The way the asynchronous works is that we need to provide a callback
//we run the callback when we are done
const { readFile, writeFile } = require('fs')

console.log('start')
readFile('./content/first.txt','utf8',(err, result) => {
    if(err){
        console.log(err)
        return
    }
    const first = result

    readFile('./content/second.txt','utf8',(err, result) => {
        if(err){
            console.log(err)
            return
        }
        const second = result

        writeFile(
            './content/result-async.txt',
            `Here is the result: ${first} ${second}`,
            (err, result) => {
                if(err){
                    console.log(err)
                    result
                }
                //console.log(result)
                console.log('done with this task')
            }
        )
    })
})
console.log('starting next task')