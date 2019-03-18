const h1 = $('h1');

$('body').css('background-color', 'gold');

h1.text('Hello World');

h1.html('<div>Test</div>');

h1.append('<p>Im append text</p>');

$('img').attr({src: 'http://i.imgur.com/nWGCwiE.gif', alt: 'Gif'});

const getAttrValue = $('img').attr('src');

console.log(getAttrValue);



$('.add-button').on('click', function() {
    $('body').append('<button class="show-alert">click me</button>');
})


// Event Propagation

$('body').on('click', '.show-alert', function() {
    alert('Hey');
})
