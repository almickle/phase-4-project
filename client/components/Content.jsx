import { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import Article from './Article';

export default function Content() {

  const [articles, setArticles] = useState([])

  useEffect(() => {
    fetch("http://127.0.0.1:3000/articles")
    .then(resp => resp.json())
    .then(data => setArticles(data))
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