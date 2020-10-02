import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import Axios from '../../services/Axios';
import { URL_RECORDS } from '../../config/urls';
import { RecordsResponse } from './types';
import { formatDate } from './helpers';

import Pagination from './Pagination';
import Spinner from '../../components/Spinner';
import Filters from '../../components/Filters';

import './styles.css';

const Records = (): JSX.Element => {
  const [recordsResponse, setRecordsResponse] = useState<RecordsResponse>({
    content: [],
    config: {
      totalPages: 0,
    },
  });

  const [awaitResponse, setAwaitReponse] = useState(true);

  const [activePage, setActivePage] = useState(0);

  useEffect(() => {
    setAwaitReponse(true);

    Axios.get(`${URL_RECORDS}?page=${activePage}`)
      .then((response) => {
        setAwaitReponse(false);
        setRecordsResponse(response.data);
      })
      .catch((e) => {
        setAwaitReponse(false);
        toast.error(`Desculpe, não conseguimos obter os dados, ${e}`);
      });
  }, [activePage]);

  const handlePageChange = (index: number): void => {
    setActivePage(index);
  };

  return (
    <div className="page-container">
      <Filters link={'/charts'}>VER GRÁFICOS</Filters>
      {awaitResponse ? (
        <Spinner />
      ) : (
        <table className="records-table" cellPadding="0" cellSpacing="0">
          <thead>
            <tr>
              <th>INSTANTE</th>
              <th>NOME</th>
              <th>IDADE</th>
              <th>PLATAFORMA</th>
              <th>GÊNERO</th>
              <th>TÍTULO DO GAME</th>
            </tr>
          </thead>
          <tbody>
            {recordsResponse.content.map((record) => (
              <tr key={record.id}>
                <td>{formatDate(record.moment)}</td>
                <td>{record.name}</td>
                <td>{record.age}</td>
                <td className="text-secondary">{record.gamePlatform}</td>
                <td>{record.genreName}</td>
                <td className="text-primary">{record.gameTitle}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <Pagination
        activePage={activePage}
        goToPage={handlePageChange}
        totalPages={recordsResponse.config.totalPages}
      />
    </div>
  );
};

export default Records;
