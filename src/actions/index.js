import * as database from '../database'

export const changeRisk = (risk) => (
  {
    type: 'CHANGE_RISK',
    risk
  }
);

export const receiveInvestments = (investments) =>(
  {
    type: 'RECEIVE_INVESTMENTS',
    investments
  }
);

export const fetchInvestments = () => (dispatch) =>
  database.getInvestments().then(investments => {
    dispatch(receiveInvestments(investments));
  })


