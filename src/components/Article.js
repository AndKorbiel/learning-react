import { Col, Image } from 'react-bootstrap';
import defaultImage from '../assets/default_image.png';

export const Article = ({ article }) => {
  const { content, date, img, metatags, title } = article;

  return (
    <Col>
      <Image
        src={img !== '' ? img : defaultImage}
        alt="thumbnail"
        className="thumbnail-img"
      />
      <h2>{title}</h2>

      {metatags.map((metatag, index) => (
        <span key={index}>{metatag}</span>
      ))}

      <p>{date}</p>
      <p>{content}</p>
    </Col>
  );
};
