import { ACTION_TYPE } from './constants'

const initialState = {
  profile: {
    name: "TEST NAME"
  },
  madicationList: [
    {
      id: "0001", 
      name: "analgin1",
      time: 1355281381,
      taken: true
    },
    {
      id: "0002", 
      name: "analgin2",
      time: 1355281381,
      taken: false
    },    {
      id: "0003", 
      name: "analgin3",
      time: 1355281381,
      taken: false
    },
    {
      id: "0004", 
      name: "analgin4",
      time: 1355281381,
      taken: false
    },
    {
      id: "0005", 
      name: "analgin5",
      time: 1355291381,
      taken: false
    },
    {
      id: "0006", 
      name: "analgin6",
      time: 1355287381,
      taken: true
    },
    {
      id: "0007", 
      name: "analgin7",
      time: 1355284381,
      taken: false
    }
  ],
  messages: []
  
}

export default (state = initialState, action) =>  {
  switch (action.type) {
    case ACTION_TYPE.CHECKED_MED: {
      const { id, taken } =  action.payload
      const rightIndex = state.madicationList.findIndex((elem) => elem.id === id)
      const copiedArrey = [...state.madicationList]
      copiedArrey[rightIndex] = {
        ...copiedArrey[rightIndex],
        taken
      }

      return {
        ...state,
        madicationList: copiedArrey
      }
    }
    default: return state
  }
}

