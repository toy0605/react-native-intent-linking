
declare module "react-native-intent-linking" {
    function openURL(url: string): Promise<void>;
    function canOpenURL(url: string): Promise<boolean>;
    function getPackageName(url: string): Promise<string | null>;
}