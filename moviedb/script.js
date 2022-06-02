const main = document.getElementById("main");

const AllGenresList = {
    28: "Action",
    12: "Adventure",
    16: "Animation",
    35: "Comedy",
    80: "Crime",
    99: "Documentary",
    18: "Drama",
    10751: "Family",
    14: "Fantasy",
    36: "History",
    27: "Horror",
    10402: "Music",
    9648: "Mystery",
    10749: "Romance",
    878: "Science Fiction",
    10770: "TV Movie",
    53: "Thriller",
    10752: "War",
    37: "Western"
}

let sortBy = document.getElementById("sort-by").value; // popularity, name, release_date
let order = document.getElementById("order-by").value; // asc
let page = 1;

document.getElementById("sort-by").addEventListener("change", function() {
    sortBy = document.getElementById("sort-by").value;
});

document.getElementById("order-by").addEventListener("change", function() {
    order = document.getElementById("order-by").value;
});

document.getElementById("page").addEventListener("input", function() {
    page = document.getElementById("page").value;
});

document.getElementById("back-to-first-page").addEventListener("click", ()=> {
    resetSettings();
    apiUrl = `https://api.themoviedb.org/3/discover/movie?sort_by=${ document.getElementById("sort-by").value}.${document.getElementById("order-by").value}&api_key=04c35731a5ee918f014970082a0088b1&page=${document.getElementById("page").value}`;
    searchMovie(apiUrl);
});

let apiUrl = `https://api.themoviedb.org/3/discover/movie?sort_by=${sortBy}.${order}&api_key=04c35731a5ee918f014970082a0088b1&page=${page}`;
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI ="https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

document.getElementById("update-results").addEventListener("click", () => {
    let srt = sortBy;
    let ord = order;
    let pg = page;

    if (document.getElementById("page").value > 0) {
        callRequest(srt,ord,pg);
    } else {
        alert("Page number must be >= 1");
        document.getElementById("page").value = 1;
    };
});

function callRequest(srt, ord, pg) {
    apiUrl = `https://api.themoviedb.org/3/discover/movie?sort_by=${srt}.${ord}&api_key=04c35731a5ee918f014970082a0088b1&page=${pg}`;
    searchMovie(apiUrl);
};

function searchMovie(url) {
    main.innerHTML = "";
    try {
        fetch(url)
        .then((response) => response.json())
        .then((data) => data.results.forEach(movie => displayResults(movie)));
    } catch(err) {
        console.log(err);
        main.innerHTML = "No movies found";
    };
   
    function displayResults(movie) {

        const movieName = movie.original_title;
        const releaseDate = movie.release_date;
        const adultOnly = movie.adult;
        const imageSource = movie.backdrop_path;
        const languague = movie.original_language;
        const movieID = movie.id;
        const rating = movie.vote_average;
        const peopleRated = movie.popularity;
        const movieGenre = movie.genre_ids

        //console.log(AllGenresList)

        // let stringOfGenres = movieGenre.join(",")
        let newGenres = []

        movieGenre.forEach(genre => convertGenres(genre))

        function convertGenres(genre) {
            if (genre in AllGenresList) {
                console.log(AllGenresList[genre])
                newGenres.push(AllGenresList[genre])
            }
        }

        
        let stringOfGenres = newGenres.join(", ")
        console.log(stringOfGenres)

        const card = document.createElement("div"); card.classList.add("movie-card");
        const name = document.createElement("div"); name.classList.add("movie-name");
        const image = document.createElement("img"); image.classList.add("movie-pic");
        const adult = document.createElement("div"); adult.classList.add("adult-only");
        const release = document.createElement("div"); adult.classList.add("release-date");
        const lang = document.createElement("div"); lang.classList.add("language");
        const link = document.createElement("div"); link.classList.add("movie-link");
        const votes = document.createElement("div"); votes.classList.add("rating");
        const genres = document.createElement("div"); genres.classList.add("genres")
        const showingPage = document.getElementById("page-show");

        card.appendChild(image);card.appendChild(name);card.appendChild(genres);card.appendChild(adult);card.appendChild(lang);card.appendChild(release);card.appendChild(votes);
        card.appendChild(link);
        main.appendChild(card);

        showingPage.innerHTML = `Showing the first ${main.childElementCount} results of <b> page ${document.getElementById("page").value}</b>`;

        if (imageSource == null) { image.src="nopic.png"} else { image.src = IMGPATH + imageSource};
        name.innerHTML = movieName;
        genres.innerHTML = `<b>Genres:</b> ${stringOfGenres}`
        if (adultOnly == false) { adult.innerHTML = "<b>18+ :</b> No"} else { adult.innerHTML = "18+ : Yes"};
        if (releaseDate == undefined) { release.innerHTML = release.innerHTML = "<b>Release date: </b>unknown";} else {release.innerHTML = "<b>Release date: </b>" + releaseDate};
        lang.innerHTML = "<b>Language: </b>" + languague.toUpperCase();
        votes.innerHTML = `<b>Rating: </b>${rating}/10 (${peopleRated.toFixed(0)})`;
        link.innerHTML = `<b><a href='https://www.themoviedb.org/movie/${movieID}' target='_blank' title="Get to know more about this movie">More info</a></b>`;
    };
};

document.getElementById("search-button").addEventListener("click", ()=> {
    searchBar();
});

document.getElementById("search").addEventListener("keyup", (key)=> {
    if (key.code == "Enter" || key.code == "NumpadEnter") {
        searchBar();
    };
});

function searchBar() {
    if (document.getElementById("page").value > 0) {
        let movie = document.getElementById("search").value;
        if (movie == "") {return false};
        searchMovie((SEARCHAPI + movie));
    } else {
        alert("Page number must be >= 1");
        document.getElementById("page").value = 1;
    };
    resetSettings()
};

function resetSettings() {
    document.getElementById("order-by").value = "desc";
    document.getElementById("sort-by").value = "popularity";
    document.getElementById("page").value = 1;
    document.getElementById("search").value = "";
    document.getElementById("page-show").innerHTML = `Showing the first ${main.childElementCount} results of <b> page 1</b>`
}

window.onload = searchMovie(apiUrl);
