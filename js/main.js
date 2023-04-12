url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=2f2dfddeec3347918e492c2546e53ded`;







const hamburger = document.querySelector('.hamburger');
const menuBar = document.querySelector('.menu__bar');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    menuBar.classList.toggle('active')
})



const menuBtn = document.querySelector('menu__btn');

async function fetchData() {


  try {
    const row = document.querySelector(".row");
    
    const response = await fetch(url);
    const data = await response.json();


    data.articles.slice(10, 13).map((movie) => {
      const col = document.createElement("div");
      const image = document.createElement("img");
      const span = document.createElement("span");
      const title = document.createElement('h3');
      const text = document.createElement('p');
      col.classList.add("col-md-4","popular-blog" );
      
      image.src =
      movie.urlToImage == null
        ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDh-NezkgaT2hThH1DT--Sury40gDGhO2yug&usqp=CAU"
        : movie.urlToImage;
      image.alt = movie.title;
      span.textContent = movie.author;
      title.textContent = movie.title;
      text.textContent = movie.description;

      col.append(image,span,title,text);
      row.appendChild(col);
    });
  } catch (error) {
    console.error(error);
  }
}

fetchData();