import { Alert, Platform } from "react-native";

const alertPolyfill = (title: any, description: any, options: any[] = [], extra: any = "") => {
  const result = window.confirm(
    [title, description].filter(Boolean).join("\n")
  );

  if (result) {
    const confirmOption = options.find(({ style }) => style !== "cancel");
    confirmOption && confirmOption.onPress();
  } else {
    const cancelOption = options.find(({ style }) => style === "cancel");
    cancelOption && cancelOption.onPress();
  }
};

export const alert = Platform.OS === "web" ? alertPolyfill : Alert.alert;

