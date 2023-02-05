const progressLine = document.querySelector('.progress-line .done')
const progressCount = document.querySelector('.progress-count')

const timeCount = document.querySelector('.time-count')

// ***********************************************************************************
// Progress
function setProgress(params){
    progressCount.innerHTML = `${params} %`
    progressLine.style.width = `${params}%`
}
// ///////////////////////////////////////
// ///////////////////////////////////////
// Менять процесс загрузки тут (меняется и число и сама полоса загрузки в %).  
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// !!!!!!!!!  ПОСЛЕ ИЗМЕНЕНИЙ НЕ ЗАБУДЬТЕ ОБНОВИТЬ СТРАНИЦУ  !!!!!!!!!
setProgress('73.68')
// ///////////////////////////////////////
// ///////////////////////////////////////
// ***********************************************************************************



// ***********************************************************************************
// Time
function setTime(days, hours, minuts, seconds) {
    const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

    // ///////////////////////////////////////
    // ///////////////////////////////////////
    // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    // !!!!!!!!!  ПОСЛЕ ИЗМЕНЕНИЙ НЕ ЗАБУДЬТЕ ОБНОВИТЬ СТРАНИЦУ  !!!!!!!!!
    // Дата с которой пойдет отсчет. В формате мм/дд/гг.  
    let dateStart = "12/13/22"
    // ///////////////////////////////////////
    // ///////////////////////////////////////

    let allDate = new Date(new Date(dateStart).getTime() + ((day * days) + (hour * hours) + (minute * minuts) + (second * seconds)))
  
    const countDown = new Date(allDate).getTime(),
    x = setInterval(function() {    

      const now = new Date().getTime(),
            distance = countDown - now;

          document.getElementById("days").innerText = (Math.floor(distance / (day)) > 9 ? Math.floor(distance / (day)) : `0${Math.floor(distance / (day))}`),
          document.getElementById("hours").innerText = (Math.floor((distance % (day)) / (hour)) > 9 ? Math.floor((distance % (day)) / (hour)) : `0${Math.floor((distance % (day)) / (hour))}`),
          document.getElementById("minutes").innerText = (Math.floor((distance % (hour)) / (minute)) > 9 ? Math.floor((distance % (hour)) / (minute)) : `0${Math.floor((distance % (hour)) / (minute))}`),
          document.getElementById("seconds").innerText = (Math.floor((distance % (minute)) / second) > 9 ? Math.floor((distance % (minute)) / second) : `0${Math.floor((distance % (minute)) / second)}`);

      if (distance < 0) {
        clearInterval(x);
      }
    }, 0)
}

// ///////////////////////////////////////
// ///////////////////////////////////////
// 1. Задать сколько осталось дней, часов, минут, 
//    секунд от даты с которой начнется отсчет(её указать выше).
// 2. То что написано ниже: 2, 50, 0, 0 - не эквивалентно 2 дням и 50 минутам, так как время
//    не стоит, но при этом время меняется именно в таком порядке: дни/часы/минуты/секунды, 
//    так что числа меняйте и подгоняйте под то время, которое вам нужно.
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// !!!!!!!!!  ПОСЛЕ ИЗМЕНЕНИЙ НЕ ЗАБУДЬТЕ ОБНОВИТЬ СТРАНИЦУ  !!!!!!!!!

setTime(2, 50, 0, 0) // дни/часы/минуты/секунды
// ///////////////////////////////////////
// ///////////////////////////////////////
// ***********************************************************************************