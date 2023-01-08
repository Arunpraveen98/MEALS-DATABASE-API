//adding EventListener:-
let go_button = document.getElementById("go-btn");
go_button.addEventListener("click", mealDatabase);

//async function to fetch Meal Database api:-
async function mealDatabase() {
  try {
    //To get Search input value from Users.
    let input_value = document.getElementById("meal-db").value;

    //To empty the previous data when next data include.
    let div_row = document.getElementById("row-content");
    div_row.innerHTML = "";
    
    //To get the Meal Database data.
    var mealData = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?f=${input_value}`
    );
    var JsonFormat = await mealData.json();
   
    //Dynamically get the Meals data.
    for (var i = 0; i < 10; i++) {
      let mealName = JsonFormat.meals[i].strMeal;

      let mealCategory = JsonFormat.meals[i].strCategory;

      let mealInstruction = JsonFormat.meals[i].strInstructions;

      let mealImage = JsonFormat.meals[i].strMealThumb;

      let mealArea = JsonFormat.meals[i].strArea;

      let mealTags = JsonFormat.meals[i].strTags;

      let mealYoutube = JsonFormat.meals[i].strYoutube;

      let mealIngredient_1 = JsonFormat.meals[i].strIngredient1;
      let ingri_quantity_1 = JsonFormat.meals[i].strMeasure1;

      let mealIngredient_2 = JsonFormat.meals[i].strIngredient2;
      let ingri_quantity_2 = JsonFormat.meals[i].strMeasure2;

      let mealIngredient_3 = JsonFormat.meals[i].strIngredient3;
      let ingri_quantity_3 = JsonFormat.meals[i].strMeasure3;

      let mealIngredient_4 = JsonFormat.meals[i].strIngredient4;
      let ingri_quantity_4 = JsonFormat.meals[i].strMeasure4;

      let mealIngredient_5 = JsonFormat.meals[i].strIngredient5;
      let ingri_quantity_5 = JsonFormat.meals[i].strMeasure5;

      let mealIngredient_6 = JsonFormat.meals[i].strIngredient6;
      let ingri_quantity_6 = JsonFormat.meals[i].strMeasure6;

      let mealIngredient_7 = JsonFormat.meals[i].strIngredient7;
      let ingri_quantity_7 = JsonFormat.meals[i].strMeasure7;

      let mealIngredient_8 = JsonFormat.meals[i].strIngredient8;
      let ingri_quantity_8 = JsonFormat.meals[i].strMeasure8;

      let mealIngredient_9 = JsonFormat.meals[i].strIngredient9;
      let ingri_quantity_9 = JsonFormat.meals[i].strMeasure9;

       //appending the meals data in HTML document.
      let div_row = document.getElementById("row-content");

      div_row.innerHTML += `
      <div class="col-12 details-card">
      <div class="card left-card" style="width: 18rem">
        <div class="card-body">
          <div class="mealname">MEAL - DETAILS:</div>
          <ul class="list-group">
            <span class="badge badge-dark"
              >CATEGORY:<span class="badge badge-info"
                >${mealCategory}</span
              ></span
            >
            <span class="badge badge-dark"
              >AREA:<span class="badge badge-info">${mealArea}</span></span
            >
            <span class="badge badge-dark"
              >TAGS:<span class="badge badge-info">${mealTags}</span></span
            >
          </ul>

          <div>
            <h5 class="ingridient">INGREDIENTS:</h5>
            <ol class="list-group">
              <li>${mealIngredient_1}-${ingri_quantity_1}</li>
              <li>${mealIngredient_2}-${ingri_quantity_2}</li>
              <li>${mealIngredient_3}-${ingri_quantity_3}</li>
              <li>${mealIngredient_4}-${ingri_quantity_4}</li>
              <li>${mealIngredient_5}-${ingri_quantity_5}</li>
              <li>${mealIngredient_6}-${ingri_quantity_6}</li>
              <li>${mealIngredient_7}-${ingri_quantity_7}</li>
              <li>${mealIngredient_8}-${ingri_quantity_8}</li>
              <li>${mealIngredient_9}-${ingri_quantity_9}</li>
            </ol>
          </div>
        </div>
      </div>

      <div class="img-card">
        <div class="col-lg-12 text-center">
          <h3 class="animate-charcter" id="title">${mealName}</h3>
        </div>
        <div class="card right-card">
          <img src="${mealImage}" class="card-img-top" alt="Meal-Type" />
          <div class="youtube">
            <img src="you.png" class="youtube-logo" alt="Meal-Type" />
            <a href="${mealYoutube}"
              ><br />
              <button class="glow-button" type="button">VIDEO-LINK</button>
            </a>
          </div>
          <span class="description">DESCRIPTION:</span>
          <p class="card-text">${mealInstruction}</p>
        </div>
      </div>
    </div>
    `;
    }
  } 
  //catch-block:-
  catch (error) {
    console.log(error);
  }
}

//----------------------------------------------------------------
