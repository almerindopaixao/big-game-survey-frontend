import React from 'react';

import './styles.css';

type Props = {
  colorOfSpinner?: string;
};

const Spinner = ({ colorOfSpinner }: Props): JSX.Element => (
  <div className={`spinner ${colorOfSpinner}`}></div>
);

export default Spinner;
