const TAILLE_GRILLE = 21

export function randomGrillePosition() {
    return {
        x: Math.floor(Math.random() * TAILLE_GRILLE) + 1,
        y: Math.floor(Math.random() * TAILLE_GRILLE) + 1
    }
}

export function enDehorsGrille(position) {
    return (
        position.x < 1 || position.x > TAILLE_GRILLE ||
        position.y < 1 || position.y > TAILLE_GRILLE
    )
}


