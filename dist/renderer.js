class Renderer {
    _renderFood(data) {
        console.log(data)
        let source = $('#food-template').html()
        let template = Handlebars.compile(source)
        let newHTML = template({data})
        $('.food-container').append(newHTML)
    }
    render(data) {
       this._renderFood(data)
    }
}

