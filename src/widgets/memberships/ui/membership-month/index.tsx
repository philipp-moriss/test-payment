import { MembershipList } from "../membership-list";
import { membershipStore } from "@/stores/membership-store";
import { observer } from "mobx-react-lite";

export const MembershipMonth = observer(() => {
  const { monthlyPrice } = membershipStore;
  return (
    <div className="flex flex-col gap-[36px]">
      <MembershipList listData={monthlyPrice} />
      <span className="text-[16px] font-medium text-center text-[#737373]">
        All donations are tax-deductible in Israel and the US
      </span>
    </div>
  );
});
