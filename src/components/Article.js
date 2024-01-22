import Col from 'react-bootstrap/Col';

export const Article = ({ article }) => {
  return (
    <Col>
      <h2>{article.title}</h2>

      {article.metatags.map((metatag, index) => (
        <span key={index}>{metatag}</span>
      ))}
      <p>{article.date}</p>
      <p>{article.content}</p>
    </Col>
  );
};
