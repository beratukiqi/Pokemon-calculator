// What to do
// Create two arrays - One for the available pokemons / One for the chosen pokemons
// Create a function that adds a pokemon card to the DOM
// Add a click event to the pokemon cards.
//   - When clicked, swap the card to the other array.
// Add / subtract the total CP of the chosen pokemons

const availablePokemons = [
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
const chosenPokemons = [];
let TOTAL_CP = 0;

// Function to add a pokemon card to the Chosen DOM
const addToChosenDom = (pokemon) => {
  const pokemonCard = document.createElement('article');
  pokemonCard.classList.add('card'); // För styling
  pokemonCard.innerHTML = `
                    <img src="${pokemon.imgSrc}" alt="${pokemon.name}">
                    <header>
                        <h3>${pokemon.name}</h3>
                        <p>${pokemon.cp}</p>
                    </header>`;
  document
    .querySelector('.chosen-column h2')
    .insertAdjacentElement('afterend', pokemonCard); // Lägg till i chosen kolumn i DOM

  // När vi klickar på ett kort från chosen listan
  pokemonCard.addEventListener('click', () => {
    chosenPokemons.pop(pokemon); // Bort med pokemon från Chosen listan
    availablePokemons.push(pokemon); // Lägg till pokemon i Available Listan
    addToAvailableDom(pokemon); // Skapa nytt kort i DOM
    subtractTotalCP(pokemon.cp); // Tar bort pokemonens CP från totalen
    pokemonCard.remove(); // Tar bort kort från DOM
  });
};

// Function to add pokemon card to the Available DOM
const addToAvailableDom = (pokemon) => {
  const pokemonCard = document.createElement('article');
  pokemonCard.classList.add('card'); // För styling
  pokemonCard.innerHTML = `
                      <img src="${pokemon.imgSrc}" alt="${pokemon.name}">
                      <header>
                          <h3>${pokemon.name}</h3>
                          <p>${pokemon.cp}</p>
                      </header>`;
  document.querySelector('.available-column').appendChild(pokemonCard);

  // När vi klickar på ett kort från available listan
  pokemonCard.addEventListener('click', () => {
    availablePokemons.pop(pokemon); // Bort med pokemon från Available listan
    chosenPokemons.push(pokemon); // Lägg till pokemon i Chosen listan
    addToChosenDom(pokemon); // Skapa nytt kort i DOM
    addTotalCP(pokemon.cp); // Lägg till pokemonens CP i totalen
    pokemonCard.remove(); // Tar bort kort från DOM
  });
};

// Lägg till poäng och uppdatera DOM
const addTotalCP = (points) => {
  TOTAL_CP += points; // Öka vår globala variabel med poängen vi lägger in i som argument.
  document.getElementById('total-cp').innerHTML = `Total CP: ${TOTAL_CP}`; // Uppdatera UI
};

// Ta bort poäng och uppdatera DOM
const subtractTotalCP = (points) => {
  TOTAL_CP -= points; // Minska vår globala variabel med poängen vi lägger in i som argument.
  document.getElementById('total-cp').innerHTML = `Total CP: ${TOTAL_CP}`; // Uppdatera UI
};

// Lägg till total poäng element i DOM
let totalCP = document.createElement('p');
totalCP.id = 'total-cp';
totalCP.innerHTML = `Total CP: ${TOTAL_CP}`;
document.querySelector('.chosen-column').appendChild(totalCP);

// Rendera ut alla pokemon från Available till vårat DOM träd från start.
availablePokemons.forEach((item) => {
  addToAvailableDom(item);
});
