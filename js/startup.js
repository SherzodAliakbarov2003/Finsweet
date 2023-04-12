let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=2f2dfddeec3347918e492c2546e53ded`;

const input = document.querySelector(".search-input");

const pegenation = document.querySelector(".pegenation-wrapper");

let currentPage = 1;

async function startData() {
  try {
    const searchBoxs = document.querySelector(".search-boxs");
    const input = document.querySelector(".search-input").value;
    
    if (input) {
      url = `https://newsapi.org/v2/everything?q=${input}&apiKey=2f2dfddeec3347918e492c2546e53ded`;
    } else {
      url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=2f2dfddeec3347918e492c2546e53ded&page=${currentPage}`;
    }


    let response = await fetch(url);
    let data = await response.json();


    let totalPages = data.totalResults > 4 ? 3 : data.totalResults;

    console.log(data.articles);

    searchBoxs.innerHTML = "";
    if (data?.articles?.length === 0) {
      const notFound = createElement("div");
      notFound.textContent = "malumot yoq";
      searchBoxs.appendChild(notFound);
    } else {
      data?.articles?.slice(1,10).map((movie) => {     
        const divBox = document.createElement("div");
        divBox.classList.add("search-box");
        const image = document.createElement("img");
        const div = document.createElement("div");
        div.classList.add("search-box-text");
        const span = document.createElement("span");
        const title = document.createElement("h3");
        const text = document.createElement("p");

        image.src =
          movie.urlToImage == null
            ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDh-NezkgaT2hThH1DT--Sury40gDGhO2yug&usqp=CAU"
            : movie.urlToImage;
        image.alt = movie.title;
        span.textContent = movie.author;
        title.textContent = movie.title;
        text.textContent = movie.description;

        div.append(span, title, text);

        divBox.append(image, div);

        searchBoxs.appendChild(divBox);
      
    })
      pegenation.innerHTML = '';

      if (totalPages > 1) {
        for (let i = 1; i <= totalPages; i++) {
            const button = document.createElement('button');
            button.innerText = i;
            
            if(currentPage === i ){
              button.classList.add('activee');
            }
            button.addEventListener('click', () => {
              currentPage = i;
              startData()
            })
            pegenation.appendChild(button);
        }
      }
    }


  
  } catch (error) {
    console.error(error);
  }
}

startData();
input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    startData();
  }
});
