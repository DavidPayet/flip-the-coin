const coin = document.querySelector('.coin-image')
const btn = document.querySelector('.button')
const resultDisplay = document.querySelector('.result')

const flipCoin = () => {
  coin.classList.add('flipping')

  setTimeout(() => {
    const result = Math.random() < 0.5 ? 'Heads' : 'Tails'

    resultDisplay.textContent = result

    coin.src =
      result === 'Heads' ? 'resources/heads.svg' : 'resources/tails.svg'

    coin.classList.remove('flipping')
  }, 600)
}

// Ajouter les écouteurs d'événements
btn.addEventListener('click', flipCoin)
coin.addEventListener('click', flipCoin)
