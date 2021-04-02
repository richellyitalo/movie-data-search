import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { useRouter } from 'next/router';
import { debounce } from 'lodash';

export const AppContext = createContext({
  querySearch: null,
  setQuerySearch: (query) => {},
});

export function AppWrapper({ children }) {
  const router = useRouter();
  const [querySearch, setQuerySearch] = useState('');

  const context = {
    querySearch,
    setQuerySearch,
  };

  useEffect(() => {
    if (querySearch.length === 0) {
      router.push('/');
      return;
    }

    // if (querySearch.length < 3) {
    //   return;
    // }

    debounceQueryChange(querySearch);
  }, [querySearch]);

  const debounceQueryChange = useCallback(
    debounce((query) => {
      router.push({
        pathname: '/movies/search/[slug]',
        query: { slug: query },
      });
    }, 1000),
    []
  );

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  return useContext(AppContext);
}
