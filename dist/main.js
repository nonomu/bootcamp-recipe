const render = new Renderer()


const fetchFoodData = function () {
    let input = $("#ingredientInput").val()
    $.get(`/recipes/${input}`, function (FoodData) {
        render.render(FoodData)
    })
    
}
$(".food-container").on("click",".food-pic",function () {
    console.log($(this)
    .closest(".food")
    .find(".ingredients")
    .find(".ingredient")[0]
    .innerHTML)
})
$(".food-container").on("click",".food-ingredients",function () {
      $(this)
     .closest(".food")
     .find(".ingredients")
     .find(".ingredient")
     .css("display","block");
      
 })
