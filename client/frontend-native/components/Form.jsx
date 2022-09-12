import { Formik } from 'formik';
import { Button, TextInput, View, StyleSheet } from 'react-native';

export default function Form() {
    return (
        <View style={styles.container}>
            <Formik initialValues={{ email: '' }} onSubmit={values => console.log(values)}>
                {({ handleChange, handleBlur, handleSubmit, values }) => (
                    <View>
                        <TextInput
                        onChangeText={handleChange('email')}
                        onBlur={handleBlur('email')}
                        value={values.email}
                        />
                        <Button onPress={handleSubmit} title="Submit" />
                    </View>
                )}
            </Formik>
        </View>
    );
  }

  const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
 
