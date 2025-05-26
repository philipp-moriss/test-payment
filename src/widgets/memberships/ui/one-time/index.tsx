import { Input } from "@/components/ui/input";
import { Tabs, TabsTrigger } from "@/components/ui/tabs";
import { observer } from "mobx-react-lite";
import { TabsList } from "@/components/ui/tabs";
import { membershipStore } from "@/stores/membership-store";

export const OneTime = observer(() => {
  const { oneTimeAmount, setOneTimeAmount } = membershipStore;

  const defaultCurrency = oneTimeAmount?.currency || "dollars";
  const defaultAmount = oneTimeAmount?.price || 0;

  const handleCurrencyChange = (value: string) => {
    setOneTimeAmount(defaultAmount, value as "dollars" | "nis");
  };

  const handleAmountChange = (value: string) => {
    setOneTimeAmount(Number(value), defaultCurrency);
  };

  return (
    <div className="flex flex-col gap-[10px] w-full h-full mt-5">
      <span className="text-[16px] font-medium text-center text-[#737373] mb-2">
        Enter sum you want to donate
      </span>
      <div className="flex flex-col gap-[10px] justify-center align-center w-full h-full">
        <Input placeholder="One-time Amount" className="w-full" value={defaultAmount} onChange={(e) => handleAmountChange(e.target.value)} />
        <Tabs defaultValue="dollars" onValueChange={handleCurrencyChange}>
          <TabsList className="flex justify-center align-center gap-4 max-w-[262px] bg-[#F2F1FF]">
            <TabsTrigger value="dollars">Dollars</TabsTrigger>
            <TabsTrigger value="nis">NIS</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
    </div>
  );
});
