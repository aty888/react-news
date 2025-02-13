import { NewsArticle } from '../types';

interface NewsListProps {
  news: NewsArticle[];
  totalResults: number;
  nextPage: string;
}

const NewsList = ({
  news,
}: NewsListProps) => {
  return (
    <div>
      {news.map((item, index) => (
          <div key={index}>
            <a href={item.url} target="_blank" rel="noreferrer">
              {/* <img src={item.image_url} alt={item.title} width={100} /> */}
              <h2>{item.title}</h2>
              {/* <p>{item.description}</p> */}
            </a>
          </div>
        )
      )}
    </div>
  );
};

export default NewsList;