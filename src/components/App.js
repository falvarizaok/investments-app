import React from 'react';
import DonutChart from './DonutChart';
import RiskSlider from './RiskSlider';
import styled from 'styled-components';
import '../styles/App.css';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 5%;
`;

const App = () => {
  return (
    <AppContainer>
      <DonutChart />
      <RiskSlider />
    </AppContainer>
  );
}

export default App;
