import { ScrollView, Image, Text } from 'react-native';

export default function Article( { article }) {

    const { title, image, category, content } = article
    return (
      <ScrollView>
          <Text>{title}</Text>
          <Text>{category}</Text>
          {/* <Image source={{uri: {image}}}></Image> */}
      </ScrollView>
    );
  }