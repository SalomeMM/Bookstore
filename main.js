fetch("https://api.myjson.com/bins/zyv02")
    .then(response => {
        console.log(response);
        return response.json();
    })
    .then(data => {
        let books = data.books;
        createBook(books);
        createEvent(books);
        // searchButton(books);

    })
    .catch(function (error) {
        console.log(error);
    });

function createEvent(books) {
    let input = document.getElementById("search-input");
    input.addEventListener("keyup", function () {
        searchButton(books);
    });
}

function searchButton(books) {
    let input, filter;
    input = document.getElementById("search-input");
    filter = input.value.toUpperCase();

    let filteredBooks = [];

    for (var i = 0; i < books.length; i++) {
        if (books[i].title.toUpperCase().includes(filter)) {
            filteredBooks.push(books[i]);
            // } else if (books[i].description.toUpperCase().includes(filter)) {
            //     console.log(books[i].description)
            //     filteredBooks.push(books[i]);
        }
    }
    createBook(filteredBooks);
}

function createBook(arrBooks) {
    const flipCardContainer = document.getElementById("card-container")
    flipCardContainer.innerHTML = ""
    for (i = 0; i < arrBooks.length; i++) {

        let flipCard = document.createElement("div");
        let flipCardInner = document.createElement("div");
        let flipCardFront = document.createElement("div");
        let flipCardBack = document.createElement("div");

        let bookCover = document.createElement('img');
        let bookTitle = document.createElement("p");
        let bookDescription = document.createElement("p");
        let bookLanguage = document.createElement("p");

        let bookTitleTag = document.createElement("h6")
        let bookDescriptionTag = document.createElement("h6")
        // let bookLanguageTag = document.createElement("h6")

        let moreInfoButton = document.createElement("button")
        //let detailLink = document.createElement("a");
        // let detailImage = document.createElement("img");

        flipCard.setAttribute("class", "flip-card col-md-2,5");
        flipCardInner.setAttribute("class", "flip-card-inner");
        flipCardFront.setAttribute("class", "flip-card-front");
        flipCardBack.setAttribute("class", "flip-card-back");

        bookCover.setAttribute("class", "book-cover");
        bookTitle.setAttribute("class", "card-text");
        bookDescription.setAttribute("class", "card-text");
        bookLanguage.setAttribute("class", "card-text")

        bookTitleTag.setAttribute("class", "book-tag");
        bookDescriptionTag.setAttribute("class", "book-tag");
        // bookLanguageTag.setAttribute("class", "book-tag");

        moreInfoButton.setAttribute("class", "image-link btn btn-light more-info-button")

        //detailLink.setAttribute("class", "image-link btn btn-light more-info-button")
        //moreInfoButton.setAttribute("data-toggle", "modal")
        // detailLink.setAttribute("target", "popup")
        // detailImage.setAttribute("class", "modal")

        bookCover.src = arrBooks[i].cover;
        bookTitle.innerHTML = arrBooks[i].title;
        bookDescription.innerHTML = arrBooks[i].description;
        bookLanguage.innerHTML = "Language: " + arrBooks[i].language.toUpperCase();

        bookTitleTag.innerHTML = "Title: ";
        bookDescriptionTag.innerHTML = "Description: ";
        // bookLanguageTag.innerHTML = "Language: ";

        moreInfoButton.innerHTML = "More info";
        moreInfoButton.setAttribute("id", arrBooks[i].detail)
        moreInfoButton.addEventListener("click", function (event) {
            console.log(event)
            let modal = document.getElementById("popup-modal")
            let popupDiv = document.createElement("div")
            let popupImg = document.createElement("img")
            // let closeButton = document.createElement("a")
            console.log(modal)
            popupImg.setAttribute("src", event.target.id)
            popupImg.setAttribute("class", "popup-image")
            // closeButton.setAttribute("class", "fas fa-window-close close-button")

            let spanButton = document.createElement("span");
            spanButton.setAttribute("class", "close-button fas fa-window-close");
            spanButton.innerHTML = "&times;&nbsp";

            spanButton.onclick = function () {
                popupDiv.innerHTML = ""
                popupDiv.style.display = "none";
            };
            popupDiv.appendChild(spanButton);

            popupDiv.setAttribute("class", "popup-div")
            popupDiv.appendChild(popupImg)
            modal.appendChild(popupDiv)
            // popupDiv.appendChild(closeButton)
        })
        //detailLink.href = arrBooks[i].detail;
        // detailLink.target = "popup";
        //detailLink.innerHTML = "More info";
        // detailImage = arrBooks[i].detail

        flipCardContainer.appendChild(flipCard);
        flipCard.appendChild(flipCardInner);
        flipCardInner.appendChild(flipCardFront);
        flipCardInner.appendChild(flipCardBack);
        flipCardFront.appendChild(bookCover);
        flipCardBack.appendChild(bookTitleTag);
        flipCardBack.appendChild(bookTitle);
        flipCardBack.appendChild(bookDescriptionTag);
        flipCardBack.appendChild(bookDescription);
        // flipCardBack.appendChild(bookLanguageTag);
        flipCardBack.appendChild(bookLanguage);
        flipCardBack.appendChild(moreInfoButton);
        // flipCardBack.appendChild(detailLink)
        // detailLink.appendChild(detailImage)
    }
}