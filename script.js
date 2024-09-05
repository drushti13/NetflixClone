const api = "814add967a1ad6c76ec17fbddd49fa42";
const base_url = "https://api.themoviedb.org/3";
const banner_url = "https://image.tmdb.org/t/p/original";
const img_url = "https://image.tmdb.org/t/p/w300_and_h450_bestv2";

const requests = {
    fetchTrending: `${base_url}/trending/all/week?api_key=${api}&language=en-US`,
    fetchNetflixOriginals: `${base_url}/discover/tv?api_key=${api}&with_networks=213`,
    fetchActionMovies: `${base_url}/discover/movie?api_key=${api}&with_genres=28`,
    fetchComedyMovies: `${base_url}/discover/movie?api_key=${api}&with_genres=35`,
    fetchHorrorMovies: `${base_url}/discover/movie?api_key=${api}&with_genres=27`,
    fetchRomanceMovies: `${base_url}/discover/movie?api_key=${api}&with_genres=10749`,
    fetchDocumentaries: `${base_url}/discover/movie?api_key=${api}&with_genres=99`,
};

function truncate(str, n) {
    return str?.length > n ? str.substr(0, n-1) + "..." : str;
}

// Banner
fetch(requests.fetchNetflixOriginals)
    .then(res => res.json())
    .then((data) => {
        console.log(data.results);

        // Select a random movie
        const setMovie = data.results[Math.floor(Math.random() * data.results.length)];

            var banner = document.getElementById("banner");
            var banner_title = document.getElementById("banner_title");
            var banner_desc = document.getElementById("banner_description");

            banner.style.backgroundImage = "url(" + banner_url + setMovie.backdrop_path+ ")";
    
            banner_title.innerText = setMovie.name;
            banner_desc.innerText = truncate(setMovie.overview, 150);
        }
    );
fetch(requests.fetchNetflixOriginals)
    .then(res => res.json())

    .then((data) => {
        const headrow = document.getElementById("headrow");
        const row= document.createElement("div");
        row.className = "row";
        row.classList.add("netflixrow");

        headrow.appendChild(row);
        
        const title = document.createElement("h2");
        title.className = "row_title";
        title.innerText = "NETFLIX ORIGINALS";

        row.appendChild(title);

        const row_posters = document.createElement("div");
        row_posters.className = "row_posters";

        row.appendChild(row_posters);


        data.results.forEach((movie => {
            const poster = document.createElement("img");
            poster.className = "row_poster  ";
            var s = movie.name.replace (/\s+/g, "");
            poster.id = s;
            poster.src = img_url+movie.poster_path;
            row_posters.appendChild(poster);
            
        }));
    })

fetch(requests.fetchTrending)
    .then(res => res.json())

    .then((data) => {
        const headrow = document.getElementById("headrow");
        const row= document.createElement("div");
        row.className = "row";

        headrow.appendChild(row);

        const title = document.createElement("h2");

        title.className = "row_title";
        title.innerText = "Top Rated";

        row.appendChild(title);

        const row_posters = document.createElement("div");
        row_posters.className = "row_posters";

        row.appendChild(row_posters);

        data.results.forEach((movie => {
            const poster = document.createElement("img");
            poster.className = "row_poster";
            var s2 = movie.id;
            poster.id = s2;
            poster.src = img_url+movie.backdrop_path;
            row_posters.appendChild(poster);
            
        }));
    })

fetch(requests.fetchActionMovies)
    .then(res => res.json())

    .then((data) => {
        const headrow = document.getElementById("headrow");
        const row= document.createElement("div");
        row.className = "row";

        headrow.appendChild(row);

        const title = document.createElement("h2");

        title.className = "row_title";
        title.innerText = "Action Movies";

        row.appendChild(title);

        const row_posters = document.createElement("div");
        row_posters.className = "row_posters";

        row.appendChild(row_posters);

        data.results.forEach((movie => {
            const poster = document.createElement("img");
            poster.className = "row_posterLarge";
            var s3 = movie.id;
            poster.id = s3;
            poster.src = img_url+movie.backdrop_path;
            row_posters.appendChild(poster);
            
        }));
    })

    fetch(requests.fetchRomanceMovies)
    .then(res => res.json())
    
    .then((data) => {
        const headrow = document.getElementById("headrow");
        const row= document.createElement("div");
        row.className = "row";
    
        headrow.appendChild(row);
    
        const title = document.createElement("h2");
    
        title.className = "row_title";
        title.innerText = "Romance Movies";
    
        row.appendChild(title);
    
        const row_posters = document.createElement("div");
        row_posters.className = "row_posters";
    
        row.appendChild(row_posters);
    
        data.results.forEach((movie => {
            const poster = document.createElement("img");
            poster.className = "row_posterLarge";
            var s7 = movie.id;
            poster.id = s7;
            poster.src = img_url+movie.backdrop_path;
            row_posters.appendChild(poster);
            
        }));
    })
fetch(requests.fetchComedyMovies)
    .then(res => res.json())

    .then((data) => {
        const headrow = document.getElementById("headrow");
        const row= document.createElement("div");
        row.className = "row";

        headrow.appendChild(row);

        const title = document.createElement("h2");

        title.className = "row_title";
        title.innerText = "Comedy Movies";

        row.appendChild(title);

        const row_posters = document.createElement("div");
        row_posters.className = "row_posters";

        row.appendChild(row_posters);

        data.results.forEach((movie => {
            const poster = document.createElement("img");
            poster.className = "row_posterLarge";
            var s4 = movie.id;
            poster.id = s4;
            poster.src = img_url+movie.backdrop_path;
            row_posters.appendChild(poster);
            
        }));
    })
    

    
fetch(requests.fetchDocumentaries)
.then(res => res.json())

.then((data) => {
    const headrow = document.getElementById("headrow");
    const row= document.createElement("div");
    row.className = "row";

    headrow.appendChild(row);

    const title = document.createElement("h2");

    title.className = "row_title";
    title.innerText = "Documentaries";

    row.appendChild(title);

    const row_posters = document.createElement("div");
    row_posters.className = "row_posters";

    row.appendChild(row_posters);

    data.results.forEach((movie => {
        const poster = document.createElement("img");
        poster.className = "row_posterLarge";
        var s5 = movie.id;
        poster.id = s5;
        poster.src = img_url+movie.backdrop_path;
        row_posters.appendChild(poster);
        
    }));
})

    
fetch(requests.fetchHorrorMovies)
.then(res => res.json())

.then((data) => {
    const headrow = document.getElementById("headrow");
    const row= document.createElement("div");
    row.className = "row";

    headrow.appendChild(row);

    const title = document.createElement("h2");

    title.className = "row_title";
    title.innerText = "Horror Movies";

    row.appendChild(title);

    const row_posters = document.createElement("div");
    row_posters.className = "row_posters";

    row.appendChild(row_posters);

    data.results.forEach((movie => {
        const poster = document.createElement("img");
        poster.className = "row_posterLarge";
        var s6 = movie.id;
        poster.id = s6;
        poster.src = img_url+movie.backdrop_path;
        row_posters.appendChild(poster);
        
    }));
})


