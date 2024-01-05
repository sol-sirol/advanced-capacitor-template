import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.example.app",
  appName: "advanced-capacitor-template",
  webDir: "dist",
  server: {
    androidScheme: "https",
    cleartext: true,
    // url: "http://192.168.1.13:5173",
  },
  plugins: {
    // SplashScreen: {
    //   launchAutoHide: false,
    // },
    CapacitorUpdater: {
      updateUrl: "https://appsync.apptor.tech/api/update",
      statsUrl: "https://appsync.apptor.tech/api/stats",
      autoUpdate: true,
      resetWhenUpdate: true,
    },
  },
};

export default config;
