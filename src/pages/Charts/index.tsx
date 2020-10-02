import React, { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import { toast } from 'react-toastify';

import Axios from '../../services/Axios';
import {
  buildBarSeries,
  getPlatformChartData,
  getGenderChartData,
} from './helpers';

import Filters from '../../components/Filters';
import Spinner from '../../components/Spinner';

import { barOptions, pieOptions } from './chart-options';

import { URL_GAMES, URL_RECORDS } from '../../config/urls';

import './styles.css';

type PieChartData = {
  labels: string[];
  series: number[];
};

type BarChartData = {
  x: string;
  y: number;
};

const initialPieData: PieChartData = {
  labels: [],
  series: [],
};

const Charts = (): JSX.Element => {
  const [barChartData, setBarChartData] = useState<BarChartData[]>([]);
  const [platformData, setPlatformData] = useState<PieChartData>(
    initialPieData,
  );

  const [awaitResponse, setAwaitReponse] = useState(true);

  const [genderData, setGenderData] = useState<PieChartData>(initialPieData);

  useEffect(() => {
    setAwaitReponse(true);

    async function getData() {
      try {
        const recordsResponse = await Axios.get(URL_RECORDS);
        const gamesResponse = await Axios.get(URL_GAMES);

        const barData = buildBarSeries(
          gamesResponse.data,
          recordsResponse.data.content,
        );

        setBarChartData(barData);

        const platformChartData = getPlatformChartData(
          recordsResponse.data.content,
        );
        setPlatformData(platformChartData);

        const genderChartData = getGenderChartData(
          recordsResponse.data.content,
        );
        setGenderData(genderChartData);
      } catch (e) {
        toast.error(`Desculpe, não foi possível gerar os gráficos, ${e}`);
      } finally {
        setAwaitReponse(false);
      }
    }

    getData();
  }, []);

  return (
    <div className="page-container">
      <Filters link={'/records'}>VER TABELA</Filters>
      <div className="chart-container">
        <div className="top-related">
          <h1 className="top-related-title">Jogos mais votados</h1>
          <div className="games-container">
            {awaitResponse ? (
              <Spinner colorOfSpinner="spinner-chart" />
            ) : (
              <Chart
                options={barOptions}
                type="bar"
                width="850"
                height="650"
                series={[{ data: barChartData }]}
              />
            )}
          </div>
        </div>
        <div className="charts">
          <div className="platform-chart">
            <h2 className="chart-title">Plataformas</h2>
            {awaitResponse ? (
              <Spinner colorOfSpinner="spinner-chart" />
            ) : (
              <Chart
                options={{ ...pieOptions, labels: platformData?.labels }}
                type="donut"
                series={platformData?.series}
                width="350"
              />
            )}
          </div>
          <div className="gender-chart">
            <h2 className="chart-title">Gêneros</h2>
            {awaitResponse ? (
              <Spinner colorOfSpinner="spinner-chart" />
            ) : (
              <Chart
                options={{ ...pieOptions, labels: genderData?.labels }}
                type="donut"
                series={genderData?.series}
                width="350"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Charts;
