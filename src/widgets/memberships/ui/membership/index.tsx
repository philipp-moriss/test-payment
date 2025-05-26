import { membershipStore, type Membership as MembershipType } from "@/stores/membership-store";
import React, { type PropsWithChildren } from "react";
import { MembershipWrapper } from "../membership-wrapper";
import { observer } from "mobx-react-lite";

interface MembershipProps {
  member: MembershipType;
}

export const Membership: React.FC<PropsWithChildren<MembershipProps>> = observer(({
  member,
}) => {
  const { selectedMembership, isOther } = membershipStore;

  const handleClick = () => {
    membershipStore.setSelectedMembership(member.id)
  }

  return (
    <MembershipWrapper isActive isSelected={selectedMembership?.id === member.id && !isOther} onClick={handleClick}>
      <div className="flex flex-col gap-[10px] justify-center align-center w-full h-full">
        <span className="text-[40px] font-[400] text-center">
          {`$${member.price.dollars}/m`}
        </span>
        <span className="text-[24px] text-center">
          {member.price.nis} NIS
        </span>
      </div>
    </MembershipWrapper>
  );
});
