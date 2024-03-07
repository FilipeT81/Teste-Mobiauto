import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Toast, { ErrorToast, SuccessToast } from "react-native-toast-message";
import AuthRoutes from "@routes/auth.routes";
import { Container } from "./styles";

const Routes: React.FC = () => {
  const toastConfig = {
    success: (props: any) => (
      <SuccessToast
        {...props}
        text1Style={{
          fontSize: 15,
        }}
        text2Style={{
          fontSize: 13,
          color: "black",
        }}
        style={{ height: 95, borderLeftColor: "green" }}
        text2NumberOfLines={4}
        onPress={() => Toast.hide()}
        onLeadingIconPress={() => Toast.hide()}
        onTrailingIconPress={() => Toast.hide()}
      />
    ),

    error: (props: any) => (
      <ErrorToast
        {...props}
        text1Style={{
          fontSize: 15,
        }}
        text2Style={{
          fontSize: 13,
          color: "black",
        }}
        style={{ height: 95, borderLeftColor: "red" }}
        text2NumberOfLines={4}
        onPress={() => Toast.hide()}
        onLeadingIconPress={() => Toast.hide()}
        onTrailingIconPress={() => Toast.hide()}
      />
    ),
    warning: (props: any) => (
      <ErrorToast
        {...props}
        text1Style={{
          fontSize: 14,
        }}
        text2Style={{
          fontSize: 13,
          color: "black",
        }}
        style={{ height: 95, borderLeftColor: "orange" }}
        text2NumberOfLines={4}
        onPress={() => Toast.hide()}
        onLeadingIconPress={() => Toast.hide()}
        onTrailingIconPress={() => Toast.hide()}
      />
    ),
  };

  return (
    <>
      <Container>
        <NavigationContainer>
          <AuthRoutes initialRouteName={"Login"} />
          <Toast config={toastConfig} />
        </NavigationContainer>
      </Container>
    </>
  );
};

export default Routes;
