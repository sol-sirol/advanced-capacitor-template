import { useEffect, useState } from "react";

import { useCryptocurrencyStore } from "../model/store";
import { useGetMoneyTheViewerHas } from "../model/useGetMoneyTheViewerHas";

export const useGetPeakBitcoinValue = () => {
  const [value, setValue] = useState<number>(0);
  const [maxMoney, setMaxMoney] = useState<string>("0.00");

  const { bitcoinPrice, numberOfBitcoinsTheViewerHas } =
    useCryptocurrencyStore();

  const moneyTheViewerHas = useGetMoneyTheViewerHas();

  useEffect(() => {
    setValue((prev) => {
      if (bitcoinPrice > prev) {
        return bitcoinPrice;
      }
      return prev;
    });

    if (+moneyTheViewerHas > +maxMoney) {
      setMaxMoney(moneyTheViewerHas);
    }
  }, [bitcoinPrice, numberOfBitcoinsTheViewerHas]);

  return [value, maxMoney];
};
