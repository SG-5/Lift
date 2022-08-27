const buttonLift = [...document.getElementsByTagName('td')]
const lift = document.querySelector('.lift')
const doorLeft = document.querySelector('.door-left')
const doorRight = document.querySelector('.door-right')

function counter(count) {
  
  let id = setInterval(timer(count), 10)
  function timer() {
    let height = window.getComputedStyle(lift).marginTop
    let time = height.slice(0, height.indexOf('px'))
   return () => {
    
     if (time < count) {
      time++
     }
     else if (time > count) {
       time--
     }
     
     else {
       
        clearInterval(id)
        doorLeft.classList.add('door-left-open')
        doorRight.classList.add('door-right-open')
     }
     lift.style.marginTop = `${time}px` 
   
    }
   
  }

}

let arr=[ 0,80, 160, 240, 320, 400, 480, 560, 640, 720, 800]

buttonLift.forEach((item,index) => {
  item.addEventListener('click', (e) => {
    counter(arr[index])
    doorLeft.classList.remove('door-left-open')
    doorRight.classList.remove('door-right-open')
  })

} )





