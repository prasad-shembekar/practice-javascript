(function chai(){
    // it is named IIFE
    console.log(`DB connected...`); 
})();

// ()(); first is function defination and second is execution

((name)=>{
    console.log(`DB connected ${name}`);
})('Prasad');


function hii(){
    console.log(this);
}
hii();

