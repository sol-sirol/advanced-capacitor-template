import { create } from "zustand";

type CryptocurrencyStoreType = {
  numberOfBitcoinsTheViewerHas: number;
  bitcoinPrice: number;

  setNumberOfBitcoinsTheViewerHas: (value: number) => void;
  getBitcoinPrice: () => Promise<number>;
  getNumberOfBitcoinsTheViewerHas: (id: number) => Promise<number>;
};

export const useCryptocurrencyStore = create<CryptocurrencyStoreType>(
  (set, get) => ({
    bitcoinPrice: 0,
    numberOfBitcoinsTheViewerHas: 0,

    setNumberOfBitcoinsTheViewerHas: (value: number) => {
      set({ numberOfBitcoinsTheViewerHas: value });
    },

    getBitcoinPrice: () => {
      return new Promise<number>((resolve, reject) => {
        const tmp =
          Math.floor(Math.random() * 101) +
          Math.floor(Math.random() * 101) +
          Math.floor(Math.random() * 101) +
          Math.floor(Math.random() * 101);

        set(() => ({ bitcoinPrice: tmp }));
        resolve(tmp);

        // qBitcoinPoints({id: id})
        //   .then((data) => {
        //     set(() => ({ bitcoinPrice: data.bitcoinPoints }));
        //     resolve(data)
        //   })
        //   .catch((err) => {
        //     reject(err)
        //   });
      });
    },

    getNumberOfBitcoinsTheViewerHas: (id: number) => {
      return new Promise<number>((resolve, reject) => {
        const tmp = Math.floor(Math.random() * 11) + id;
        set(() => ({ numberOfBitcoinsTheViewerHas: tmp }));
        resolve(tmp);
      });
    },

    // deleteEverything: () => {
    //   set({}, true);
    // },
  }),
);
