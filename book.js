const searchBook = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    searchField.value = '';
    const failEror = document.getElementById ('fail-notify'); 
    if(searchText === ''){
        failEror.style.display = 'block';
    }
    else{
        const url = `http://openlibrary.org/search.json?q=${searchText}`
        fetch(url)
        .then(res => res.json())
        .then(data => displaySearchResult(data.docs))  
    }
}

const displaySearchResult = docses => {
    const searchResult = document.getElementById('search-result');
    docses.forEach (docs => {
        console.log(docs);
        const div = document.createElement('div');
        div.classList.add('card')
        div.innerHTML = `
        <div class="col">
            <div class="card-body">
              <h2>${docs.title}</h2>
              <h3>${docs.author_name}</h3>
              <h4>${docs.publisher}</h4>
              <h5>${docs.first_publish_year}</h5>
              <h5>${docs.publish_date}</h5>
            </div>
        </div>
        `
        searchResult.appendChild(div);
    })
}