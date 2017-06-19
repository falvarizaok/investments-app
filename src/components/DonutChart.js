import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Donut from 'react-donut-chart';
import { getSelectedInvestments } from '../reducers';

class EnhancedDonut extends Donut {
  /*
    The way this library was handling the click in each donut section wasn't
    desired because you needed to unselect the selected section in order to
    select another one. For this reason I decided to override this method
  */
  handleClick(item) {
    if (this.state.selected.label === item.label) {
      const toggle = !this.state.toggleSelect;
      this.setState({
          toggleSelect: toggle,
          selected: item
      });
      this.props.onClick(item, toggle);
    } else {
      const toggle = true;
      this.setState({
          toggleSelect: toggle,
          selected: item
      });
      this.props.onClick(item, toggle);
    }
  }
}

const DonutChart = ({ investments }) => (
  <EnhancedDonut data={investments} className='donut' />
)

DonutChart.propTypes = {
  investments: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired
  })).isRequired
}

const mapStateToProps = (state, ownProps) => (
  {
    investments: getSelectedInvestments(state)
  }
)

export default connect(mapStateToProps)(DonutChart);
