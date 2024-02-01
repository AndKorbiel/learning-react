import { createContext, React, useContext } from 'react';

export const ArticleContext = createContext(null);
export const ArticleContextProvider = ({ initValue, children }) => (
  <ArticleContext.Provider value={initValue}>
    {children}
  </ArticleContext.Provider>
);

export const useArticleContext = () => {
  const initValue = useContext(ArticleContext);
  return initValue;
};
