let heartCount = 0;
let coinCount = 100;
let copyCount = 0;

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
    heartCountEl.innerText = heartCount;
    heartCount++;
  });
});

// copy
copyButtons.forEach(function (id) {
  id.addEventListener("click", function () {
    const number =
      this.parentElement.previousElementSibling.querySelector("p").innerText;
    navigator.clipboard.writeText(number);
    copyCountEl.innerText = copyCount;
    copyCount++;

    alert(`This number is Copied:  ${number}`);
  });
});

// callBUTTONs
callButtons.forEach(function (id) {
  id.addEventListener("click", function () {
    const callCard = this.closest(".card-parent");
    const title = callCard.querySelector(".text-title").innerText;
    const number = callCard.querySelector(".call-number").innerText;

    if (coinCount >= 20) {
      coinCount -= 20;
      coinCountEl.innerText = coinCount;

      alert(`📞Calling ${title} at ${number}. Coins deducted: 20`);

      const newHistoryItem = document.createElement("div");
      newHistoryItem.classList.add(
        "flex",
        "justify-between",
        "items-center",
        "bg-gray-100",
        "p-4",
        "m-3",
        "rounded-lg",
        "shadow-sm"
      );
      const now = new Date();
      const time = now.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });

      newHistoryItem.innerHTML = `
 <div>
 <h2 class="font-bold text-sm text-[#111]">${title}</h2>
 <p class="text-sm font-medium text-gray-400">${number}</p>
 </div>
 <p class="text-gray-400 text-xs"><span>${time}</span></p>

 `;
      callHistory.append(newHistoryItem);
    } else {
      alert(`❌You don't have enough "Coins" to make this call`);
    }
  });
});

// clear History
clearHistory.addEventListener("click", function () {
  const clearCallHistory = document.querySelector(".history-container");
  clearCallHistory.textContent = "";
});
