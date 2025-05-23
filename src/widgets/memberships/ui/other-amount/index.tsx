import React from "react";
import { MembershipWrapper } from "../membership-wrapper";

export const OtherAmount = () => {
  return (
    <MembershipWrapper>
      <div className="flex flex-col gap-[10px] justify-center align-center w-full h-full">
        <span className="text-[28px] font-[400] text-center">Other Amount</span>
      </div>
    </MembershipWrapper>
  );
};
