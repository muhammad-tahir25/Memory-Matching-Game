# 🃏 FLIPCARD — Memory Matching Game

A lightweight, browser-based memory card matching game built with vanilla HTML, CSS, and JavaScript. No frameworks, no build tools — just open the file and play.

---

## 🎮 How to Play

1. Open `flipcard-game.html` in any browser
2. Click any card to flip it and reveal the emoji
3. Click a second card to find its match
4. If both cards match, they stay flipped and glow orange
5. If they don't match, both cards flip back after a short delay
6. Match all 8 pairs to win!

---

## ✨ Features

### 🔁 Card Flip Animation
Cards flip with a smooth 3D CSS `rotateY` animation when clicked, giving a satisfying tactile feel.

### 🍕 Food Emoji Cards
The game uses 8 unique food emojis as card pairs:
`🍕 🍔 🌮 🍜 🍣 🧁 🍩 🍓`

### 🔀 Randomized Every Game
Cards are shuffled using the Fisher-Yates algorithm on every new game, so no two rounds are the same.

### 📊 Move Counter
Tracks how many pairs you've attempted. Every time you flip two cards, the move count goes up.

### ⏱️ Timer
Starts counting the moment you flip your first card. Stops as soon as you match the final pair.

### 🏆 Best Score Tracker
Keeps track of your best (lowest) move count across rounds within the same session. Shown in the stats bar and the win screen.

### ✅ Match & Wrong Feedback
- Matched pairs glow with an orange border
- Wrong pairs flash a red border and shake before flipping back

### 🎉 Win Screen
A full-screen overlay appears when you complete the board, showing your total moves, total time, and your best score.

### 🔄 Restart Anytime
Hit **Restart Game** on the win screen to shuffle and play again instantly.

---

## 🛠️ Tech Stack

| Technology | Usage |
|---|---|
| **HTML5** | Game structure and layout |
| **CSS3** | Styling, 3D card flip animations, grid layout, transitions |
| **JavaScript (ES5)** | Game logic, shuffle algorithm, timer, state management |
| **jQuery 3.7.1** | DOM manipulation and event handling (loaded via CDN) |

---

## 📁 File Structure

```
flipcard-game.html   ← Single self-contained file (HTML + CSS + JS all in one)
```

Everything is bundled into one HTML file — no dependencies to install, no folder structure needed.

---

## 🚀 Getting Started

No setup required.

```bash
# Clone the repo
git clone https://github.com/your-username/flipcard.git

# Open the game
open flipcard-game.html
```

Or just download the file and double-click it — it works in any modern browser.

---

## 🌐 Browser Support

Works in all modern browsers:
- Chrome
- Firefox
- Safari
- Edge

---

## 📝 License

Free to use and modify for personal projects.
