import { onSnake, augmenterSnake } from './snake.js'
import { randomGrillePosition } from './grille.js'

let nourriture = getPositionNourritureAleatoire()
const TAUX_EXPANSION = 1




export function update() {
    if (onSnake(nourriture)){
        augmenterSnake(TAUX_EXPANSION)
        nourriture = getPositionNourritureAleatoire()
    }
    
}


export function dessiner(gameBoard) {

     
    const nourritureElement = document.createElement('div')
    nourritureElement.style.gridRowStart = nourriture.y
    nourritureElement.style.gridColumnStart= nourriture.x
    nourritureElement.classList.add('nourriture')
    gameBoard.appendChild(nourritureElement)
    
    
}

function getPositionNourritureAleatoire() {
    let newNourriturePosition
    while(newNourriturePosition == null || onSnake(newNourriturePosition)) {
        newNourriturePosition = randomGrillePosition()
    }
    return newNourriturePosition
}

