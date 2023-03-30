const movies = [
  {
    name: "Spider-Man",
    cato: "comedies",
    img: "https://kaiz.me/flexbox-product-grid/assets/spider-man.jpg",
    discription: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi
earum voluptatem nesciunt ullam veniam molestiae? Necessitatibus
consequuntur ipsam consectetur atque quia? Nemo, veniam? Aut
voluptates consectetur eum molestiae deserunt doloremque?`,
    readMore: "https://en.wikipedia.org/wiki/Spider-Man:_No_Way_Home",
  },
  {
    name: "Stranger Things",
    cato: "horror,comedies",
    img: "https://kaiz.me/flexbox-product-grid/assets/stranger-thing.jpg",
    discription: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi
earum voluptatem nesciunt ullam veniam molestiae? Necessitatibus
consequuntur ipsam consectetur atque quia? Nemo, veniam? Aut
voluptates consectetur eum molestiae deserunt doloremque?`,
    readMore: "https://en.wikipedia.org/wiki/Stranger_Things",
  },
  {
    name: "Wednesday",
    cato: "dramas",
    img: "https://kaiz.me/flexbox-product-grid/assets/wednesday.jpg",
    discription: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi
earum voluptatem nesciunt ullam veniam molestiae? Necessitatibus
consequuntur ipsam consectetur atque quia? Nemo, veniam? Aut
voluptates consectetur eum molestiae deserunt doloremque?`,
    readMore: "https://en.wikipedia.org/wiki/Spider-Man:_No_Way_Home",
  },
  {
    name: "Squid Game",
    cato: "comedies,asians",
    img: "https://kaiz.me/flexbox-product-grid/assets/squid-game.jpg",
    discription: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi
earum voluptatem nesciunt ullam veniam molestiae? Necessitatibus
consequuntur ipsam consectetur atque quia? Nemo, veniam? Aut
voluptates consectetur eum molestiae deserunt doloremque?`,
    readMore: "https://en.wikipedia.org/wiki/Squid_Game",
  },
  {
    name: "The Witcher",
    cato: "dramas",
    img: "https://kaiz.me/flexbox-product-grid/assets/the-witcher.jpg",
    discription: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi
earum voluptatem nesciunt ullam veniam molestiae? Necessitatibus
consequuntur ipsam consectetur atque quia? Nemo, veniam? Aut
voluptates consectetur eum molestiae deserunt doloremque?`,
    readMore: "https://en.wikipedia.org/wiki/The_Witcher_(TV_series)",
  },
  {
    name: "All Of Us Are Dead",
    cato: "horror,asians",
    img: "https://kaiz.me/flexbox-product-grid/assets/all-of-us-are-dead.jpeg",
    discription: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi
earum voluptatem nesciunt ullam veniam molestiae? Necessitatibus
consequuntur ipsam consectetur atque quia? Nemo, veniam? Aut
voluptates consectetur eum molestiae deserunt doloremque?`,
    readMore: "https://en.wikipedia.org/wiki/All_of_Us_Are_Dead",
  },
  {
    name: "Money Heist",
    cato: "",
    img: "https://kaiz.me/flexbox-product-grid/assets/money-heist.jpg",
    discription: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi
earum voluptatem nesciunt ullam veniam molestiae? Necessitatibus
consequuntur ipsam consectetur atque quia? Nemo, veniam? Aut
voluptates consectetur eum molestiae deserunt doloremque?`,
    readMore: "https://en.wikipedia.org/wiki/Money_Heist",
  },
  {
    name: "Army Of The Dead",
    cato: "horror,dramas",
    img: "https://kaiz.me/flexbox-product-grid/assets/army-of-the-dead.jpg",
    discription: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi
earum voluptatem nesciunt ullam veniam molestiae? Necessitatibus
consequuntur ipsam consectetur atque quia? Nemo, veniam? Aut
voluptates consectetur eum molestiae deserunt doloremque?`,
    readMore: "https://en.wikipedia.org/wiki/Army_of_the_Dead",
  },
  {
    name: "Shadow And Bone",
    cato: "comedies,dramas",
    img: "https://kaiz.me/flexbox-product-grid/assets/shadow-and-bone.jpg",
    discription: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi
earum voluptatem nesciunt ullam veniam molestiae? Necessitatibus
consequuntur ipsam consectetur atque quia? Nemo, veniam? Aut
voluptates consectetur eum molestiae deserunt doloremque?`,
    readMore: "https://en.wikipedia.org/wiki/Shadow_and_Bone_(TV_series)",
  },
  {
    name: "Alive",
    cato: "horror,asians",
    img: "https://kaiz.me/flexbox-product-grid/assets/alive.jpg",
    discription: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi
earum voluptatem nesciunt ullam veniam molestiae? Necessitatibus
consequuntur ipsam consectetur atque quia? Nemo, veniam? Aut
voluptates consectetur eum molestiae deserunt doloremque?`,
    readMore: "https://en.wikipedia.org/wiki/Alive_(2020_film)",
  },
];

const container = document.querySelector(".container");
const home = document.querySelector(".home");
const horror = document.querySelector(".horror");
const comedies = document.querySelector(".comedies");
const dramas = document.querySelector(".dramas");
const asians = document.querySelector(".asians");
for (let i = 0; i < movies.length; i++) {
  const cardDiv = document.createElement("div");
  cardDiv.classList.add("card");
  cardDiv.innerHTML = `<img
  src="${movies[i].img}"
  alt=""
/>
<div class="info">
  <h2>${movies[i].name}</h2>
  <p>
   ${movies[i].discription}
  </p>
  <a href="${movies[i].readMore}" target="_blank">Read more...</a>
</div>`;
  container.append(cardDiv);
}

// horror.addEventListener("click", () => {
//   const searchHorror = "dramas";
//   const horrorCards = movies.filter((movie) => {
//     return movie.cato.includes(searchHorror);
//   });

//   console.log(horrorCards);
// });
