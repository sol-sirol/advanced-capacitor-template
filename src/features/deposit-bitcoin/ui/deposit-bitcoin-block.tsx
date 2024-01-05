import { Block, BlockTitle, Button, List, ListInput } from "framework7-react";
import { HTMLAttributes, useState } from "react";
import { twMerge } from "tailwind-merge";

import { useCryptocurrencyStore } from "@entities/viewer";

import { toast } from "@shared/lib/f7-helpers";

import { bitcoinToString } from "../utils/bitcoin-to-string";

export const DepositBitcoinBlock = ({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => {
  const [value, setValue] = useState<string>("5");

  const { numberOfBitcoinsTheViewerHas, setNumberOfBitcoinsTheViewerHas } =
    useCryptocurrencyStore();

  const addBitcoins = () => {
    if (+value > 100) {
      toast(`А морда не треснет??? ${bitcoinToString(+value)} он захотел!`);
    } else {
      setNumberOfBitcoinsTheViewerHas(
        numberOfBitcoinsTheViewerHas + Number(value),
      );
    }
  };

  return (
    <div className={twMerge(className)} {...props}>
      <BlockTitle>Добавить {bitcoinToString(+value)} на счет</BlockTitle>

      <List strongIos dividersIos insetIos>
        <ListInput
          clearButton
          label="Количество биткоинов для добавления"
          placeholder="Введите количество биткоинов"
          type="number"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        ></ListInput>
      </List>

      <Block>
        <Button
          large
          outline
          fill
          disabled={value === "" || value === "0"}
          onClick={addBitcoins}
        >
          Добавить
        </Button>
      </Block>
    </div>
  );
};
