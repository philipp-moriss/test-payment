import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import styles from "./membership.module.css";
import { MembershipMonth } from "./ui/membership-month";
import { OneTime } from "./ui/one-time";
import { membershipStore } from "@/stores/membership-store";
import { observer } from "mobx-react-lite";

export const MembershipWidget = observer(() => {
  const { setIsMonthly } = membershipStore;

  const onChange = (value: string) => {
    setIsMonthly(value === "monthly");
  };
  return (
    <div className={styles.wrapper}>
      <Tabs defaultValue="monthly" className="gap-[0px]" onValueChange={onChange}>
        <div className="w-full flex justify-center align-center">
          <TabsList className="flex justify-center align-center gap-4 max-w-[262px] bg-[#F2F1FF]">
            <TabsTrigger value="monthly">Monthly</TabsTrigger>
            <TabsTrigger value="onetime">One-time</TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="monthly" className="w-full">
          <MembershipMonth />
        </TabsContent>
        <TabsContent value="onetime" className="w-full">
          <OneTime />
        </TabsContent>
      </Tabs>
    </div>
  );
});
