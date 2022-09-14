import { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import Article from './Article';

export default function Content() {

  const [articles, setArticles] = useState([])

  useEffect(() => {
    fetch("https://newsapi.org/v2/everything?q=Apple&from=2022-09-14&sortBy=popularity&apiKey=b1ee5f6bc3bf477fa5c52bcbf6ee253e")
    .then(resp => resp.json())
    .then(data => setArticles(data.articles))
  }, [])

  const articleElements = articles.map(article => {
    return (
      <Article article={article}/>
    )
  })
  
    return (
      <View>
          {articleElements}
      </View>
    );
  }