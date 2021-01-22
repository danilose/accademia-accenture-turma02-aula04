const baseUrl = 'https://api.chucknorris.io/jokes/';

axios.get(baseUrl + 'categories').then(
  res => {

    console.log( 'Categorias: ', res.data );

    let allCategories = res.data;

    let categories = allCategories.map( main => (
      `
        <li class="nav-item mb-2">
          <button class="btn btn-outline-success" type="button" onClick="goCategory('${main}')">${main.toUpperCase()}</button>
        </li>
      `
    )).join('');

    const dropdown = document.querySelector( '#categories' );

    dropdown.innerHTML = categories;
  }
);

axios.get(baseUrl + 'random').then(
  res => {

    console.log( 'Random: ', res.data );

    let randomJoke = res.data;

    const card = `
      <div class="card border-dark mb-3" style="max-width: 18rem;">
        <div class="card-body text-dark">
          <p class="card-text">${randomJoke.value}</p>
        </div>
      </div>
    `;

    document.querySelector( '#cards' ).innerHTML = '';

    const random = document.querySelector( '#random' );

    random.innerHTML = card;
  }
);

function findJokes() {

  const searchJoke = document.querySelector( '#search' ).value.trim().split(' ');

  if (searchJoke[0] != '') {

    console.log(searchJoke[0]);

    axios.get( baseUrl + 'search?query=' + searchJoke[0] ).then(
      res => {

        console.log( 'Jokes: ', res.data );


        let allJokes = res.data.result;

        console.log(allJokes);


        let jokes = allJokes.map( main => (
          `
            <div class="col">
              <div class="card">
                <div class="card-body">
                  <p class="card-text">${main.value}</p>
                </div>
              </div>
            </div>
          `
        )).join('');

        document.querySelector( '#random' ).innerHTML = '';

        const cards = document.querySelector( '#cards' );

        cards.innerHTML = jokes;

      }
    );

  }

}

function goCategory(category) {

  console.log(category);

  axios.get( baseUrl + 'random?category=' + category ).then(
    res => {

      console.log( 'Random: ', res.data );

      let randomJoke = res.data;

      const card = `
        <div class="card border-dark mb-3" style="max-width: 18rem;">
          <div class="card-header text-center">${category.toUpperCase()}</div>
          <div class="card-body text-dark">
            <p class="card-text">${randomJoke.value}</p>
          </div>
        </div>
      `;

      document.querySelector( '#cards' ).innerHTML = '';

      const random = document.querySelector( '#random' );

      random.innerHTML = card;
    }
  );
}
// https://api.chucknorris.io/jokes/search?query={query}