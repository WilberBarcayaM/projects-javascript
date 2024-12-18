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