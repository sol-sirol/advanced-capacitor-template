import { Block, BlockFooter } from "framework7-react";
import { useEffect } from "react";
import { twMerge } from "tailwind-merge";
import { useShallow } from "zustand/react/shallow";

import { BitcoinIcon } from "@shared/ui/icons";

import { useGetPeakBitcoinValue } from "../hooks/useGetPeakBitcoinValue";
import { useCryptocurrencyStore } from "../model/store";
import { useGetMoneyTheViewerHas } from "../model/useGetMoneyTheViewerHas";

type Props = {
  className?: string;
};

export const ViewerAccount = ({ className }: Props) => {
  const [bitcoinValue, maxMoney] = useGetPeakBitcoinValue();

  // TODO: Пример использования useShallow
  // const [getNumberOfBitcoinsTheViewerHas, getBitcoinPrice] =
  //   useCryptocurrencyStore(
  //     useShallow((store) => [
  //       store.getNumberOfBitcoinsTheViewerHas,
  //       store.getBitcoinPrice,
  //     ]),
  //   );

  const {
    getNumberOfBitcoinsTheViewerHas,
    getBitcoinPrice,
    numberOfBitcoinsTheViewerHas,
    bitcoinPrice,
  } = useCryptocurrencyStore();
  const moneyTheViewerHas = useGetMoneyTheViewerHas();

  useEffect(() => {
    console.log("Bitcoin");
    getNumberOfBitcoinsTheViewerHas(13);

    setInterval(() => {
      getBitcoinPrice();
    }, 1000);
  }, [getNumberOfBitcoinsTheViewerHas, getBitcoinPrice]);

  return (
    <Block
      className={twMerge(
        className,
        "my-card",
        "m-4 p-2 border-green-600 border-2 rounded-2xl",
      )}
    >
      <div className="flex items-center justify-between gap-2">
        <BitcoinIcon width={44} height={44}></BitcoinIcon>
        <div className="flex flex-row  flex-1">
          Количество: {numberOfBitcoinsTheViewerHas} Стоимость: {bitcoinPrice}
        </div>
        <div className="">В рублях: {moneyTheViewerHas}</div>
      </div>

      <BlockFooter>
        Максимальная стоимость биткоина: {bitcoinValue} Максимальная возможная
        выручка: {maxMoney}
      </BlockFooter>
    </Block>
  );
};
