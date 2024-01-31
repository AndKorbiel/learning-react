import { useCallback, useEffect, useState } from 'react';

import { articlesList } from '../constants';
import { randomIntFromInterval } from '../utils';

export const useFetchArticles = () => {
  const [articles, setArticles] = useState(articlesList);
  const [areArticlesLoading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const addImagesToArticles = useCallback(
    (images) => {
      const articlesData = articles.map((article, index) => ({
        ...article,
        img: images[index].download_url,
      }));

      setArticles(articlesData);
    },
    [articles],
  );

  useEffect(() => {
    async function init() {
      try {
        setLoading(true);
        const randomPageNumber = randomIntFromInterval(1, 10);
        const res = await fetch(
          `https://picsum.photos/v2/list?page=${randomPageNumber}&limit=10`,
        );

        const data = await res.json();
        addImagesToArticles(data);
      } catch (e) {
        console.log(e);
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    init();
  }, []);

  return { areArticlesLoading, articles, error };
};
