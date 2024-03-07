import React from "react";
import { Container, TextLoading } from "./styles";
import { ActivityIndicator, Platform } from "react-native";

type Props = {
  label?: boolean;
};

export function LoadingContainer({ label = true }: Props) {
  return (
    <Container isLoadingIos={Platform.OS === "ios"}>
      {label && <TextLoading>Carregando informações ...</TextLoading>}
      <ActivityIndicator color={"#15306E"} size={"large"} />
    </Container>
  );
}

export default LoadingContainer;
