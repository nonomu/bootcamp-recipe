// Fill in the functions for your Renderer Class

class Renderer {
    _renderFood(food) {
        console.log(players)
        let source = $('#players-template').html()
        let template = Handlebars.compile(source)
        let newHTML = template({ food })
        $('.players-container').empty().append(newHTML)
    }
    render(food) {
       this._renderFood(food)
    }
}

