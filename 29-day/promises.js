const p = new Promise((res, rej) => {
    setTimeout(() => rej('Failure'), 2000)
})

p.then( r => console.log(`Resolving ${r}`) )
p.catch( err => console.log(err))

new Promise((res, rej) => {
    setTimeout(() => rej('Failure'), 2000)
}).then(msg => console.log(msg))
.catch(err => console.log(err))