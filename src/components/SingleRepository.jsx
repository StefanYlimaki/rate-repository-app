import { View } from "react-native";
import { useParams } from "react-router-native";
import useRepositories from "../hooks/useRepositories";
import RepositoryItem from "./RepositoryItem";
import Text from "./Text";

const SingleRepository = () => {
  const { id } = useParams();
  const { repository } = useRepositories(id);

  if (repository) {
    return <RepositoryItem showUrl={true} repository={repository} />;
  }
  return <Text>Loading...</Text>
};

export default SingleRepository;
