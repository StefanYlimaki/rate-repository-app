import { TextInput as NativeTextInput, StyleSheet } from 'react-native';

const styles = StyleSheet.create({});

const TextInput = ({ style, error, ...props }) => {
  const styles = StyleSheet.create({
    textInputStyleOnError: {
        ...style,
        borderColor: '#d73a4a'
    }
  })
  const textInputStyle = [style];
  if(error){
    return <NativeTextInput style={styles.textInputStyleOnError} {...props} />;
  }
  return <NativeTextInput style={textInputStyle} {...props} />;
};

export default TextInput;
