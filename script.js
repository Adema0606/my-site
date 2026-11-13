const movieTitles = [
  'Гарри Поттер',
  'Сумерки',
  'Интерстеллар'
];

const moviePosters = [
  'covers/potter.jpg',
  'covers/twilight.jpg',
  'covers/interstellar.jpg'
];

const movieList = document.getElementById('movieList');

function renderMovies() {
  movieList.innerHTML = '';

  movieTitles.forEach((movieTitle, index) => {
    const item = document.createElement('li');

    const poster = document.createElement('img');
    poster.src = moviePosters[index];
    poster.alt = '';

    const title = document.createElement('span');
    title.textContent = movieTitle;
    item.append(poster, title);
    movieList.append(item);
  });
}

renderMovies();