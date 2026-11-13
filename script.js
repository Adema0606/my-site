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

const nameInput = document.getElementById('movieName');
const posterInput = document.getElementById('moviePoster');
const addBtn = document.getElementById('addMovie');

addBtn.addEventListener('click', () => {
  const name = nameInput.value.trim();
  const posterUrl = posterInput.value.trim();

  if (name === '' || posterUrl === '') {
    return;
  }

  movieTitles.push(name);
  moviePosters.push(posterUrl);

  nameInput.value = '';
  posterInput.value = '';

  renderMovies();
});