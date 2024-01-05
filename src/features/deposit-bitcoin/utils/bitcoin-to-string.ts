import { num2str } from "@shared/lib/utils";

export const bitcoinToString = (bitcoins: number) => {
  const tmp =
    bitcoins + " " + num2str(bitcoins, ["биткоин", "биткоина", "биткоинов"]);
  return tmp;
};
