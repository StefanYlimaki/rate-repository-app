import { Pressable, View, Text, StyleSheet } from "react-native";
import { Formik } from "formik";
import { useNavigate } from 'react-router-native';

import FormikTextInput from "./FormikTextInput";
import * as yup from 'yup';
import useSignIn from "../hooks/useSignIn";

const initialValues = {
  username: "",
  password: "",
};

const SignInForm = ({ onSubmit }) => {
  const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 5,
      borderWidth: 1,
      padding: 10
    },
    submit: {
      height: 40,
      margin: 5,
      borderWidth: 1,
      padding: 10,
      backgroundColor: "#0366d6",
      borderColor: "grey",
    },
    text: {
      alignSelf: "center",
      color: "white",
    },
  });

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
  );
};

const validationSchema = yup.object().shape({
    username: yup
        .string()
        .min(4, 'Username must be atleast 4 characters long')
        .required('Username is required'),
    password: yup
        .string()
        .min(4, 'Password must be atleast 4 characters long')
        .required('Password is required'),
});

const SignIn = () => {
  const [signIn] = useSignIn();
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    const { username, password } = values;

    try {
      await signIn({ username, password });
      navigate('/')
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Formik 
      initialValues={initialValues} 
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignIn;
