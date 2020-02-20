//Get Elements

//Books
let allBooks = [];

function getAllBooks() {
    for (i = 0; i < data.books.length; i++) {
        allBooks.push(data.books[i]);
    }
    renderCover(allBooks); // we want to show allbooks at the begging of the screen
}
getAllBooks();

// Render cover

function renderCover(books) {
    var bookContainer = document.getElementById("bookContainer");
    bookContainer.innerHTML = ""; // clean the bookcontainer at the begginig of this function so we don't get the results more than onces
    for (var i = 0; i < books.length; i++) {
        var div1 = document.createElement("div");
        div1.id = i;
        div1.className = "flip-card";

        var div2 = document.createElement("div");
        div2.className = "flip-card-inner";
        div1.appendChild(div2);

        var div3 = document.createElement("div");
        div3.className = "flip-card-front";

        var img = document.createElement("img");
        img.className = "coverImg";
        img.setAttribute("src", books[i].cover);
        img.setAttribute("height", "auto");
        img.setAttribute("width", "200px");
        div3.appendChild(img);

        var div4 = document.createElement("div");
        div4.className = "flip-card-back";

        let h1 = document.createElement("h1");
        h1.setAttribute("font-family", "serif");
        let title = allBooks[i].title;
        h1.innerHTML = title;
        div4.appendChild(h1);

        let p = document.createElement("p");
        let description = allBooks[i].description;
        p.innerHTML = description;

        div4.appendChild(p);

        let button = document.createElement("button");
        button.className = "button";
        button.innerHTML = "Más información";
        // button.setAttribute = ("id", allBooks[i].detail);
        button.setAttribute("id", allBooks[i].detail);
        button.addEventListener("click", function (event) {
            createGallery(event);
        });
        div4.appendChild(button);

        div2.appendChild(div3);
        div2.appendChild(div4);
        bookContainer.appendChild(div1);
    } // we already called this function at the top
}

// Search button

function filter() {
    let input = document.getElementById("searchbar").value;
    console.log(input.toLowerCase());
    let lowerInput = input.toLowerCase(); // we make it lowercase sensitive t = T
    let filteredBooks = []; // new empty array
    for (i = 0; i < allBooks.length; i++) {
        let title = allBooks[i].title;

        if (title.toLowerCase().includes(lowerInput)) {
            // if the input matches with the title, send it to the filteredBooks array
            filteredBooks.push(allBooks[i]); // we push the hole book, not just the title
        }
    }
    renderCover(filteredBooks); // Render the function above with the filteredBooks array
}

//Create Gallery
function createGallery(event) {
    console.log(event.target.id);
    var popup = document.getElementById("popup");
    popup.innerHTML = ""; //we clear the popup so it doesn't print all the times we click
    var img = document.createElement("img");
    img.className = "slides";
    img.setAttribute("src", event.target.id);

    var span = document.createElement("span");
    span.className = "close-cursor";
    span.innerHTML = "&times;";

    span.onclick = function () {
        popup.style.display = "none";
    };
    popup.appendChild(span);
    popup.appendChild(img);
    popup.style.display = "block";
}