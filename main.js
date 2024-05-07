const day = document.getElementById('day')
const month = document.getElementById('month')
const year = document.getElementById('year')
const form = document.getElementById('form')
const arrow = document.getElementById('arrow')



arrow.addEventListener('click',(e)=>{
    e.preventDefault()
    

const today = new Date()
const thisYear = today.getFullYear()
const thisMonth = today.getMonth() + 1
const thisDay = today.getDate()



const parseDay = Number.parseFloat(day.value)
const parseMonth = Number.parseFloat(month.value)
const parseYear = Number.parseFloat(year.value)

const  displayYear = document.getElementById('yearTag')
const displayMonth = document.getElementById('monthTag')
const displayDay = document.getElementById('dayTag')


let  cYear = thisYear - parseYear
displayYear.innerHTML = cYear

let cMonth
   
if(!parseMonth){
    return displayMonth.innerHTML='00'
}
else if (parseMonth > thisMonth){
    cMonth = 12 - (parseMonth - thisMonth)
   return displayMonth.innerHTML = cMonth
}else{
    cMonth = thisMonth - parseMonth
    return displayMonth.innerHTML = cMonth
    console.log(parseDay) 
}

let cDay

if (parseDay > thisDay){
      cDay = parseDay - thisDay
    return displayDay.innerHTML = 13
 }else{
   cDay = thisDay - parseDay
    return displayDay.innerHTML = 13
    console.log(cDay)
}
console.log(parseMonth)
console.log('i am a winner')

})        