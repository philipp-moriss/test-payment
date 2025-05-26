import { observer } from "mobx-react-lite";
import { membershipStore } from "@/stores/membership-store";
import { Input } from "@/components/ui/input";
import { Tabs, TabsTrigger } from "@/components/ui/tabs";
import { TabsList } from "@/components/ui/tabs";

export const OtherAmount = observer(() => {
  const { otherAmount, setOtherAmount } = membershipStore;

  const defaultAmount = otherAmount?.price || 0;
  const defaultCurrency = otherAmount?.currency || "dollars";

  const handleCurrencyChange = (value: string) => {
    setOtherAmount(defaultAmount, value as "dollars" | "nis");
  };

  const handleAmountChange = (value: number) => {
    setOtherAmount(value, defaultCurrency);
  };

  return (
    <div className="flex flex-col gap-[10px] justify-center align-center w-full h-full">
      <Tabs defaultValue="dollars" onValueChange={handleCurrencyChange}>
        <TabsList className="flex justify-center align-center gap-4 max-w-[262px] bg-[#F2F1FF]">
          <TabsTrigger value="dollars">Dollars</TabsTrigger>
          <TabsTrigger value="nis">NIS</TabsTrigger>
        </TabsList>
      </Tabs>

      <Input
        placeholder="Other Amount"
        value={defaultAmount}
        onChange={(e) => handleAmountChange(Number(e.target.value))}
      />
    </div>
  );
});
