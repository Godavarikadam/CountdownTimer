const endDate= "1 January 2025 Sunday 12:00 PM" ;

document.getElementById("date").innerText=endDate

const inputs=document.querySelectorAll("input")

function clock(){
    const last=new Date(endDate)
    const present=new Date()
    console.log(last,present)
    const diff=(last-present)
    const diff1=diff/1000
    console.log(diff1)
    // console.log (Math.floor(diff1/3600/24))

    inputs[0].value=Math.floor(diff1/3600/24)        // Days calculation

    // console.log (Math.floor(diff1/3600)%24)
    inputs[1].value=Math.floor((diff1/3600)%24)      // Hours calculation
    inputs[2].value=Math.floor((diff1/60)%60)        // minutes calculation
    inputs[3].value=Math.floor(diff1)%60             // seconds calculation
}

clock();

setInterval(()=>{

    clock()

},1000)