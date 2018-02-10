export const PLAYER_MOVE = 'PLAYER_MOVE'

export function playerMove(playerName, squareIndex) {

  const move = {
    playerName,
    squareIndex
  }

  return {
    type: PLAYER_MOVE,
    move
  }
}
