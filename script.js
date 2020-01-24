// document.addEventListener("DOMContentLoaded", function(){
//     let button = document.createElement('button');
//     let btnText = document.createTextNode('Add Square');
//     button.appendChild(btnText);
//     document.body.appendChild(button);
//     // 
//     // div.addEventListener('click', function(){
//         var square = document.createElement('div');
//                     square.className = 'squared';
//                     document.body.appendChild(square);
//                     document.addEventListener("click", function(d){
//                         d.target.style.color. black

//                     

//     })


//I have made a button that clicks, but the clicks do nothing so far.
document.addEventListener("DOMContentLoaded", function () {
    let button = document.createElement('button');
    let btnText = document.createTextNode('Add Square');
    button.appendChild(btnText);
    document.body.appendChild(button);
    //create container for the div otherwise it will put boxes in dumb places
    let container = document.createElement('div');
    container.classList.add('div');
    document.body.appendChild(container);
    //here i created an event listener for 'click' so when i click the button, a div appears in the console.
    button.addEventListener('click', function () {
        let div = document.createElement('div');
        div.classList.add('boxes');
        container.appendChild(div);
        // here I gave my div, "boxes" an ID in order to count the times "boxes" is clicked in the console.
        //querySelectorAll selects all the boxes. 
        let boxes = document.querySelectorAll('.boxes');
        let boxesNumber = 0
        boxes.forEach(function (box) {
            div.id = (boxesNumber);
            boxesNumber++
        })
        //this event listener makes it to where when you mouse over the boxes, a number appears. 
        div.addEventListener('mouseover', function () {
            let id = document.createTextNode(div.id);
            div.appendChild(id);
            console.log('shit');
        })
    });
    //When a square is clicked, it should change to a random background color (You can randomly choose from a set of colors you predefine if you wish)
    // let colors = ['red', 'blue', 'green', 'yellow', 'purple', 'grey', 'pink', 'black']
    // headers.forEach(function (h) {
    //     h.addEventListener('dblclick', function () {
    //         let randomNum = Math.floor((Math.random() * 7) + 1);
    //         let randomColor = colors[randomNum];
    //         h.style.color = randomColor
    //     });



    // });
