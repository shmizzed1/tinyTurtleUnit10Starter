TinyTurtle.apply(window, [undefined, 400, 400]);

function square(x){
forward(x);
right(90);
forward(x);
right(90);
forward(x);
right(90);
forward(x);
right(90);
forward(x);
}

function triangle(x){
    right(30);
    forward(x);
    right(120);
    forward(x);
    right(120);
    forward(x);

}
// Type your function call below

function house(x){
square(x);
triangle(x);
}

function rectanngle(len, wid){
forward(len);
right(90);
forward(wid);
right(90);
forward(len);
right(90);
forward(wid);
right(90);
forward(len);
}

house(100);

