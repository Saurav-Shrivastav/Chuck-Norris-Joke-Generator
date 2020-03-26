document.querySelector('.btn').addEventListener('click', loadJoke);

function loadJoke(e){
  const val = document.querySelector('.Number').value;

  const xhr = new XMLHttpRequest;

  xhr.open('GET', `http://api.icndb.com/jokes/random/${val}`, true)

  xhr.onload = function(){
    if(this.status === 200){
    let response = JSON.parse(xhr.responseText);

    let output = '';

    if(response.type === 'success'){
      response.value.forEach(function(joke){
        output += `<li>${joke.joke}</li>`
      });
    }
    else{
      output += '<li>Something went Wrong</li>'
    }

    document.querySelector('.output').innerHTML = output;

    }
  }

  xhr.send();

  e.preventDefault();
}
