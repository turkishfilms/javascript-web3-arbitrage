import fs from 'fs'
console.log("you suck")
fetch("https://api.weather.gov/points/45.516,-122.6814")
    .then(response => {
        console.log(typeof response)
        fs.writeFile("weatherApi.json", response.toString(), (err) => {
            if (err) {
                console.err(err)
            }
        })

    })
