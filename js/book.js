const searchBook = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    // console.log(searchText);
    searchField.value = '';
    const url = `https://openlibrary.org/search.json?q=${searchText}&limit=24`;

    // console.log(url);
    fetch(url)
        .then(res => res.json())
        .then((data) => {
            displaySearchresult(data.docs);
            const resultNumber = document.getElementById('searching-result');
            resultNumber.innerText = `showing ${data.docs.length} results of ${data.numFound}`;
        });
}

const displaySearchresult = docs => {
    const searchResult = document.getElementById('search-result');
    searchResult.textContent = "";
    docs.forEach(doc => {
        console.log(doc);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `<div class="col">
        <div class="card h-100">
            <img src="https://covers.openlibrary.org/b/id/${doc.cover_i}-M.jpg" class="bg-dark" alt="..." style="height:250px">
            <div class="card-body">
            <h5 class="card-title"> ${doc.title}</h5>
            <p class="card-text"> author: ${doc.author_name}</p>
            <p>publisher: ${doc.publisher}</p>
            <p>published in ${doc.publish_year}</p>
            </div>
        </div >
    `;
        searchResult.appendChild(div);
    })
}

