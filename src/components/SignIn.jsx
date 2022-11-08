import { Pressable, View, TextInput, Text, StyleSheet } from "react-native";
import { Formik, useField } from 'formik';
import FormikTextInput from "./FormikTextInput";

const initialValues = {
    username: '',
    password: '',
  };
  
const SignInForm = ({ onSubmit }) => {

    const styles = StyleSheet.create({
        input: {
            height: 40,
            margin: 5,
            borderWidth: 1,
            padding: 10,
            borderColor: 'grey'
          },
          submit: {
              height: 40,
              margin: 5,
              borderWidth: 1,
              padding: 10,
              backgroundColor: '#0366d6',
              borderColor: 'grey'
          },
          text: {
            alignSelf: 'center',
            color: 'white'
        }
    })

    return (
        <View>
            <FormikTextInput
                style={styles.input}
                name="username"
                placeholder="username"
            />
            <FormikTextInput
                style={styles.input}
                name="password"
                placeholder="password"
            />
            <Pressable onPress={onSubmit} style={styles.submit}>
                <Text style={styles.text}>Sign In</Text>
            </Pressable>
        </View>
    )
}

const SignIn = () => {
    const onSubmit = values => {
        console.log(values)
    }

    return(
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
            { ({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} /> }
        </Formik>
    )
}

export default SignIn

/*
const SignIn = () => {
  const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 5,
      borderWidth: 1,
      padding: 10,
      borderColor: 'grey'
    },
    submit: {
        height: 40,
        margin: 5,
        borderWidth: 1,
        padding: 10,
        backgroundColor: '#0366d6',
        borderColor: 'grey'
    },
    text: {
        alignSelf: 'center',
        color: 'white'
    }
  });

  const handleSignInSubmit = (values) => {
    console.log(values)
  }

  return (
    <View>
      <TextInput style={styles.input} name="username" placeholder="Username" />
      <TextInput style={styles.input} name="password" placeholder="Password" />
      <Pressable style={styles.submit} onPress={handleSignInSubmit}>
        <Text style={styles.text}>Submit</Text>
      </Pressable>
    </View>
  );
};

export default SignIn;*/
