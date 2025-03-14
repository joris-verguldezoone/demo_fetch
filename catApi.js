const apiKey = "live_ag8OVfzYdJ9J3li9WSs1Hffy9JNCi3UVkP0I918EXqpnE8l1kMRj06WeVKHK81Oy";

const getCatsApiButton = document.getElementById("get-cats-api")

const getCatsFileButton = document.getElementById("get-cats-file")

const catsContainer = document.getElementById("cats-container")

getCatsApiButton.addEventListener("click", async ()=>{
   
    const result = await getCatsFromApi()

    showCats(result)

})

getCatsFileButton.addEventListener("click", async ()=>{
   
    const result = await getCatsFromFile()

    showCats(result)

})

async function getCatsFromApi() {
    const query = await fetch('https://api.thecatapi.com/v1/images/search?limit=10', { // 10 random cats
        headers: {
            'x-api-key': apiKey // pas important 
        }
    });
    
    const data = await query.json();

    console.log(data,'cats recieved from api');
    
    return data
}

async function getCatsFromFile() {
    const query = await fetch('./cat-example.json', { // 10 random cats
    });

    const data = await query.json();

    console.log(data,'cats recieved from file');
    
    return data
}





function showCats(cats){

    cats.forEach(cat => {
        const catDiv = document.createElement("div");
        catDiv.classList.add("cat-card");
        catDiv.classList.add("p-5");
        
        const img = document.createElement("img");
        img.src = cat.url;
        img.style.width = "200px";
        img.style.borderRadius = "8px";
        
        const catInfo = document.createElement("p");
        catInfo.textContent = `id: ${cat.id}`;
        
        catDiv.appendChild(img);
        catDiv.appendChild(catInfo);

        catsContainer.appendChild(catDiv);
    });
    
}