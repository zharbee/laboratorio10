const películasR = document.getElementById ('películasR')

const content = document.getElementById ('content')

const películasT = document.getElementById ('películasT')

//caratulas de película

let Strangerthings ={

    poster: `<img src="./imagenes/ST 1.jpg"`,
    name: "Stranger Things",
    description: "After the mysterious and sudden vanishing of a young boy, the people of a small town begin to uncover secrets of a government lab, portals to another world and sinister monsters.",
    rating: 5,
    banner:`https://images3.alphacoders.com/882/882548.jpg`


}

let ClubWinx ={

    poster: `<img src="./imagenes/winx.jpg">`,
    name: "Winx Club",
    description: "Bloom is a girl like many others living in Gardenia, on Earth, with her little bunny Kiko. Her biggest dream is to become a fairy...",
    rating: 4,
    banner:`https://i.pinimg.com/originals/6e/67/6f/6e676f25f1df735481564807ee688e22.jpg`

}

let Mylittlepony ={

    poster: `<img src="./imagenes/MLP.jpg">`,
    name: "My little pony",
    description: "Journey to the enchanted land of Equestria, where unicorn Twilight Sparkle and her pals have adventures and learn valuable lessons about friendship. Watch all you want.",
    rating: 5,
    banner:`https://images.alphacoders.com/512/512795.jpg`

}

let CareBears ={

    poster: `<img src="./imagenes/carebears.jpg">`,
    name: "Care Bears",
    description: "Adventure awaits as the Care Bears welcome the Cousins to Care-a-Lot, discover new Belly Badge powers and help friends face their fears.",
    rating: 3,
    banner:`https://wallpaperaccess.com/full/1237032.jpg`
 

}

let Teenagemutantninjaturtles ={

    poster: `<img src="./imagenes/TMNT.jpg">`,
    name: "Teenage mutant ninja turtles",
    description: "A ninja master and the mutated turtles who were once his pets rise from the sewers of Manhattan to fight evil alien forces that threaten the city.",
    rating: 4,
    banner:`https://www.xtrafondos.com/descargar.php?id=6398&resolucion=3840x2160`


}

let MonsterHigh ={

    poster: `<img src="./imagenes/MH.jpg">`,
    name: "Monster High",
    description: "Monster High is the model high school for monster integration; a melting pot where all monsters can let their fangtastic freak flags fly! But when other monster schools are merged with Monster High, the balance is upset and the school is thrown into social chaos.",
    rating: 5,
    banner:`https://wallpapercave.com/wp/8a45E6c.jpg`
   

}

let SausageParty ={

    poster: `<img src="./imagenes/salchicha.jpg">`,
    name: "Sausage Party",
    description: "A parody of Disney and Pixar films, the film follows an anthropomorphic sausage who lives in a supermarket and discovers the truth about what happens when groceries are purchased. He goes on a journey with his friends to escape their fate while also facing a psychotic and malicious douche who wants to kill him.",
    rating: 2,
    banner:`https://images6.alphacoders.com/109/thumb-1920-1095960.jpg`


}

let DNI ={

    poster: `<img src="./imagenes/365.jpg">`,
    name: "365 Days",
    description: "A woman falls victim to a dominant mafia boss, who imprisons her and gives her one year to fall in love with him.",
    rating: 5,
    banner:`https://www.themoviedb.org/t/p/original/m5ghNNuwQ54DSZysgZK9FkiYcKK.jpg`


}

let Bettylafea ={

    poster: `<img src="./imagenes/beti.jpg">`,
    name: "Yo soy Betty, la fea",
    description: "Taking place mainly in Bogotá, Colombia, Betty La Fea is essentially a Cinderella comedy about the rise of poor, ugly 'Betty' Pinzón and the fall of rich, handsome Armando Mendoza.",
    rating: 5,
    banner:`https://cloudfront-us-east-1.images.arcpublishing.com/gruporepublica/ZI6PM6NUKZFABLD6SNZ56SV5BU.JPG`

}

let Shrek ={

    poster: `<img src="./imagenes/chuek.jpg">`,
    name: "Shrek",
    description: "On a mission to retrieve a princess from a fire-breathing dragon, gruff ogre Shrek teams up with an unlikely compatriot — a wisecracking donkey.",
    rating: 5,
    banner:`https://www.kindpng.com/picc/m/49-494564_shrek-shrek-movie-poster-landscape-hd-png-download.png`

}

