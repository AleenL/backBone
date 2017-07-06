import _ from "lodash"
import $ from 'jquery'

function component() {
    var element = $('<div></div>')

    element.html(_.join(['hi', 'world', 'jesses'], ' '))

    return element.get(0)
}

document.body.appendChild(component())
console.log(1)