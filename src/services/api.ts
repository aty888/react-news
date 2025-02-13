import axios from 'axios';

const API_KEY = 'pub_68885543b54011f167d63ab7aab0701aa1706';
const BASE_URL = 'https://newsdata.io/api/1/latest';

export const fetchNews = async (query: string, country: string = 'kr', language: string = 'ko', category: string = 'technology') => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        apikey: API_KEY,
        q: query,
        country: country,
        language: language,
        category: category,
      }
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
    
// import axios from 'axios';

// const API_KEY = 'c6158630e7994f3d9c5d3027c7c0a34a';
// const BASE_URL = 'https://newsapi.org/v2/top-headlines';

// export const fetchNews = async (query: string, country: string = 'us', category: string = 'business') => {
//   try {
//     const response = await axios.get(BASE_URL, {
//       params: {
//         apiKey: API_KEY,
//         q: query,
//         country: country,
//         category: category,
//       }
//     });
//     return response.data;
//   } catch (error) {
//     console.error(error);
//     throw error;
//   }
// };


// import axios from 'axios';

// const API_TOKEN = 'UpshUQ76DM0pYQaEo45cYlswYqBG64VEToBuXD9e';
// const BASE_URL = 'https://api.thenewsapi.com/v1/news/all';

// export const fetchNews = async (query: string, locale: string = 'kr', language: string ='ko', limit: number = 3) => {
//   try {
//     const response = await axios.get(BASE_URL, {
//       params: {
//         api_token: API_TOKEN,
//         q: query,
//         locale: locale,
//         language: language,
//         limit: limit,
//       }
//     });
//     return response.data;
//   } catch (error) {
//     console.error(error);
//     throw error;
//   }
// };


// "X-Naver-Client-Id": 'YgT0zNRfKF11PHFhIqdW',
// "X-Naver-Client-Secret": '5VGECjym1a',
//naver  
