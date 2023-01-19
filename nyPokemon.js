const availablePokemonList = [
  {
    id: 1,
    name: 'Bulbasaur',
    cp: 439,
    imgSrc: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png',
  },
  {
    id: 37,
    name: 'Vulpix',
    cp: 194,
    imgSrc: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/037.png',
  },
  {
    id: 134,
    name: 'Vaporeon',
    cp: 2469,
    imgSrc: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/134.png',
  },
  {
    id: 130,
    name: 'Gyarados',
    cp: 2406,
    imgSrc: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/130.png',
  },
  {
    id: 25,
    name: 'Pikachu',
    cp: 455,
    imgSrc: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/025.png',
  },
  {
    id: 27,
    name: 'Sandshrew',
    cp: 710,
    imgSrc: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/027.png',
  },
  {
    id: 52,
    name: 'Meowth',
    cp: 121,
    imgSrc: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/052.png',
  },
];

const chosenPokemonList = [];

let TOTAL_POINTS = 0;

// Gör en funktion som skapar ett kort

// const addCardToChosenDOM = (pokemon) => {
//   // SKAPA KORTET
//   let pokemonKort = document.createElement('article');
//   pokemonKort.classList.add('card');
//   pokemonKort.innerHTML = `
//   <img src="${pokemon.imgSrc}" alt="Pikaaaaaaaaaa">
//   <header>
//       <h3>${pokemon.name}</h3>
//       <p>${pokemon.cp}</p>
//   </header>
//   `;

//   document
//     .querySelector('.chosen-column h2')
//     .insertAdjacentElement('afterEnd', pokemonKort);

//   // LÄGG TILL KLICK FUNKTIONER
//   pokemonKort.addEventListener('click', () => {
//     // UPPDATERA ARRAY LISTORNA
//     chosenPokemonList.pop(pokemon);
//     availablePokemonList.push(pokemon);

//     // TA BORT OCH UPPDATERA POÄNG
//     removePoints(pokemon.cp);

//     // UPPDATERA DOM / HTML
//     addCardToAvailableDOM(pokemon);
//     pokemonKort.remove();
//   });
// };

// const addCardToAvailableDOM = (pokemon) => {
//   // SKAPA KORTET
//   let pokemonKort = document.createElement('article');
//   pokemonKort.classList.add('card');
//   pokemonKort.innerHTML = `
//     <img src="${pokemon.imgSrc}" alt="Pikaaaaaaaaaa">
//     <header>
//         <h3>${pokemon.name}</h3>
//         <p>${pokemon.cp}</p>
//     </header>
//     `;
//   document.querySelector('.available-column').appendChild(pokemonKort);

//   // Lägg till vad som händer om vi klickar på just detta kort.
//   pokemonKort.addEventListener('click', () => {
//     // Först uppdatera våra arraylistor
//     availablePokemonList.pop(pokemon); // Ta bort
//     chosenPokemonList.push(pokemon); // Lägg till

//     // UPPDATERA POÄNG
//     addPoints(pokemon.cp);

//     // Uppdatera HTML / DOM
//     addCardToChosenDOM(pokemon);
//     pokemonKort.remove();
//   });
// };

// availablePokemonList.forEach((pokemonObjekt) => {
//   addCardToAvailableDOM(pokemonObjekt);
// });

// Lägg till en poäng UI
let poängRäknare = document.createElement('p');
poängRäknare.innerHTML = `Totala poäng är: ${TOTAL_POINTS}`;
poängRäknare.id = 'points';
document.querySelector('.chosen-column').appendChild(poängRäknare);

// Skapa en funktion som lägger till poängen på vår TOTAL POINTS

const addPoints = (poäng) => {
  TOTAL_POINTS = TOTAL_POINTS + poäng;
  updatePoints();
};

const removePoints = (poäng) => {
  TOTAL_POINTS = TOTAL_POINTS - poäng;
  updatePoints();
};

// Uppdatera frontend
const updatePoints = () => {
  document.getElementById(
    'points'
  ).innerHTML = `Totala poäng är: ${TOTAL_POINTS}`;
};

/// För varje klick
// Rendera ut listorna på nytt

// Uppdatera listorna (arrays)
// Stor funktion som uppdaterar UI / HTML utefter listorna

// Ta en funktion som uppdaterar ALLA kort direkt baserat på listorna

const updateAll = () => {
  // Första listan

  for (let i = 0; i < availablePokemonList.length; i++) {
    let pokemonKort = document.createElement('article');
    pokemonKort.classList.add('card');
    pokemonKort.innerHTML = `
            <img src="${availablePokemonList[i].imgSrc}" alt="Pikaaaaaaaaaa">
            <header>
                <h3>${availablePokemonList[i].name}</h3>
                <p>${availablePokemonList[i].cp}</p>
            </header>
            `;
    document.querySelector('.available-column').appendChild(pokemonKort);

    pokemonKort.addEventListener('click', () => {
      chosenPokemonList.push(availablePokemonList[i]); // Lägg till
      availablePokemonList.splice(i, 1); // Ta bort

      removeAll();
      updateAll();
    });
  }
  // ANDRA LISTAN
  for (let i = 0; i < chosenPokemonList.length; i++) {
    let pokemonKort = document.createElement('article');
    pokemonKort.classList.add('card');
    pokemonKort.innerHTML = `
              <img src="${chosenPokemonList[i].imgSrc}" alt="Pikaaaaaaaaaa">
              <header>
                  <h3>${chosenPokemonList[i].name}</h3>
                  <p>${chosenPokemonList[i].cp}</p>
              </header>
              `;
    document.querySelector('.chosen-column').appendChild(pokemonKort);

    pokemonKort.addEventListener('click', () => {
      availablePokemonList.push(chosenPokemonList[i]); // Ta bort
      chosenPokemonList.splice(i, 1); // Lägg till
      removeAll();
      updateAll();
    });
  }
};

const removeAll = () => {
  let allakort = document.querySelectorAll('article');
  allakort.forEach((kort) => {
    kort.remove();
  });
};

updateAll();

// Uppdatera listor vid klick
// Ta bort allt från HTML
// Lägg till nytt HTML från nya uppdaterade listor

// Baserat på listor

// Ta bort från HTML vid klick
// Lägg till på andra sidan HTML.

// Baserat på kort
