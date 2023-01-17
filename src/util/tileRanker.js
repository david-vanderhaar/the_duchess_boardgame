import { MOVE_TYPE_ENUM } from "../constants/moveTypes"

const getScore = (tileData, rankVersionMap = V1) => {
  let score = 0
  tileData.sides.forEach((side) => {
    side.moves.forEach((move) => {
      score += rankVersionMap[move.type]
    })
  })
  return score;
}

const V1 = {
  [MOVE_TYPE_ENUM.FRONT]: 0,
  [MOVE_TYPE_ENUM.BACK]: 0,
  [MOVE_TYPE_ENUM.MOVE]: 2,
  [MOVE_TYPE_ENUM.SOFT_MOVE]: 1,
  [MOVE_TYPE_ENUM.JUMP_MOVE]: 3,
  [MOVE_TYPE_ENUM.SOFT_JUMP]: 1,
  [MOVE_TYPE_ENUM.DREAD]: 2,
  [MOVE_TYPE_ENUM.STRIKE]: 3,
  [MOVE_TYPE_ENUM.SHOT]: 1.5,
  [MOVE_TYPE_ENUM.SLIDE_E]: 2,
  [MOVE_TYPE_ENUM.SLIDE_SE]: 2,
  [MOVE_TYPE_ENUM.SLIDE_S]: 2,
  [MOVE_TYPE_ENUM.SLIDE_SW]: 2,
  [MOVE_TYPE_ENUM.SLIDE_W]: 2,
  [MOVE_TYPE_ENUM.SLIDE_NW]: 2,
  [MOVE_TYPE_ENUM.SLIDE_N]: 2,
  [MOVE_TYPE_ENUM.SLIDE_NE]: 2,
  [MOVE_TYPE_ENUM.JUMP_SLIDE_E]: 4,
  [MOVE_TYPE_ENUM.JUMP_SLIDE_SE]: 4,
  [MOVE_TYPE_ENUM.JUMP_SLIDE_S]: 4,
  [MOVE_TYPE_ENUM.JUMP_SLIDE_SW]: 4,
  [MOVE_TYPE_ENUM.JUMP_SLIDE_W]: 4,
  [MOVE_TYPE_ENUM.JUMP_SLIDE_NW]: 4,
  [MOVE_TYPE_ENUM.JUMP_SLIDE_N]: 4,
  [MOVE_TYPE_ENUM.JUMP_SLIDE_NE]: 4,
  [MOVE_TYPE_ENUM.COMMAND]: 1,
  [MOVE_TYPE_ENUM.DEFENSE]: 1,
  [MOVE_TYPE_ENUM.EMPTY]: 0,
}

export default {
  getScore,
}