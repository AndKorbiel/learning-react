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

  async function fetchImages(limit) {
    try {
      setLoading(true);
      const randomPageNumber = randomIntFromInterval(1, 10);
      const res = await fetch(
        `https://picsum.photos/v2/list?page=${randomPageNumber}&limit=${limit}`,
      );

      const data = await res.json();
      return data;
    } catch (e) {
      console.log(e);
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  const addNewArticle = async (newArticle) => {
    const data = await fetchImages(1);
    const today = new Date().toLocaleDateString().slice(0, 10);
    const dateFormatted = today.replaceAll('-', '.');

    const newArticleWithImage = {
      ...newArticle,
      date: dateFormatted,
      img: data[0].download_url,
    };

    console.log(newArticleWithImage);

    setArticles((articles) => [...articles, newArticleWithImage]);
  };

  useEffect(() => {
    async function init() {
      const data = await fetchImages(10);

      addImagesToArticles(data);
    }

    init();
  }, []);

  return { areArticlesLoading, articles, error, addNewArticle };
};