let Chihuahua ={

    poster: `<img src="./imagenes/chihuahua.jpg">`,
    name: "Beverly Hills Chihuahua",
    description: "While on vacation in Mexico, Chloe, a ritzy Beverly Hills chihuahua, finds herself lost and in need of assistance in order to get back home.",
    rating: 3,
    banner:`https://lumiere-a.akamaihd.net/v1/images/pp_beverlyhillschihuahua_herobanner_19884_3e3cee10.jpeg?region=0,0,2048,878`

}

let Barbie ={

    poster: `<img src="./imagenes/Barbie.jpg">`,
    name: "Princeds Charm School",
    description: "Barbie stars as Blair Willows, a kind-hearted girl who is chosen to attend Princess Charm School: a magical, modern place that teaches dancing, how to have tea parties, and proper princess manners.",
    rating: 4,
    banner:`https://i.pinimg.com/736x/63/8a/8a/638a8ada575bfae5d42b40d3216dae92--princess-movies-barbie-princess.jpg`

}

let Eclipse ={

    poster: `<img src="./imagenes/crepusculo.jpg">`,
    name: "The Twilight Saga: Eclipse",
    description: "With a bloodthirsty enemy on a quest for revenge, Bella must reconcile her love for vampire Edward and her growing feelings for werewolf Jacob.",
    rating: 4,
  banner:`https://wallpapercave.com/wp/wp3503185.jpg`

}

let Emoji ={

    poster: `<img src="./imagenes/emoji.jpg">`,
    name: "Emoji Movie",
    description: "In Textopolis, where the emojis are expected to display just one emotion, Gene's multiple expressions are a problem. His solution: become normal.",
    rating: 1,
    banner:`https://m.media-amazon.com/images/M/MV5BMTA0NDgzNTczODheQTJeQWpwZ15BbWU4MDU5MjU2NjQz._V1_.jpg`
  

}

let Minions ={

    poster: `<img src="./imagenes/minions.jpg">`,
    name: "Minions",
    description: "In 1968, Kevin, Stuart and Bob head to New York and Florida expecting to find a new boss while the rest of their tribe waits for them in Antarctica. They search for the evil Scarlet Overkill who travels to England with them and assigns the trio of minions to steal the Crown of the Queen.",
    rating: 5,
    banner: `https://i.pinimg.com/originals/c6/75/07/c67507902339a54ba12a8d9216029d8f.jpg`
    

}

let garfield ={

    poster: `<img src="./imagenes/garfield.jpg"`,
    name: "Garfield",
    description: "Garfield is a fat cat who loves nothing more than lying about and eating lasagna, but when his human, Jon Arbuckle, gains a dog named Odie as a new pet, Garfield feels left out and constantly tries to be the better furry companion.",
    rating: 5,
    banner: `https://images.fanart.tv/fanart/garfield-55da28b40c147.jpg`
   

}

function showbanner(movie){

    let html =  `
    <img src= ${movie.banner} class=banner>
    <h1>${movie.name}</h1>
    <h3>${movie.rating} rating</h3>
    <p>${movie.description}</p>
    <div class="options">
        <button id="butts" ><img src="played.png" alt=""></button>
        <button id="buttx" ><img src="saved.png" alt=""></button>
    </div>`;

    return (html)

  


} content.innerHTML+=showbanner(garfield);

function showposter(movie){

    let html = movie.poster;
    return (html)

}

let recomendados = [Strangerthings, ClubWinx, Mylittlepony, CareBears, Teenagemutantninjaturtles, MonsterHigh, SausageParty, DNI]

for (let i=0; i<recomendados.length; i++) {

películasR.innerHTML+=`<div class="serie1">`+showposter(recomendados[i])+`</div>`;

}

function showposter(movie){

    let html = movie.poster;
    return (html)

}

let populares = [Bettylafea, Shrek, Chihuahua, Barbie, Eclipse, Emoji, Minions, garfield]

for (let i=0; i<populares.length; i++) {

películasT.innerHTML+=`<div class="serie1">`+showposter(populares[i])+`</div>`;

}


