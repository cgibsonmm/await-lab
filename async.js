// Async/Await w/ Try/Catch
// API docs https://restcountries.eu/#api-endpoints-full-name

// Step 1: Fetch Country data

// function fetchData(country) {
//   // Get country data
//   const url = `https://restcountries.eu/rest/v2/name/Spain?fullText=true`
//   // Write the rest of the code here.
//   axios.get(url)
//     .then((res) => {
//       console.log(res.data)
//     })
// }
// fetchData()
// Step 2: Rewrite using Try/Catch & Async/Await

async function fetchData(country) {
  const url = `https://restcountries.eu/rest/v2/name/${country}?fullText=true`
  // Write the rest of the code here.
  try {
    const response = await axios.get(url)
    console.log(response.data)
    const data = response.data[0]

    showCountryData(data)

  } catch(error) {
    console.log(`Error: ${error}`)
  }
}
// fetchData()
// Step 3: Create dynamic HTML

function showCountryData(dataObj) {
  // ???
  let countryInfo = `
    <img id="flag" src="${dataObj.flag}" alt="flag" style="width: 400px; height: auto; border: 2px black solid">
    <h2 id="country-name">${dataObj.name}</h2>
    <h4 id="capital">${dataObj.capital}</h4>
  `
  // Appending data here 
  document.querySelector('#country-data').insertAdjacentHTML('beforeend', countryInfo)
}

// Step 4: Append Country Data

// function showCountryData(data) {
//   // Add more code from Step 3
// }

// Step 5: Dynamically search country using HTML form with eventHandler
const submit = document.querySelector('#country-form')
// Write eventHandler here
submit.addEventListener('submit', (e) => {
  e.preventDefault()
  let inputValue = document.querySelector('#country-search').value
  console.log(inputValue)
  removeCountry()
  fetchData(inputValue)
  document.querySelector('#country-search').value = '' 
})

// Step 6: Remove previous country data

function removeCountry() {
  // write code here
  // Make sure to call this function???
  const appendElement = document.querySelector('#country-data')
  while (appendElement.lastChild) {
    appendElement.removeChild(appendElement.lastChild)
  }
}
