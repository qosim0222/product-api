import { fetchData } from "./main.js";

const recipeContainer = document.querySelector(".product-container");
const renderDetailResipe = (data) => {
  recipeContainer.innerHTML = `
        <div>
            <img src=${data.thumbnail} width = 500 alt="">
        </div>
        <div>
            <h1>${data.title}</h1>
            <p></p>
            <ul>
                ${data.tags.map((item) => `<li>${item}</li>`)}
            </ul>
              <ol>
                ${data.reviews.map((item) => `<li>${item}</li>`)}
            </ol>
        </div>
    `;
};

window.onload = () => {
  const params = new URLSearchParams(location.search);
  fetchData(`products/${params.get("id")}`, renderDetailResipe);
};
