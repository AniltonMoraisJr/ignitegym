import React from "react";
import { Center, Spinner } from "native-base";

// import { Container } from './styles';

const Loading: React.FC = () => {
  return (
    <Center flex={1} bg={"gray.700"}>
      <Spinner color="green.500" />
    </Center>
  );
};

export default Loading;
