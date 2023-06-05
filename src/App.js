import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import ArticleCard from './ArticleCard';

const {REACT_APP_NEWS_API_KEY} = process.env

function App() {
  const [articles, setArticles] = useState()
  // const articles = []

  const getArticles = () => {
    // console.log('hit getArticle')
    axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${REACT_APP_NEWS_API_KEY}`)
    .then(res => {
      // console.log(res.data)
      setArticles(res.data.articles)
    })
    .catch(theseHands => console.log(theseHands))
  }
  
  // useEffect(getArticles, [])
  useEffect(() => {
    getArticles()
  }, [])

  // console.log('Hit App.js')
  return (
    <div className="App">
       App.js
       <ArticleCard article={articles[0]}/>
       {/* {articles.map(e => console.log(e))} */}
    </div>
  );
}

export default App;
