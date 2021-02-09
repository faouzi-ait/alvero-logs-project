import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadLogs } from './actions';
import { fetchedItems, loadingStatus } from './selectors';

import Listing from '../listing';
import Counts from '../counts'
import LoadingScreen from '../loader';

import { listingContainer } from './app.module.scss';

function App() {
  const dispatch = useDispatch();
  const items = useSelector(fetchedItems);
  const loading = useSelector(loadingStatus);

  useEffect(() => {
    dispatch(loadLogs());
  }, []);

  return (
    <div>
      {loading ? (
        <LoadingScreen size={150} />
      ) : (
        <div className={`${listingContainer}`}>
          <Listing items={items} />
          <Counts items={items} />
        </div>
      )}
    </div>
  );
}

export default App;
