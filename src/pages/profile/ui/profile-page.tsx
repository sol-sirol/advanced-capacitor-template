import { Page, Navbar } from "framework7-react";

import { DepositBitcoinBlock } from "@features/deposit-bitcoin";

import { ViewerAccount, ViewerAvatar } from "@entities/viewer";

export const ProfilePage = () => {
  return (
    <Page noNavbar>
      <Navbar title="My Profile" />
      <div className="flex items-center justify-between p-4">
        <div>Здравствуй!</div>
        <ViewerAvatar></ViewerAvatar>
      </div>

      <ViewerAccount></ViewerAccount>

      <DepositBitcoinBlock></DepositBitcoinBlock>
    </Page>
  );
};
