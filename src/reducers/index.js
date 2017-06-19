import { combineReducers } from 'redux';
import investments, * as fromInvestments from './investments';
import risk from './risk';

const investmentsApp = combineReducers({
  investments,
  risk
});

export default investmentsApp;

export const getSelectedInvestments = (state) =>
  fromInvestments.getSelectedInvestments(state.investments, state.risk);

export const getCurrentRisk = (state) => state.risk
