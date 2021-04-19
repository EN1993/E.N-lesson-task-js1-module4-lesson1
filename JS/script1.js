const url = "https://t9jt3myad3.execute-api.eu-west-2.amazonaws.com/api/nbateams";

const resultContainer = document.querySelector (".results");

async function fetchTeams() {
  try {
    const response = await fetch(url);

    const json = await response.json();
    
    console.log(json);
  
    const teams = json.data;
  
    resultContainer.innerHTML ="";
  
    for (let i = 0; i < teams.length; i++) {
      if (i === 15) {
        break;
      }
      
      const teamName = teams[i].full_name;
      const city = teams[i].city;
     
      if (teamName.startsWith("c") || teamName.startsWith("C") ) {
        continue;
      }
        
      resultContainer.innerHTML += `<div class="result">
                                      <h4>${teamName}</h4>
                                      <p>${city}}</p>
                                    </div>`
      
                                             
  
    }
  } catch (error) {
   
    console.log(error);
    
    resultContainer.innerHTML = message ("error", error);
  }
}

fetchTeams()

