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
        //this event listener makes it to where when you mouse over the boxes, a number appears. many times
        div.addEventListener('mouseover', function () {
            div.innerText = div.id
            console.log('shit');
        })
        //this makes it appear only once.
        div.addEventListener('mouseout', function () {
            div.innerText = ''
        })
   //this is that changed the colors by the click
       div.addEventListener("click", function () {
        let colors = ['red', 'blue', 'green', 'yellow', 'purple', 'grey', 'pink', 'black']
        div.style.backgroundColor = colors[Math.floor((Math.random() * colors.length))];
    })
   div.addEventListener("dblclick", function (){
       if (div.id % 2 === 0){
           if (document.contains(div.nextSibling)){
               div.nextSibling.remove()
            
           }
       else {
        alert("No Squares");
       }
   }
   else {
       if (document.contains(div.previousSibling)){
           div.previousSibling.remove()
       }
       else{
           alert('No Squares')
       }
   }
}
   )
   
   
   
    })


//If the `id` of the square is even:
//* The square after the clicked square should be removed from the page
//* If there isn't a square after the clicked square, display an alert indicating so

 
});
