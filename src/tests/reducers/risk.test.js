import reducer from '../../reducers/risk'
import * as actions from '../../actions'

describe('risk reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(1);
  });

  it('should handle CHANGE_RISK', () => {
    const risk = 2;
    expect(reducer(1, actions.changeRisk(risk)))
      .toEqual(risk);
  });
});
