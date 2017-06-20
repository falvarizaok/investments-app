import reducer from '../../reducers/investments'
import * as actions from '../../actions'

describe('investments reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual([]);
  });

  it('should handle RECEIVE_INVESTMENTS', () => {
    const investments = [
      [
        {label: 'Stocks', value: 5},
        {label: 'Bonds', value: 30},
        {label: 'Cash', value: 10},
        {label: 'Commodities', value: 25},
        {label: 'Fixed Income', value: 30}
      ]
    ];

    expect(reducer([], actions.receiveInvestments(investments)))
      .toEqual(investments);
  });
});
