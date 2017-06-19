import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentRisk } from '../reducers';
import { changeRisk } from '../actions';

const RiskSlider = ({ risk, onSlideChange }) => {
  let input;

  return (
    <div>
      <p>
        Selected risk:
        <b>{risk}</b>
      </p>
      <input
        ref={node => { input = node; }}
        type="range"
        min="1"
        max="10"
        step="1"
        value={risk}
        onChange={() => {
          let value = parseInt(input.value, 10);
          onSlideChange(value);
        }} />
    </div>
  );
};

RiskSlider.propTypes = {
  risk: PropTypes.number.isRequired,
  onSlideChange: PropTypes.func.isRequired
}

const mapStateToProps = (state) => (
  {
    risk: getCurrentRisk(state)
  }
)

const mapDispatchToProps = (dispatch) => (
  {
    onSlideChange: (value) => dispatch(changeRisk(value))
  }
)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RiskSlider);
