import {update as updateSnake, dessiner as dessinerSnake, SNAKE_SPEED, getSnakeTete, snakeCollision} from './snake.js'
import {update as updateNourriture, dessiner as dessinerNourriture} from './nourriture.js'
import {enDehorsGrille} from './grille.js'




let tempsDernierRendu = 0
let gameOver = false
const gameBoard = document.getElementById('game-board')



function main(tempsActuel) {
if (gameOver) {
    
    if (confirm('Tu as Perdu. Appuye sur OK pour recommencer !')) {
        window.location= '/SnakeProjet'

    }
    return
}


    window.requestAnimationFrame(main)
    const secondesDepuisDernierRendu = (tempsActuel - tempsDernierRendu) / 1000
    if (secondesDepuisDernierRendu < 1 / SNAKE_SPEED) return
    
    
    tempsDernierRendu= tempsActuel
    
    update()
    dessiner()


}


window.requestAnimationFrame(main)



 function update() {
    updateSnake()
    updateNourriture()
    checkDeath()

}

function dessiner() {

    gameBoard.innerHTML= ''
    dessinerSnake(gameBoard)
    dessinerNourriture(gameBoard)
    
}


function checkDeath() {
    gameOver= enDehorsGrille(getSnakeTete()) || snakeCollision()
}