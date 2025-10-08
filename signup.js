// let display=document.querySelector("div")

let form = document.querySelector("form")

form.addEventListener("submit", (e) => {

    // e.preventDefault()

    let data = document.getElementById("un").value
    let data1 = document.getElementById("pw").value
    let data2 = document.getElementById("mn").value

    console.log(data);
    console.log(data1);
    console.log(data2);
    
    open("./login.html")

})

let btn=document.getElementById("btn")

btn.addEventListener ("submit",function(e){
    e.preventDefault()
    alert("Your account created successfully....")
}
)

localStorage.setItem("un","data")
localStorage.setItem("pw","data2")
localStorage.setItem("mn","data3")

console.log(localStorage.getItem("actorname"));
console.log(localStorage.getItem("un"));
console.log(localStorage.getItem("pw"));
console.log(localStorage.getItem("mn"));





