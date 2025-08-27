// copy-btn
// call-btn
// copy-count
// heart-count
// heart-btn

// clear-history
// history-list

let heartCount = 0;
let coinCount = 100;
let copyCount = 0;
// const perCallCoin = 20;

const heartCountEl = document.getElementById("heart-count");
const coinCountEl = document.getElementById("coin-count");
const copyCountEl = document.getElementById("copy-count");
const copyButtons = document.querySelectorAll(".copy-btn");
const callButtons = document.querySelectorAll(".call-btn");
const heartButtons = document.querySelectorAll(".heart-btn");
const callHistory = document.querySelector(".history-container");
const clearHistory = document.getElementById("clear-history");

// heart
heartButtons.forEach(function (id) {
  id.addEventListener("click", function () {
    heartCount++;
    heartCount.innerText = heartCount;
  });
});

// callBUTTONs
callButtons.forEach(function (id) {
  id.addEventListener("click", function () {
    const callCard =
      this.closest("div-bg-white")
      const title=callCard.querySelector("h2").innerText;
      const number=callCard.querySelector("p.text-xl").innerText;
   
   if(coinCount>=20){
        coinCount -= 20;
        coinCountEl.innerText=coinCount;
        console.log("ddddddd");
   }
    alert("callig" + title + " (" + number + ")...less 20 coin");
  });
});


// copy 
copyButtons.forEach(function (id) {
  id.addEventListener("click", function () {
    const number =
      this.parentElement.previousElementSibling.querySelector("P").innerText;
    navigator.clipboard.writeText(number);
    copyCount++;
    copyCountEl.innerText = coinCount;
    alert("This number is Copied" + number);




 const currentTime = new Date(); 
 const timeString = currentTime.toLocaleTimeString(); 
const historyItem = document.createElement("div"); 
historyItem.className = "flex justify-between items-center bg-gray-100 p-4 m-3 rounded-lg shadow-sm"; 
historyItem.innerHTML = '<div>' + '<h2 class="font-bold text-xl text-[#111]">' + title + "</h2>" + '<p class="text-lg font-medium text-gray-400">' + number + "</p>" + "</div>" + '<p class="text-gray-400">' + timeString + "</p>";
 historyContainer.prepend(historyItem); 
   
        alert("insufficient found") 
});
});
 
 heartButtons.forEach(function (btn) { btn.addEventListener("click", function () { heartCount++; heartCountEl.innerText = heartCount; }); });
 
 
 clearHistoryBtn.addEventListener("click", function () { 
        historyContainer.innerHTML = ""; });