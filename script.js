   
   document.getElementById('toggle').addEventListener('click', function() {
    document.getElementsByTagName('body')[0].classList.toggle('dark-theme');
document.getElementsByClassName('box')[0].classList.toggle('dark-theme');
   });

function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let ampm = hours >= 12 ? 'PM' : 'AM';
      hours = hours % 12;
    hours = hours ? hours : 12;
    hours=hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    const timeString = `${hours} : ${minutes} : ${seconds} ${ampm}`;
    document.getElementById('clock').innerText = timeString;
}
function updateDate() {
        const now = new Date();
   const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        const dayName = days[now.getDay()];
        const month= months[now.getMonth()];
        const day = now.getDate();
        const year = now.getFullYear();

     const dateString = `${dayName} : ${month} ${day} : ${year}`;
        document.getElementById('date').innerText = dateString;
        
    }
     setInterval(updateDate, 60000);
      updateDate();
     
      setInterval(updateClock, 1000);
    updateClock();
   
