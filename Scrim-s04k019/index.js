
                
let homeEl = document.getElementById("count-Home-el") 
let newgameEL = document.getElementById("newGame-btn")
let guestEL = document.getElementById("count-Guest-el")
let leaderEl = document.getElementById("leader-el")
let home = 0
let guest = 0

 let timerInterval = null
 let seconds = 0
 let elapsedSeconds = 0
 
function newgame(){
  home = 0
  guest = 0
  leaderEl.textContent = "New Game started"
  document.getElementById("count-Home-el").textContent = home;
  document.getElementById("count-Guest-el").textContent = guest; 
  console.log("new game clicked")
}
 

function startTimer() {
        if(timerInterval === null) {
            timerInterval = setInterval(() => {
                elapsedSeconds += 1;
                document.getElementById("timer-el").textContent =  " passed: " + formatTime(elapsedSeconds);
            }, 1000);
        }
    }

 

   function resetTimer() {
        clearInterval(timerInterval);
        timerInterval = null;
        elapsedSeconds = 0;
        document.getElementById("timer-el").textContent = "00:00:00";
        }

    function formatTime(totalSeconds) {
        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;

        // Dodajemy zera wiodące
        const hDisplay = hours.toString().padStart(2, '0');
        const mDisplay = minutes.toString().padStart(2, '0');
        const sDisplay = seconds.toString().padStart(2, '0');

        return `${hDisplay}:${mDisplay}:${sDisplay}`;
    }




function leader(){
  if (home > guest) {
  console.log("Leader in points is: Home");
   leaderEl.textContent = "Leader in points is: Home"
} else if (guest > home) {
  console.log("Leader in points is: Home");
   leaderEl.textContent = "Leader in points is: Guest"
} else {
  console.log("Liczby są równe");
  leaderEl.textContent = "We have draw in points"
} 
}










function incrementhome1(){
  home += 1
  console.log("clicked home + 1")
  homeEl.textContent = home
}
function incrementhome2(){
  home += 2
  console.log("clicked home + 2")
  homeEl.textContent = home
}
function incrementhome3(){
  home += 3
  console.log("clicked home + 3")
  homeEl.textContent = home
}

function incrementguest1(){
  guest += 1
  console.log("clicked guest + 1")
  guestEL.textContent = guest
  }
  
  function incrementguest2(){
  guest += 2
  console.log("clicked guest + 2")
  guestEL.textContent = guest
  }
  
function incrementguest3(){
  guest += 3
  console.log("clicked guest + 2")
  guestEL.textContent = guest
  }