const requestURL = "https://github.com/Jamesblond007-read/jamesjacobson.github.io/profile.json";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const guide= jsonObject['guide'];
    for (let i = 0; i < guide.length; i++ ) {
        let card = document.createElement('section');
        
        let h2 = document.createElement('h2');
        h2.textContent = guide[i].name + ' ' + guide[i].lastname;
        card.appendChild(h2);

        let email = document.createElement('p');
        email.textContent = 'The email: ' + guide[i].email;
        card.appendChild(email);

        let experience = document.createElement('p');
        experience.textContent = "The experience earned " + guide[i].experience;
        card.appendChild(experience);

        let certificatelv = document.createElement('p');
        certificatelv.textContent = "The  earned " + guide[i].certificatelv;
        card.appendChild(experience);

        let bio = document.createElement('p');
        bio.textContent = "get to know them " + guide[i].bio;
        card.appendChild(bio);

        let image = document.createElement('img');
        image.setAttribute('src', "images/" + guide[i].imagepic);
        image.setAttribute('alt', guide[i].name + ' ' + guide[i].lastname + ' - ' + guild[i].order)
        card.appendChild(image);

        document.querySelector('div.cards').appendChild(card);
  }});