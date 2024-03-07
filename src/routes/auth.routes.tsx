import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "@src/pages/Home";

const { Navigator, Screen } = createStackNavigator();

type Props = {
  initialRouteName: string;
};

const AuthRoutes: React.FC<Props> = ({ initialRouteName }: Props) => {
  return (
    <Navigator
      initialRouteName={initialRouteName}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="Home" component={Home} />
    </Navigator>
  );
};

export default AuthRoutes;
