import { observer } from "mobx-react-lite";
import { MembershipWrapper } from "../membership-wrapper";
import { membershipStore } from "@/stores/membership-store";

export const OtherToggle = observer(() => {
  const { isOther } = membershipStore;

  const handleOtherChangeByClick = () => {
    membershipStore.setIsOther(true)
  }

  return (
    <MembershipWrapper isActive isSelected={isOther} onClick={handleOtherChangeByClick}>
      <div className="flex flex-col gap-[10px] justify-center align-center w-full h-full">
        <span className="text-[28px] font-[400] text-center">Other Amount</span>
      </div>
    </MembershipWrapper>
  );
});
