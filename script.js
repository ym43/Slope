function slope(){
    let y2 = Number(window.prompt("Enter the value of Y2"))
    y2 = document.getElementById("inputy").innerHTML = y2
        
    let y1 = Number(window.prompt("Enter the value of Y1"))
    y1 = document.getElementById("inputx").innerHTML = y1
        
    let x2 = Number(window.prompt("Enter the value of X2"))
    x2 = document.getElementById("inputb").innerHTML = x2
        
    let x1 = Number(window.prompt("Enter the value of X1"))
    x1 = document.getElementById("inputa").innerHTML = x1
    let d = document.getElementById("slope1").innerHTML = `The slope is: ${Math.floor((y2 - y1) / (x2 - x1))}`
}