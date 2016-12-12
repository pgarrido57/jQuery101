console.log ("Hello Friends")

//$( "button.continue" ).html( "Next Step..." ) is the same as:
//document.querySelector('button.continue').innerHTML = "Next Step..."

$('h1').html('Hello Friends')
//document.querySelector('h1').innerHTML = "Hello Friends"
//document.querySelectorAll('h1').innerHTML = "Hello Friends" // wont work because array-like NodeList


//document ready function
$(document).ready(function () {})

// in vanilla javascript
document.addEventListener('DomContentLoaded', function () {})

// append
var foods = ['apple', 'banana', 'carrot', 'danish', 'egg']
for (var i=0; i<foods.length; i++) {
    $('ul').append(`<li>${foods[i]}</li>`)
}

// Goal: <div class="foods><ul>...</ul></div>"

// before and after
// $('ul').before('<div class="foods"')
// $('ul').after('</div')

//wrap
$('ul').wrap('<div class=foods>')

// assign a value
// $('input:first').val('Hello Friends')
// $('input:eq(0)').val('Hello Friends')
$('input').first().val('Hello Friends')

$('input').last().click(function () {
    console.log($('input').first().val())
})


$.getJSON('https://randomuser.me/api/?nat=us', function (data) {
    console.log(data)
})


$.getJSON('https://randomuser.me/api/?nat=us', function (data) {
  var firstName = data.results[0].name.first
  var lastName = data.results[0].name.last

  $('h1').html(`Hello
    ${firstName[0].toUpperCase()}${firstName.slice(1)}
    ${lastName[0].toUpperCase()}${lastName.slice(1)}
  `)
})

// or with a utility function

// $.getJSON('https://randomuser.me/api/?nat=us', function (data) {
//   $('h1').html(`Hello ${capitalize(firstName)} ${capitalize(lastName)}`)
// })

// function capitalize (str) {
//   return `${str[0].toUpperCase()}${str.slice(1).toLowerCase()}`
// }
