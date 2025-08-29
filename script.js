const heartCount = document.getElementById("heartCount");
const coinCount = document.getElementById("coinCount");
const copyCount = document.getElementById("copyCount");
const historyList = document.getElementById("historyList");
const clearHistoryBtn = document.getElementById("clearHistory");
const navToggle = document.getElementById("navToggle");
const navActions = document.getElementById("navActions");

document.addEventListener("click", (e) => {
    const heartBtn = e.target.closest(".heartBtn");
    const copyBtn = e.target.closest(".copyBtn");
    const callBtn = e.target.closest(".callBtn");

    if (heartBtn) {
        heartCount.textContent = parseInt(heartCount.textContent) + 1;
        heartBtn.innerHTML = '<i class="fa-solid fa-heart text-red-500"></i>';
        return;
    }

    if (copyBtn) {
        const card = copyBtn.parentElement;
        const callSibling = card.querySelector(".callBtn");
        const number = callSibling.getAttribute("data-number");

        if (number) {
            navigator.clipboard.writeText(number);
            copyCount.textContent = Number(copyCount.textContent) + 1;
            alert("Copied: " + number);
        }
        return;
    }

    if (callBtn) {
        let coins = parseInt(coinCount.textContent);
        if (coins < 20) {
            alert("Not enough coins to make a call!");
            return;
        }
        const name = callBtn.dataset.name;
        const number = callBtn.dataset.number;
        alert(`Calling ${name} at ${number}`);

        coinCount.textContent = coins - 20;

        const now = new Date();
        const time = now.toLocaleTimeString();
        const entryElement = document.createElement("div");
        const entryHTML = `
            <div class="flex items-center justify-between gap-3 shadow p-2 bg-gray-100 rounded">
                <div class="truncate">
                    <span class="font-medium">${name}</span>
                    <br>
                    <span class="text-gray-600">${number}</span>
                </div>
                <span class="text-xs text-gray-500 whitespace-nowrap">${time}</span>
            </div>

        `;
        entryElement.innerHTML = entryHTML;
        historyList.prepend(entryElement);
        return;
    }
});


if (clearHistoryBtn) {
  clearHistoryBtn.addEventListener("click", () => {
    historyList.innerHTML = "";
  });
}


if (clearHistoryBtn) {
  clearHistoryBtn.addEventListener("click", () => {
    historyList.innerHTML = "";
  });
}


if (navToggle && navActions) {
  navToggle.addEventListener("click", () => {
    if (navActions.classList.contains("hidden")) {
      navActions.classList.remove("hidden");
    } else {
      navActions.classList.add("hidden");
    }
  });
}


