var renderApp = function(){
    var mainContainer = document.getElementById("main-container");
    var content = "<div>Please enter ratings for the following movies:</div>";
    for(var i = 0;i< 3;i++){
        content += "<div><span class='movie-title'>" + (i+1) + "." + movies[i].name + ":</span><input id='" + movies[i].name + "' type='text'/></div>";
    }
    content += "<button id='submit'>Submit</button>";
    mainContainer.innerHTML = content;
    attachEvents();
};
var attachEvents = function(){
    document.getElementById("submit").addEventListener("click", updateRating);
};
var updateRating = function(){
    movies[0].rating = document.getElementById("Titanic").value;
    movies[1].rating = document.getElementById("Iron Man").value;
    movies[2].rating = document.getElementById("God").value;
    autoSuggestMovies();
};
var autoSuggestMovies = function(){
    var mainContainer = document.getElementById("main-container");
    var hightestRating = 0;
    var actor = "";
    var movie = "";
    for(var j=0;j<3;j++){
        if(parseFloat(hightestRating)<parseFloat(movies[j].rating)){
            hightestRating = parseFloat(movies[j].rating);
            actor = movies[j].actor;
            movie = movies[j].name;
        }
    }    
    var moviesForActor = [];
    for(var i=0;i<movies.length;i++){
        if(actor === movies[i].actor && movie !== movies[i].name){
            moviesForActor.push(movies[i]);
        }
    }
    moviesForActor.sort(function(a,b){
        if(a.rating > b.rating){
            return -1;
        }else if(a.rating < b.rating){
            return 1;
        }else{
            return 0;
        }
    });
    var bisque = true;
    var content = "</br><div>Based on your rating you may also like these:</div>";
    content += "<div class='scroll-container'>";
    for(var k=0;k<moviesForActor.length;k++){
        content += "<div class='list-item " + (bisque? " bisque" : "aliceblue") + "'>" + moviesForActor[k].name + "<span>: " + moviesForActor[k].rating + "</span></div>"
        if(bisque){
            bisque = false;
        }else{
            bisque = true;
        }
    }
    content += "</div>";
    mainContainer.innerHTML += content;
};
