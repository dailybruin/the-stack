let scrolly = document.querySelector("#stick");
let article = scrolly.querySelector("article");
let step = article.querySelectorAll(".step");
let figure = article.querySelectorAll(".figure");
// initialize the scrollama
let scroller = scrollama();

// scrollama event handlers
function handleStepEnter(response) {
    // response = { element, direction, index }
    console.log(response);
    // add to color to current step
    response.element.classList.add("is-active");
    console.log(response.index);
    console.log(response.direction);
    //console.log(data2);
    if (response.index > 0){
        if (response.index !== 4){
            if (response.direction === 'down'){
                if (response.index === 2){
                    removeData();
                }
                if (response.index < 5){
                    addData(response.index - 1);
                    console.log('less than 5');
            }
                else{
                    addData(response.index - 2)
                }
            }
    }   
}}
    //console.log(response.element.attributes.data-step.value);

function handleStepExit(response) {
    // response = { element, direction, index }
    console.log(response);
    // remove color from current step
    response.element.classList.remove("is-active");
    //removeData();
    if (response.direction === 'up'){
        removeData();
    }
}

// function setupStickyfill(){
//     d3.selectAll(".sticky").each(function(){
//         setupStickyfill.add(this);
//     })
// }

// let wrap = $("figure");

// wrap.on("scroll", function(e) {
    
//   if (this.scrollTop > 147) {
//     wrap.addClass("fix-chart");
//   } else {
//     wrap.removeClass("fix-chart");
//   }
  
// });

function init() {
    //setupStickyfill();
    // set random padding for different step heights (not required)
    step.forEach(function(step) {
        let v = 100 + Math.floor((Math.random() * window.innerHeight) / 4);
        step.style.padding = v + "px 0px";
    });

    // 1. setup the scroller with the bare-bones options
    // 		this will also initialize trigger observations
    // 2. bind scrollama event handlers (this can be chained like below)
    scroller
        .setup({
        step: "#stick article .step",
        debug: true,
        offset: 0.5
        })
        .onStepEnter(handleStepEnter)
        .onStepExit(handleStepExit);

    // 3. setup resize event
    window.addEventListener("resize", scroller.resize);
}

// kick things off
init();