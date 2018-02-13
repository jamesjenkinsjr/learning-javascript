//let's create a circle object
const circle = {
    radius: 10,
    color: 'red',
    x: 10,
    y: 10,
    changeColor: function(newColor) {
        circle.color = newColor;
    },
    grow: function() {
        circle.radius += 1;
    },
    shrink: function() {
        circle.radius -= 1;
    },
};

console.log(circle);
circle.changeColor('chartreuse');
console.log(circle);
circle.shrink();
console.log(circle);
circle.grow();
console.log(circle);