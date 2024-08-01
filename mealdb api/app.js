document.getElementById("btn").addEventListener('click',()=>{


let user=document.getElementById("userInput").value ;
if (!user || user.length === 0) {
    alert("No elements found");
} else{


    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${user}`)
    .then(res => res.json())
    .then(data => {
        display_card(data.meals);
    })
    .catch(err => {
        alert(err);
    });


function display_card(data) {
    const card = document.getElementById("menu");
    card.innerHTML = '';

   
        data.forEach(e => {
            const div = document.createElement("div");
            div.classList.add("Food-card");
            document.getElementsByClassName("Food-card").id = "food-cid";
            div.innerHTML = `
                <div class="Food-card-img">
                    <img src="${e.strMealThumb}" alt="" class="Food-card-image">
                </div>
                <div class="Food-card-name ">
                    <h5 onclick='Details(${JSON.stringify(e)})' class="name-click">${e.strMeal.slice(0,15) }</h5>  
                    
                </div>
                
            `
           
            ;
            card.appendChild(div);
        })}}});






        function Details(element) {
            const card = document.getElementsByClassName("modal-body")[0];
            card.innerHTML = '';
        
            const div = document.createElement("div");
            div.classList.add("Food-cards-recipy");
        
    
        
            div.innerHTML = `
            <div class="Food-card-img-recipy ">
                            <img src="${element.strMealThumb}" alt="" class="Food-card-image">
                        </div>
                        <div class="Food-card-informations">
                            <h3 class="text-center"> Food Name : ${element.strMeal} </h3>
                            <h3 class="text-center"> Area : ${element.strArea} </h3>
                            <h3 class="text-center"> Category : ${element.strCategory} </h3>
                            <h2 class="text-center">Detailes</h2>
                            <p class="details"> ${element.strInstructions}</p>
                        </div>
                
            `;
            card.appendChild(div);
        }