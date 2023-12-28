let click = document.getElementById("click")
click.onclick = () => {
    let x = window.prompt("what is the X value");
    let y = window.prompt("What is the value of Y");
    if(x == 50 && y == 30){
        click.innerHTML = "Yes, right answer"
        if(click.innerHTML = "Yes, right answer"){
            click.onclick = null
        }
    }
}