const g = fetch('https://google.com')

async function getData() {

    const dt = await g

    const resBdy = dt.text

    console.log(resBdy)

}

getData()