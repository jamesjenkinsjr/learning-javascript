//let's create a circle object
const circle = {
    radius: 10,
    color: 'red',
    x: 10,
    y: 10,
    changeColor: function(newColor) {
        this.color = newColor;
    },
    grow: function() {
        this.radius += 1;
    },
    shrink: function() {
        this.radius -= 1;
    },
    move: function(dx, dy) {
        this.x += dx;
        this.y += dy;

    }
};

//The following function is to test the 'this' keyword

function printThis() {
    console.log(this);
}
printThis = printThis.bind(circle);
printThis();
// console.log(circle);
// circle.changeColor('chartreuse');
// console.log(circle);
// circle.shrink();
// console.log(circle);
// circle.grow();
// console.log(circle);
// circle.move(10, 10);
// console.log(circle);
// console.log(this);
