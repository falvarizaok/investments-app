const risk = (state = 1, action) => {
  switch(action.type) {
    case 'CHANGE_RISK':
      return action.risk;
    default:
      return state;
  }
}

export default risk;
