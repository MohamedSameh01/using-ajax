let myHttp = new XMLHttpRequest();
let movieData;


myHttp.open("GET", "https://api.themoviedb.org/3/trending/all/day?api_key=dd71f7d23ad53cbe3c2675ca829fe76e");
myHttp.send();

myHttp.addEventListener("readystatechange", function() {
    if (myHttp.readyState == 4 && myHttp.status == 200) {
        movieData = JSON.parse(myHttp.response).results;
        displayMovies();

    }
})

function displayMovies() {
    let cartoona = ``;
    for (let i = 0; i < movieData.length; i++) {
        cartoona +=
            `
            <div class="col-xl-2 col-lg-3 col-md-4 co-sm-6 my-3">
                <img src="https://image.tmdb.org/t/p/w500${movieData[i].poster_path}" alt="" class="w-100">
                <h3 >${movieData[i].title}</h3>
                <p >${movieData[i].overview}</p>
                
            </div>
           
        `;
    }
    document.getElementById("rowData").innerHTML = cartoona;
}