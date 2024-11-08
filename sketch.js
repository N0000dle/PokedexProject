let pokedexData;
//let pokemonImages = [];
let pokemonList = [];
let currentPokemon = 0;
let pokeURL =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

function preload() {
  pokedexData = loadJSON("pokedex.json");
  fontPixel = loadFont('retro_computer_personal_use.ttf')
}

function setup() {
  createCanvas(800, 600);
  textSize(14);
  textAlign(LEFT, TOP);
  textFont(fontPixel);

  // Load JSON data into an array
  let pokeArray = pokedexData.pokemon;
  console.log(pokeArray);
  for (let i = 0; i < pokeArray.length; i++) {
    let poke = pokeArray[i];
    pokemonList.push(poke);
    //pokemonImages.push(loadImage(poke.img)); // Load images for each Pokémon (doesn't work)
  }

  // Initial display of the first Pokémon
  displayPokemon(currentPokemon);
}

function draw() {
  background(100);
  // Frame
  noStroke();
  fill(255, 0, 0);
  rect(0, 0, 150, 600);
  rect(0, 0, 800, 50);
  rect(650, 0, 150, 600);
  rect(0, 400, 800, 300);
  fill(255);
  rect(175, 70, 450, 300);

  //Decor
  stroke(1);
  fill(0, 0, 255);
  ellipse(75, 30, 50);
  fill(255, 0, 0);
  ellipse(150, 20, 20);
  fill(255, 255, 0);
  ellipse(175, 20, 20);
  fill(0, 255, 0);
  ellipse(200, 20, 20);
  fill(0, 150, 0);
  rect(150, 470, 200, 100);
  fill(255, 0, 0);
  rect(150, 420, 50, 10);
  fill(0, 0, 255);
  rect(225, 420, 50, 10);

  // Button Background
  fill(0);
  rect(15, 560, 60, 20);
  rect(695, 560, 60, 20);

  // Display current Pokémon
  displayPokemon(currentPokemon);
}

function displayPokemon(index) {
  let poke = pokemonList[index];
  //let img = pokemonImages[index];
  //pokeImg = loadImage(img);
  let pImg = pokeURL + (index + 1) + ".png";
  let nuImg = createImg(pImg).hide();

  // Display Pokémon image
  imageMode(CENTER);
  image(nuImg, 400, 250, 250, 250);
  //console.log(index);

  // Display Pokémon name
  fill(0);
  textSize(20);
  text(poke.name, 200, 95);

  // Display Pokémon ID
  textSize(16);
  text("ID: #" + poke.num, 200, 120);

  // Display Pokémon types
  text("Type: " + poke.type.join(", "), 200, 140);

  // Display Previous and Next buttons
  fill(0, 0, 255);
  textSize(12);
  text("< Prev", 20, height - 40);
  text("Next >", width - 100, height - 40);
}

function mousePressed() {
  // Check if Prev button is clicked
  if (
    mouseX > 10 &&
    mouseX < 100 &&
    mouseY > height - 50 &&
    mouseY < height - 15
  ) {
    currentPokemon =
      (currentPokemon - 1 + pokemonList.length) % pokemonList.length;
  }

  // Check if Next button is clicked
  if (
    mouseX > width - 110 &&
    mouseX < width - 20 &&
    mouseY > height - 50 &&
    mouseY < height - 15
  ) {
    currentPokemon = (currentPokemon + 1) % pokemonList.length;
  }
}
