import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Donut from 'react-donut-chart';
import { getSelectedInvestments } from '../reducers';
import { fetchInvestments } from '../actions';
import '../styles/DonutChart.css';

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

class DonutChart extends Component {
  componentWillMount() {
    this.props.fetchInvestments();
  }

  render() {
    return <EnhancedDonut data={this.props.investments} className='donut' />
  }
}

DonutChart.propTypes = {
  investments: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired
  })).isRequired,
  fetchInvestments: PropTypes.func.isRequired
}

const mapStateToProps = (state, ownProps) => (
  {
    investments: getSelectedInvestments(state)
  }
)

const mapDispatchToProps = (dispatch) => (
  {
    fetchInvestments: () => dispatch(fetchInvestments())
  }
)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DonutChart);
