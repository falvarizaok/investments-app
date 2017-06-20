import * as actions from '../actions'

describe('actions', () => {
  it('should create an action to change risk', () => {
    const risk = 1;
    const expectedAction = {
      type: 'CHANGE_RISK',
      risk
    };

    expect(actions.changeRisk(risk)).toEqual(expectedAction);
  })
});
