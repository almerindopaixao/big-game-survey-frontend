import React from 'react';

import { Link } from 'react-router-dom';

import './styles.css';

type FiltersProps = {
  link: string;
  children: string;
};

const Filters = ({ link, children }: FiltersProps): JSX.Element => (
  <div className="filters-container records-actions">
    <Link to={link}>
      <button className="action-filters">{children}</button>
    </Link>
  </div>
);

export default Filters;
