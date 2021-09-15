const progress = document.getElementById('progress')
const prev= document.getElementById('prev')
const netx= document.getElementById('next')
const circles= document.querySelectorAll('.circle')

let counterSteps =1;

netx.addEventListener('click',() =>{
    counterSteps++ 
    if(counterSteps>circles.length){
        counterSteps= circles.length
    }
    update();
})

prev.addEventListener('click',()=>{
    counterSteps-- 
    if(counterSteps<1){
        counterSteps=1
    }
    console.log(counterSteps)
    update()
})
function update(){
    circles.forEach((circle,id)=>{
        if(id < counterSteps){
            circle.classList.add('active')  
        }else{
            circle.classList.remove('active')
        }
    })
    
    const actives= document.querySelectorAll('.circle.active');


    progress.style.width=(actives.length-1) /(circles.length-1) * 100 +'%'
    

    if(counterSteps === 1){
       prev.disabled = true
    }else if(counterSteps=== circles.length){
        netx.disabled=true
    }else{
        prev.disabled=false
        netx.disabled=false
}    
}




// if(counterSteps == 1){
//     prev.disabled = true
// }else if(counterSteps== circle.length){
//     netx.disabled=true
// }else{
//     prev.disabled=false
//     netx.disabled=false
// }