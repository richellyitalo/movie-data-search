import { useContext } from 'react';
import { useAppContext, AppContext } from '../../context/query-search';

import styles from './searcher.module.css';

function Searcher() {
  const ctx = useAppContext();

  const handleQueryChange = (e) => {
    ctx.setQuerySearch(e.target.value);
  };

  return (
    <div className={styles.searcher}>
      <input
        type="text"
        autoComplete="off"
        value={ctx.querySearch}
        onChange={handleQueryChange}
        placeholder="Type a movie name"
        className={`${styles.searcher} bp3-input bp3-large bp3-fill`}
      />
    </div>
  );
}

export default Searcher;
