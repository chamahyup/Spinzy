const symbols = ["🍒", "🍋", "🔔", "💎", "7️⃣"];
let coins = 100;

function spin() {
  if (coins < 10) {
    alert("코인이 부족합니다!");
    return;
  }

  coins -= 10;

  const reel1 = symbols[Math.floor(Math.random() * symbols.length)];
  const reel2 = symbols[Math.floor(Math.random() * symbols.length)];
  const reel3 = symbols[Math.floor(Math.random() * symbols.length)];

  document.getElementById("reel1").innerText = reel1;
  document.getElementById("reel2").innerText = reel2;
  document.getElementById("reel3").innerText = reel3;

  let reward = 0;
  if (reel1 === reel2 && reel2 === reel3) {
    if (reel1 === "💎") reward = 200;
    else if (reel1 === "7️⃣") reward = 150;
    else reward = 100;

    document.getElementById("result").innerText = `🎉 당첨! +${reward} 코인`;
  } else {
    document.getElementById("result").innerText = `😢 꽝... 다시 도전!`;
  }

  coins += reward;
  document.getElementById("coins").innerText = coins;
}
