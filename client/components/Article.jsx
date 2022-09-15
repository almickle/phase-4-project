import { setNestedObjectValues } from 'formik';
import { View, ScrollView, StyleSheet, Image, Text } from 'react-native';

export default function Article( { article }) {

  // const content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Natoque penatibus et magnis dis parturient montes nascetur ridiculus. Scelerisque purus semper eget duis at tellus at urna condimentum. Suspendisse faucibus interdum posuere lorem ipsum dolor sit. Sed pulvinar proin gravida hendrerit lectus. Odio facilisis mauris sit amet massa vitae tortor. Eget egestas purus viverra accumsan in nisl nisi scelerisque eu. Lectus magna fringilla urna porttitor rhoncus. Aliquam id diam maecenas ultricies mi eget mauris pharetra et. Mattis pellentesque id nibh tortor id aliquet. Pretium vulputate sapien nec sagittis. Tristique senectus et netus et malesuada fames ac. Netus et malesuada fames ac. Tristique senectus et netus et malesuada fames ac turpis egestas. Nibh venenatis cras sed felis eget velit aliquet. Sed odio morbi quis commodo odio. Amet nulla facilisi morbi tempus iaculis urna id volutpat lacus. Eleifend donec pretium vulputate sapien nec sagittis aliquam. Bibendum est ultricies integer quis auctor elit sed vulputate. Porttitor leo a diam sollicitudin tempor id. Eu ultrices vitae auctor eu augue ut. Morbi tristique senectus et netus et malesuada. Quisque id diam vel quam elementum pulvinar etiam. Tincidunt praesent semper feugiat nibh sed pulvinar. Ut tellus elementum sagittis vitae et leo duis ut diam. Aliquam etiam erat velit scelerisque. Tristique sollicitudin nibh sit amet commodo nulla facilisi nullam. At auctor urna nunc id cursus. Etiam erat velit scelerisque in dictum. Risus feugiat in ante metus dictum at tempor commodo. Ac tincidunt vitae semper quis lectus. Sed felis eget velit aliquet sagittis id. Volutpat ac tincidunt vitae semper quis lectus nulla at volutpat. Bibendum est ultricies integer quis. Ultricies leo integer malesuada nunc vel risus commodo viverra maecenas. Pellentesque habitant morbi tristique senectus et netus. Maecenas volutpat blandit aliquam etiam erat velit scelerisque. Ut etiam sit amet nisl purus in mollis nunc. Sed risus pretium quam vulputate dignissim suspendisse. Etiam tempor orci eu lobortis elementum nibh."

  const { title, urlToImage, category, content, description, author, source, publishedAt
  } = article
  // const content = article.content
  // const slicedContent = content.slice(0, 194)
  console.log(article)

  const date = publishedAt.slice(0,10)

  const newsChannel = source.name
    return (
      <ScrollView>
        <View style={styles.container}>
          <Image
          style={styles.image}
          source={{
            uri: urlToImage,
          }}
          />
          <Text fontWeight='bold' 
          style={styles.name}>{title}</Text>
          <Text style={styles.fonts}>Authors: {author}</Text>
          <Text style={styles.fonts}>Sources: {newsChannel}</Text>
          <Text style={styles.fonts}>Date: {date}</Text>

          <Text style={styles.fonts}>{category}</Text>
          {/* <Text style={styles.fonts}>{content}</Text> */}
          
          {/* <Image source={{uri: {image}}}></Image> */}
          </View>
      </ScrollView>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      border: 'solid'
    },
    fonts: {
      marginBottom: 8,
    },
    user: {
      flexDirection: 'row',
      marginBottom: 6,
    },
    image: {
      width: 500,
      height: 250,
      marginRight: 10,
      alignItems: 'center'
    },
    name: {
      fontSize: 16,
      marginTop: 5,
    }, logo: {
      width: 66,
      height: 58,
      fontWeight: "bold",
      alignItems: "center",

    }
    });