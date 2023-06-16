const nav =document.getElementById('nav');
const joke =document.getElementById('joke');
const toggle =document.getElementById('toggle')

getJokes();
toggle.addEventListener('click', () => nav.classList.toggle('active'))

toggle.addEventListener('click',getJokes);
async function getJokes() {

    const config = {
        headers: {
            "Accept": "application/json"
        }
    }
    
    const res = await fetch('https://icanhazdadjoke.com/', config);
    const data = await res.json();
    joke.innerText = data.joke;
    
}



// function getJokes() {

//     const config = {
//         headers: {
//             "Accept": "application/json"
//         }
//     }

//     fetch('https://www.oberlo.com/blog/motivational-quotes#:~:text=Motivational%20quote%20of%20the%20day%201%20%E2%80%9CYou%E2%80%99ve%20gotta,you%20can%20imagine%20is%20real.%E2%80%9D%E2%80%95Pablo%20Picasso%20More%20items', config)
//     .then(res => res.json())
//     .then(data => {
//         joke.innerText = data.joke;
//     });
// }