const btnEl = document.getElementById("btn");
const jokeEl = document.getElementById("joke");
const apiKey = "sTXz91qG087rtMoMz7gJcg==Jag7ZNd2ojAqoOEd";
const options = {
  method: "GET",
  headers: {
    "X-Api-key": apiKey,
  },
};
const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";
async function getJoke() {
  try {
    jokeEl.innerText = "Updating...";
    btnEl.disabled = true;
    btnEl.innerText = "Loading...";
    const response = await fetch(apiURL, options);
    const data = await response.json();
    btnEl.disabled = false;
    btnEl.innerText = "Tell me a joke";
    jokeEl.innerText = data[0].joke;
  } catch (error) {
    jokeEl.innerText = "An Error happened ,try again later :)";
    btnEl.innerText = "Tell me a joke";
  }
}
btnEl.addEventListener("click", getJoke);
