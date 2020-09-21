import { ACTION_TYPE } from "./constants"

const checkedMed = (id, bool)  => ({
  type: ACTION_TYPE.CHECKED_MED, payload: { id, taken: bool }
})

export { checkedMed } 