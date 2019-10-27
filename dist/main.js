const render = new Renderer()


const fetchFoodData = function () {
    let input = $("#ingredientInput").val()
    $.get(`/recipes/${input}`, function (FoodData) {
        render.render(FoodData)
    })
    
}
