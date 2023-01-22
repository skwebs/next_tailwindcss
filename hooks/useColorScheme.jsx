// https://blog.bitsrc.io/how-to-sync-your-react-app-with-the-system-color-scheme-78c0ad00074b
export default function useColorScheme(targetColorScheme) {
  const isMounted = useRef();
  const colorScheme = useRef();

  const targetScheme = useMemo(
    () => resolveTargetColorScheme(targetColorScheme),
    [targetColorScheme]
  );

  const [scheme, setColorScheme] = useState(() => {
    const { scheme } = colorScheme.current = getCurrentColorScheme();
    return scheme;
  });

  useEffect(() => {
    const { query } = colorScheme.current;

    query.addEventListener('change', schemeChangeHandler);
    isMounted.current = true;

    function schemeChangeHandler(evt) {
      if (!evt.matches) {
        this.removeEventListener('change', schemeChangeHandler);
        const { query, scheme } = colorScheme.current = getCurrentColorScheme();

        isMounted.current && setColorScheme(scheme);
        query.addEventListener('change', schemeChangeHandler);
      }
    }

    return () => {
      const { query } = colorScheme.current;
      query.removeEventListener('change', schemeChangeHandler);
      isMounted.current = false;
    };
  }, []);

  return scheme === targetScheme;
}



// =======================================
import { useState, useEffect, useRef, useMemo } from 'react';

const COLOR_SCHEMES = ['no-preference', 'dark', 'light'];
const DEFAULT_TARGET_COLOR_SCHEME = 'light';

function resolveTargetColorScheme(scheme) {
  if (!(
    COLOR_SCHEMES.includes(scheme = String(scheme).toLowerCase()) ||
    scheme === 'no-preference'
  )) scheme = DEFAULT_TARGET_COLOR_SCHEME;

  return scheme;
}

function getCurrentColorScheme() {
  const QUERIES = {};

  return (getCurrentColorScheme = function () {
    for (let scheme of COLOR_SCHEMES) {
      const query = QUERIES.hasOwnProperty(scheme)
        ? QUERIES[scheme]
        : (QUERIES[scheme] = matchMedia(`(prefers-color-scheme: ${scheme})`));

      if (query.matches) return { query, scheme };
    }
  })();
}

// Define and export the `useColorScheme` hook
export default function useColorScheme() { }
