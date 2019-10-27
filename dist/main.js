const render = new Renderer()


const fetchFoodData = function () {
    let input = $("#ingredientInput").val()
    $.get(`/recipes/${input}`, function (FoodData) {
        console.log(FoodData)
    })
    
}
