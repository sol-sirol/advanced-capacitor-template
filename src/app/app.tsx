import { App as RootApp, View } from "framework7-react";

import { ErrorBoundary } from "@shared/ui/error-boundary";
import { UpdateModal } from "@shared/ui/update-modals";

import { routes } from "./routes";

const f7params = {
  name: "NameApp",
  id: "ru.apptor.app",
  dialog: {
    buttonOk: "Oк",
    buttonCancel: "Отмена",
  },
  navbar: {
    mdCenterTitle: true, //центрирование тайтла в навбаре на андроид
  },
  routes: routes,
};

export const App = () => {
  return (
    <ErrorBoundary>
      <RootApp {...f7params}>
        <View main className="safe-areas" url="/main" />
        <UpdateModal />
      </RootApp>
    </ErrorBoundary>
  );
};
