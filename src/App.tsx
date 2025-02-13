import { useEffect, useState } from 'react';
import NewsList from './components/NewsList';
import { fetchNews } from './services/api';
import { NewsArticle } from './types';

function App() {
  const [articles, setArticles] = useState<NewsArticle[] | null>(null);
  const [totalResults, setTotalResults] = useState<number>(0);
  const [nextPage, setNextPage] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);


  useEffect(() => {
    const getNews = async () => {
      setLoading(true);
      try {
        const data = await fetchNews('it');
        setArticles(data.results);
        setTotalResults(data.totalResults);
        setNextPage(data.nextPage);
        console.log('뉴스 데이터:', data);
      } catch (error) {
        console.error('뉴스를 가져오는 중 오류 발생:', error);
      } finally {
        setLoading(false);
      }
    };

    getNews();
  }, []);

  if (loading) {
    return <div>대기 중...</div>;
  }

  if (!articles) {
    return null;
  }

  return (
    <div>
      <h1>뉴스</h1>
      <NewsList news={articles} totalResults={totalResults} nextPage={nextPage} />
    </div>
  );
}

export default App;