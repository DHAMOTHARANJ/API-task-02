async function datas(){
    try {
        const response = await fetch("https://hp-api.onrender.com/api/characters")
        const data = await response.json()
        data.forEach(ele =>{
            const createCountryObject = {
                ...ele,
                name : ele.name,
                brewery_type : ele.brewery_type,
                address_1 : ele.address_1,
                phone : ele.phone,
                website_url : ele.website_url
            }
             createCountry(createCountryObject)
        });
    } catch (error) {
        document.body.innerHTML += `<h1>Error occured</h1>` 
          
    }
}

function createCountry(ele){
    // harry potor image 
    // character name
    // character ancestry
    // character eye VideoColor
    // character house
    
    document.body.innerHTML += `
        <div class="content">
        <div class="card">
        <div class="pos1">
        <img class="png" src="${ele.image}"></img>
        </div>
        <div class="pos2">
            <div class="companyName"><h2 class="name">${ele.name}</h2></div> 
            <div class="details">
    <div class="icon"><span class="material-symbols-outlined">
    family_history
    </span>
    </div>
    <div class="values"><div class="address">${ele.ancestry}</div></div>
</div>
            <div class="details">
            <div class="icon"><span class="material-symbols-outlined">
            visibility
            </span>
            </div>
            <div class="values"><div class="address">${ele.eyeColour}</div></div>
        </div>
        <div class="details">
            <div class="icon"><span class="material-symbols-outlined">
            today
            </span>
            </div>
            <div class="values"><div class="website">${ele.dateOfBirth}</div></div>
        </div>
        <div class="details">
            <div class="icon"><span class="material-symbols-outlined">
            warehouse
            </span>
            </div>
            <div class="values"><div class="phone">${ele.house}</div></div>
        </div>
    
        </div>
    </div>
    </div>
    `
}
datas()