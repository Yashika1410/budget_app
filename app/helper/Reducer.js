let instance = [""];
let number = 0
export default function Reducer(state = instance, action) {
  if (action.type === 'ADD_ITEM') {
    return [
      ...state,
      {
        id: ++number,
        itemName: action.payload.itemName,
        plannedCost: action.payload.plannedCost,
        originalCost: action.payload.actualCost 
      },
    ];
  }

  return state;
}
