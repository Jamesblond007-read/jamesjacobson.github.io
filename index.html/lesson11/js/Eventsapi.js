const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL) 
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);
    
        const towns = jsonObject['towns'];
        for (let i = 0; i < towns.length; i++) {
            if (towns[i].name == "Preston"){
                for (let e = 0; e < towns[i].events.length; e++){
              let card = document.createElement('p');
              card.textContent = towns[i].events[e];
              document.querySelector('div.events').appendChild(card);
            }
        }
    }
    });