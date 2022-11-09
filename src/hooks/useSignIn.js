
import { useApolloClient, useMutation } from "@apollo/client";
import { AUTHENTICATE } from "../graphql/mutations";
import useAuthStorage from './useAuthStorage';


const credentials = {
    username: '',
    password: ''
}

const useSignIn = () => {
    const[mutate, result] = useMutation(AUTHENTICATE)
    const authStorage = useAuthStorage();
    const apolloClient = useApolloClient();

    if(result.error){
        console.log(result.error)
    }

    const signIn = async ({username, password}) => {
        credentials.username = username;
        credentials.password = password;
        return mutate({ variables: { credentials }})
    }

    if(result.data){
        console.log(result.data.authenticate.accessToken)
        authStorage.setAccessToken(result.data.authenticate.accessToken);
        apolloClient.resetStore();
    }

    return [signIn, result];
}

export default useSignIn