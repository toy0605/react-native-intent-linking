
declare module "react-native-intent-linking" {
    declare function openURL(url: string): Promise<void>;
    declare function canOpenURL(url: string): Promise<boolean>;
    declare function getPackageName(url: string): Promise<string | null>;
}