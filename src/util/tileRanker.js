import { MOVE_TYPE_ENUM } from "../constants/moveTypes"

const getScore = (sides, rankVersionMap = V1) => {
  let score = 0
  sides.forEach((side) => {
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
  [MOVE_TYPE_ENUM.JUMP_MOVE]: 4,
  [MOVE_TYPE_ENUM.SOFT_JUMP]: 2,
  [MOVE_TYPE_ENUM.DREAD]: 1,
  [MOVE_TYPE_ENUM.STRIKE]: 4,
  [MOVE_TYPE_ENUM.SHOT]: 2,
  [MOVE_TYPE_ENUM.SLIDE_E]: 4,
  [MOVE_TYPE_ENUM.SLIDE_SE]: 4,
  [MOVE_TYPE_ENUM.SLIDE_S]: 4,
  [MOVE_TYPE_ENUM.SLIDE_SW]: 4,
  [MOVE_TYPE_ENUM.SLIDE_W]: 4,
  [MOVE_TYPE_ENUM.SLIDE_NW]: 4,
  [MOVE_TYPE_ENUM.SLIDE_N]: 4,
  [MOVE_TYPE_ENUM.SLIDE_NE]: 4,
  [MOVE_TYPE_ENUM.JUMP_SLIDE_E]: 8,
  [MOVE_TYPE_ENUM.JUMP_SLIDE_SE]: 8,
  [MOVE_TYPE_ENUM.JUMP_SLIDE_S]: 8,
  [MOVE_TYPE_ENUM.JUMP_SLIDE_SW]: 8,
  [MOVE_TYPE_ENUM.JUMP_SLIDE_W]: 8,
  [MOVE_TYPE_ENUM.JUMP_SLIDE_NW]: 8,
  [MOVE_TYPE_ENUM.JUMP_SLIDE_N]: 8,
  [MOVE_TYPE_ENUM.JUMP_SLIDE_NE]: 8,
  [MOVE_TYPE_ENUM.COMMAND]: 1,
  [MOVE_TYPE_ENUM.DEFENSE]: 1,
  [MOVE_TYPE_ENUM.EMPTY]: 0,
}

export default {
  getScore,
}