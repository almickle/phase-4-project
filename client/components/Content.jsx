import { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import Article from './Article';

export default function Content() {

  const [articles, setArticles] = useState([])

  // useEffect(() => {
  //   fetch("http://localhost:19006/articles")
  //   .then(resp => resp.json())
  //   .then(data => {
    
  //     setArticles(data)
  //   })
  // }, [])

  // const articleElements = articles.map(article => {
  //   return (
  //     <Article style={{
  //                     justifyContent: 'center',
  //                     display: 'flex',
  //                     flexDirection: 'row',
  //                     marginTop: 60,
  //                    }}
  //              article={article}/>
  //   )
  // })
  
    return (
      <View>
          {/* {articleElements} */}
      </View>
    );
  }