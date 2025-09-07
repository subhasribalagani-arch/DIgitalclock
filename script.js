 // Add the toggle element go get the dark and bright mode of the webpage
   document.getElementById('toggle').addEventListener('click', function() {
    document.getElementsByTagName('body')[0].classList.toggle('dark-theme');
document.getElementsByClassName('box')[0].classList.toggle('dark-theme');
   });

function updateClock() {
   //Get the current time
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let ampm = hours >= 12 ? 'PM' : 'AM';
   
   //To Convert 12-hours format
      hours = hours % 12;
    hours = hours ? hours : 12; //'0' should be '12'

   //pad minutes and seconds with leading zeros
    hours=hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

   //Display the time in HH:MM:SS  AM/PM format
    const timeString = `${hours} : ${minutes} : ${seconds} ${ampm}`;
    document.getElementById('clock').innerText = timeString;
}
function updateDate() {

   //Get the current Date 
        const now = new Date();
   const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        const dayName = days[now.getDay()];
        const month= months[now.getMonth()];
        const day = now.getDate();
        const year = now.getFullYear();
   
//Display Date Day:MOnth with Day:Year
     const dateString = `${dayName} : ${month} ${day} : ${year}`;
        document.getElementById('date').innerText = dateString;
        
    }
// Update the Date FRom localstorage as current date
     setInterval(updateDate, 60000);

// Call the function once to tnitialize the Date immediately
      updateDate();

// Update the Clock verey second
      setInterval(updateClock, 1000);
// Call the function once to tnitialize the clock immediately
    updateClock();
   

