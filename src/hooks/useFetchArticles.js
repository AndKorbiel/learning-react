import { useCallback, useEffect, useState } from 'react';

import { articlesList } from '../constants';
import { randomIntFromInterval } from '../utils';

export const useFetchArticles = () => {
  const [articles, setArticles] = useState(articlesList);

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
        const randomPageNumber = randomIntFromInterval(1, 10);
        const res = await fetch(
          `https://picsum.photos/v2/list?page=${randomPageNumber}&limit=10`,
        );
        const data = await res.json();
        addImagesToArticles(data);
      } catch (e) {
        console.log(e);
      }
    }

    init();
  }, []);

  return { articles };
};
