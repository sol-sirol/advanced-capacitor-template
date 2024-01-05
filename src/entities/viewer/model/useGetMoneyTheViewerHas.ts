import { useCryptocurrencyStore } from "./store";

export const useGetMoneyTheViewerHas = () => {
  const moneyTheViewerHas = useCryptocurrencyStore((store) => {
    return (store.bitcoinPrice * store.numberOfBitcoinsTheViewerHas).toFixed(2);
  });

  return moneyTheViewerHas;
};
