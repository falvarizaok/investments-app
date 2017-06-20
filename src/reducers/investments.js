const investments = (state = [], action) => {
  switch(action.type) {
    case 'RECEIVE_INVESTMENTS':
      return action.investments;
    default:
      return state;
  }
}

export default investments;

export const getSelectedInvestments = (state, risk) => state.length > 0 ? state[risk - 1] : []

export const getInvestmentsCount = (state) => state.length
