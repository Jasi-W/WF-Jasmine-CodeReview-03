
var id_count = 1;

	
json.movies.forEach(function(movies) {
	var count = 0;
	
	var flex = document.getElementById("flex");
	var movie_item = document.createElement("div");
	movie_item.classList.add("item");
	
	var movie_img = document.createElement("img");
	var movie_title = document.createElement("h2");
	var movie_year = document.createElement("h3");
	var movie_short = document.createElement("p");
	
	
	movie_img.src = movies.img;
	movie_title.innerText = movies.title;
	movie_year.innerText = "(" +movies.year+ ")";
	movie_short.innerText = movies.shorts;
	
	flex.appendChild(movie_item);
	movie_item.appendChild(movie_img);
	movie_item.appendChild(movie_title);
	movie_item.appendChild(movie_year);
	movie_item.appendChild(movie_short);
	
	
	var like = document.createElement("div");
	like.className = "like";
	
	id_count++;
	var like_img = document.createElement("img");
	like_img.src = "img/like3.jpg";
	like_img.id = id_count;
	
	var like_count = document.createElement("p");
	like_count.innerHTML = "gefällt auch " +count+ " Personen"
	
	movie_item.appendChild(like);
	like.appendChild(like_img);
	like.appendChild(like_count);
	
    var elementNode = document.getElementById(id_count);
    elementNode.addEventListener("click", showCount);
	  
	function showCount() {
		count++;
		like_count.innerHTML = "gefällt auch " +count+ " Personen"
    }
})
