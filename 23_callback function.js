function first(callback){
    console.log("hello world")
    callback()
    // setTimeout(function() {
    //     console.log("hello world -- wait for 2 seconds")
    // }, 2000);
}
function second(){
    console.log("I am callback")
}

first(second)