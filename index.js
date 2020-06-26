import { Linking, NativeModules, Platform } from "react-native";

const { RNLinkingWithIntent } = NativeModules;

export function openURL(url) {
  if (Platform.OS !== "android" || url.indexOf("intent:") !== 0) return Linking.openURL(url);

  if (RNLinkingWithIntent) {
    return (resolve) => RNLinkingWithIntent.openURL(url);
  }
  else {
    throw new Error("Not Found Modules");
  }
};

export function canOpenURL(url) {
  if (Platform.OS !== "android" || url.indexOf("intent:") !== 0) return Linking.canOpenURL(url);

  if (RNLinkingWithIntent) {
    return RNLinkingWithIntent.canOpenURL(url);
  }
  else {
    throw new Error("Not Found Modules");
  }
};

export function getPackageName(url) {
    if (Platform.OS === "android" && url.indexOf("intent:") === 0) {
      
    }
    return new Promise((resolve) => resolve(null));
}