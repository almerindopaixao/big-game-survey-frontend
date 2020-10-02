import React from 'react';
import Chart from 'react-apexcharts';

import Filters from '../../components/Filters';

import { barOptions, pieOptions } from './chart-options';

import './styles.css';

const chatData = [
  {
    x: 'Almerindo',
    y: 10,
  },

  {
    x: 'Rennan',
    y: 8,
  },

  {
    x: 'Otávio',
    y: 5,
  },
];

const Charts = (): JSX.Element => (
  <div className="page-container">
    <Filters link={'/records'}>VER TABELA</Filters>
    <div className="chart-container">
      <div className="top-related">
        <h1 className="top-related-title">Jogos mais votados</h1>
        <div className="games-container">
          <Chart
            options={barOptions}
            type="bar"
            width="400"
            height="150"
            series={[{ data: chatData }]}
          />
        </div>
      </div>
      <div className="charts">
        <div className="platform-chart">
          <h2 className="chart-title">Plataformas</h2>
          <Chart
            options={{ ...pieOptions, labels: ['Almerindo', 'Rennan'] }}
            type="donut"
            series={[30, 70]}
            width="350"
          />
        </div>
        <div className="gender-chart">
          <h2 className="chart-title">Gêneros</h2>
          <Chart
            options={{ ...pieOptions, labels: ['Almerindo', 'Rennan'] }}
            type="donut"
            series={[30, 70]}
            width="350"
          />
        </div>
      </div>
    </div>
  </div>
);
export default Charts;
