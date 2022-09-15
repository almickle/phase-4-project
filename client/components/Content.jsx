import { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import Article from './Article';

export default function Content() {

  const [articles, setArticles] = useState([])
  useEffect(() => {
    fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=b1ee5f6bc3bf477fa5c52bcbf6ee253e")
    .then(resp => resp.json())
    .then(data => {
    
      setArticles(data.articles)
    })
  }, [])


  const articleElements = articles.map(article => {
    return (
      <Article style={{
                      justifyContent: 'center',
                      display: 'flex',
                      flexDirection: 'row',
                      marginTop: 60
                     }}
               article={article}/>
    )
  })
  
    return (
      <View>
          {articleElements}
      </View>
    );
  }