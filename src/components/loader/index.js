import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

import { loaderBox, loadingLabel } from './loader.module.scss';

function index({ size }) {
  return (
    <div className={`${loaderBox} `}>
      <CircularProgress size={size} />
      <span className={`${loadingLabel}`}>Loading the logs...</span>
    </div>
  );
}

export default index;
