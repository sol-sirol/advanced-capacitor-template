import { Capacitor } from "@capacitor/core";
import { App as RootApp, View, f7 } from "framework7-react";
import { useEffect } from "react";

import {
  addHapticListeners,
  handleBackButton,
  handleKeyboard,
  toast,
} from "@shared/lib/f7-helpers";
import { ErrorBoundary } from "@shared/ui/error-boundary";
import { UpdateModal } from "@shared/ui/update-modals";

import { routes } from "./routes";

declare global {
  interface Window {
    inDev: () => void;
  }
}
window.inDev = () => toast("Функция в разработке");

const f7params = {
  name: "advanced-capacitor-template",
  id: "com.example.app",
  dialog: {
    buttonOk: "Oк",
    buttonCancel: "Отмена",
  },
  navbar: {
    // mdCenterTitle: true, // центрирование тайтла в навбаре на андроид
  },
  routes: routes,
};

export const App = () => {
  useEffect(() => {
    //блур с активного элемента при переходе между экранами
    f7.views.main.router.on(
      "routeChange",
      (newRoute, previousRoute, router) => {
        const activeElement = window.document.activeElement as HTMLElement;
        activeElement?.blur();
      },
    );

    if (Capacitor.isNativePlatform()) {
      handleBackButton();
      handleKeyboard();
      addHapticListeners();
    }
  }, []);

  return (
    <ErrorBoundary>
      <RootApp {...f7params}>
        <View main className="safe-areas" url="/main" />
        <UpdateModal />
      </RootApp>
    </ErrorBoundary>
  );
};
