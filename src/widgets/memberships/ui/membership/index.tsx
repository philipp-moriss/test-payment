import type { MembershipPrice } from "@/stores/membership-store";
import React, { type PropsWithChildren } from "react";
import { MembershipWrapper } from "../membership-wrapper";

interface MembershipProps {
  member: MembershipPrice;
}

export const Membership: React.FC<PropsWithChildren<MembershipProps>> = ({
  member,
}) => {
  return (
    <MembershipWrapper>
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
};
