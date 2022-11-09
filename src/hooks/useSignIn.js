
import { useMutation } from "@apollo/client";
import { AUTHENTICATE } from "../graphql/mutations";

const credentials = {
    username: '',
    password: ''
}

const useSignIn = () => {
    const[mutate, result] = useMutation(AUTHENTICATE)

    if(result.error){
        console.log(result.error)
    }

    const signIn = async ({username, password}) => {
        credentials.username = username;
        credentials.password = password;
        return mutate({ variables: { credentials }})
    }

    return [signIn, result];
}

export default useSignIn