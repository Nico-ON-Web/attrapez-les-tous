
// je clique sur le bouton ca me genere un nombre entre 1 et 1000

let btn = document.querySelector("#btn")
btn.addEventListener('click',()=>{
    let number = Math.floor(Math.random() * 1000 +1)
    // j'appelle l'api avec ce nombre pour avoir la fiche du pokemon en question
    fetch(`https://pokeapi.co/api/v2/pokemon/${number}/`).
    then(rep=>{return rep.json()})
    .then(res=>{
        console.log(res)
        // use res.sprites.front_default
        document.querySelector(".pokemon-card").innerHTML=`
            <img src="${res.sprites.other.dream_world.front_default}" alt=""/>
            <h2>${res.name}</h2> 
        `
    })
})

