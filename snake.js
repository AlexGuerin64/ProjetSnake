import { getInputDirection } from "./input.js"




export const SNAKE_SPEED = 5
const snakeBody = [ {x: 11, y: 11 }]

let nouveauSegments = 0

export function update() {
    ajouterSegments()

    const inputDirection = getInputDirection()
    for (let i = snakeBody.length - 2; i>= 0; i--){
        snakeBody[i + 1] = { ...snakeBody[i] }
    }

    snakeBody[0].x += inputDirection.x
    snakeBody[0].y += inputDirection.y
}


export function dessiner(gameBoard) {

    snakeBody.forEach(segment => {
        const snakeElement = document.createElement('div')
        snakeElement.style.gridRowStart = segment.y
        snakeElement.style.gridColumnStart= segment.x
        snakeElement.classList.add('snake')
        gameBoard.appendChild(snakeElement)
    })
    
}


export function augmenterSnake(quantite) {
    nouveauSegments += quantite

}

export function onSnake(position, { ignoreTete = false } = {}) {
    return snakeBody.some((segment, index) => {
        if (ignoreTete && index === 0) return false
        return equalPositions(segment, position)

    })
}


export function getSnakeTete() {
    return snakeBody[0]
}

export function snakeCollision() {
    return onSnake(snakeBody[0], {ignoreTete: true})
}

function equalPositions(pos1, pos2) {
    return pos1.x === pos2.x && pos1.y === pos2.y
    
}

function ajouterSegments() {
    for (let i = 0 ; i < nouveauSegments ; i++) {
        snakeBody[snakeBody.length] = { ...snakeBody[snakeBody.length - 1]}
    
    }

    nouveauSegments = 0
}

