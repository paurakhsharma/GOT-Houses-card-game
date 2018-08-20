const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let firstCard, secondCard;


function flipCard() {
    this.classList.add('flip');

    if(!hasFlippedCard) {
        // first click
        hasFlippedCard = true;
        firstCard = this;
    } else {
        // second click
        if(firstCard == this){return}
        hasFlippedCard = false;
        secondCard = this;

        // do cards match 
        if(firstCard.dataset.house === secondCard.dataset.house) {
            firstCard.removeEventListener('click', flipCard);
            secondCard.removeEventListener('click', flipCard);
            console.log('function exexuted')
        } else {
            setTimeout(() => {
                firstCard.classList.remove('flip');
                secondCard.classList.remove('flip');
            }, 500)
        }
    }
}

cards.forEach(card => card.addEventListener('click', flipCard));
