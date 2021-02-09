import React from 'react';
import { totalCount } from './counts.module.scss';
import { countTotal } from '../../utils';

function Index({ items }) {
  return (
    <div className={`${totalCount}`}>
      <span>Total Errors: {countTotal(items, 'ERROR')}</span>
      <span>Total Warnings: {countTotal(items, 'WARNING')}</span>
      <span>Total Info: {countTotal(items, 'INFO')}</span>
    </div>
  );
}

export default Index;
