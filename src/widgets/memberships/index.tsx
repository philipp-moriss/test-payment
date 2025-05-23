import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import styles from "./membership.module.css";
import { MembershipMonth } from "./ui/membership-month";

export const MembershipWidget = () => {
  return (
    <div className={styles.wrapper}>
      <Tabs defaultValue="monthly">
        <div className="w-full flex justify-center align-center">
        <TabsList className="flex justify-center align-center gap-4 max-w-[262px] bg-[#F2F1FF]">
          <TabsTrigger value="monthly">Monthly</TabsTrigger>
          <TabsTrigger value="onetime">One-time</TabsTrigger>
        </TabsList>
        </div>
        <TabsContent value="monthly" className="w-full">
          <MembershipMonth/>
        </TabsContent>
        <TabsContent value="onetime">Change your password here.</TabsContent>
      </Tabs>
    </div>
  );
};
