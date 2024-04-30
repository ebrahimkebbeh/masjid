

/*function update(){
let d = new Date()
document.getElementById('demo').innerHTML= d;
}
setInterval(update,1000);
update()*/
const clockElement = document.getElementById("clock")

function updateClock(){

const now = new Date();

const hours = now.getHours().toString().padStart(2, '0');
const minutes = now.getMinutes().toString().padStart(2, '0');
const seconds = now.getSeconds().toString().padStart(2, '0');

const formattedTime = `${hours}:${minutes}:${seconds}`;

clockElement.textContent = formattedTime;;
}

setInterval(updateClock,1000);

updateClock

const date = document.getElementById("date");
            const day = document.getElementById("day");
            const month = document.getElementById("month");
            const year = document.getElementById("year");
            const today = new Date();

            const weekDays = ['Sunday', 'Monday', 'Tuesday', 'wednesday', 'Thursday', 'Friday', 'Saturday'];
            const allMonth = ['January', 'February', 'March', 'April','may', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
            

            date.innerHTML = (today.getDate()<10?'0':'') + today.getDate();
            day.innerHTML = weekDays[today.getDay()];
            month.innerHTML = allMonth[today.getMonth()];
            year.innerHTML = today.getFullYear();





