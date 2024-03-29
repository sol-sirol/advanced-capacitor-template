import { Page, View, Views } from "framework7-react";

import { NavBar } from "@widgets/navigation";

//TODO Обсудить реализацию табов (возможно текущая схема не оптимальна)
export const MainPage = () => {
  return (
    <Page pageContent={false}>
      <Views tabs>
        <View
          tab
          tabActive
          id="tab-home"
          name="home"
          url="/home"
          iosSwipeBack={false}
          mdSwipeBack={false}
        />
        <View
          tab
          id="tab-profile"
          name="profile"
          url="/profile"
          iosSwipeBack={false}
          mdSwipeBack={false}
        />
      </Views>
      <NavBar />
    </Page>
  );
};
