const showWhatch = () => {
    let date = new Date();
    
    let hour = formatHour(date.getHours());
    let minutes = formatHour(date.getMinutes());
    let seconds = formatHour(date.getSeconds());

    document.getElementById('hour').innerHTML = `${hour}:${minutes}:${seconds}`;

    const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

    const days = ['Domingo','Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];

    let dayWeek = days[date.getDay()];
    let day = date.getDate();
    let month = months[date.getMonth()];
    let year = date.getFullYear();
    

    document.getElementById('day-week').innerText = dayWeek;
    document.getElementById('day').innerHTML = day;
    document.getElementById('month').innerHTML = month;
    document.getElementById('year').innerHTML = year;

}

const formatHour = (hour) => {
    if(hour < 10){
        hour = '0'+hour;
    }
    return hour;
} 

setInterval(showWhatch, 1000);


const toggleButton = document.getElementById('toggle-mode');

toggleButton.addEventListener('click', () => {
    const body = document.body;

    if(body.classList.contains('light-mode')){
        body.classList.replace('light-mode', 'dark-mode');
        toggleButton.textContent = 'Light Mode';
    }else{
        body.classList.replace('dark-mode', 'light-mode');
        toggleButton.textContent = 'Dark Mode';
    }
})

document.body.classList.add('light-mode');