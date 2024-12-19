const p1 = new Promise((res, rej) => {
    setTimeout(() => rej('Failure'), 2000)
})

async function ex() {
    try {
        const msg = await p1
        console.log(msg)
    } catch (error) {
        console.log(error)
    }
}

ex()