function updateClock() {
    
    const now = dayjs();

    const formattedTime = now.format('hh');
    const formattedmin = now.format('mm');
    const formattedsec = now.format('ss A');

    const formattedDate = now.format('dddd, MMMM D, YYYY');
    document.querySelector('.hours').innerHTML =`${formattedTime}:${formattedmin}`;
    document.querySelector('.secs').innerHTML =`${formattedsec}`;
    document.querySelector('.date').innerHTML =`${formattedDate}`;
    
    
}

setInterval(updateClock, 1000);
updateClock(); // Initialize the clock immediately