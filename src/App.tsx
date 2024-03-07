import { Suspense, useEffect } from "react";
import "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components";
import {
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
  useFonts,
} from "@expo-google-fonts/inter";

import {
  RedHatText_400Regular,
  RedHatText_500Medium,
  RedHatText_700Bold,
} from "@expo-google-fonts/red-hat-text";

import index from "@styles/Theme";
import Routes from "@routes/index";
import { LoadingContainer } from "@src/components/LoadingContainer";
import { AxiosInterceptor } from "./services/api";

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    RedHatText_400Regular,
    RedHatText_500Medium,
    RedHatText_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <ThemeProvider theme={index}>
        <StatusBar style="dark" />
        <Suspense fallback={<LoadingContainer label={false} />}>
          <AxiosInterceptor>
            <Routes />
          </AxiosInterceptor>
        </Suspense>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
