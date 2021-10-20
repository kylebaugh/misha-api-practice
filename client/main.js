// const { default: axios } = require("axios")

const berryList = document.getElementById('berry-list')

const getBerry = () => {
    let asdf = Math.floor((Math.random() * 3) +1 )
    console.log(asdf)

    axios.get(`https://pokeapi.co/api/v2/berry/${asdf}`)
        .then(res => {
            console.log(res)
            // console.log(res.headers)
            console.log(res.data)

            const berryCard = document.createElement('div')
            berryCard.classList.add('berry-card')

            berryCard.innerHTML = res.data.name

            berryList.appendChild(berryCard)
        })
}

document.getElementById("getPoke").addEventListener('click', getBerry)
