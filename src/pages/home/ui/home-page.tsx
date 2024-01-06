import { CapacitorUpdater } from "@capgo/capacitor-updater";
import { Page, Navbar, PageContent } from "framework7-react";
import { useEffect } from "react";

import { Image } from "@shared/ui/images";

export const HomePage = () => {
  useEffect(() => {
    CapacitorUpdater.notifyAppReady();
  }, []);

  return (
    <Page pageContent={false}>
      <Navbar title="home" />
      <PageContent>
        <Image
          width={"100%"}
          height={"100%"}
          size="cover"
          image="https://i.pinimg.com/236x/8c/66/40/8c66407bce59584191fba90baf6f2e39.jpg"
        ></Image>
      </PageContent>
    </Page>
  );
};
