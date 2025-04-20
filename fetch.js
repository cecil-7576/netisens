const button = document.getElementById('loadjokebtn');


const loadJoke = async ()=>{

    try {
        const chuckNorrisFetch = await fetch('https://api.chucknorris.io/jokes/random', {
            headers: {
                Accept: 'application/json'
            }
        });
        const jokeData = await chuckNorrisFetch.json();
        document.getElementById('loadingJokes').innerHTML = jokeData.value;

    } catch(error){
        console.log(error)
    }
}

button.addEventListener('click', loadJoke)