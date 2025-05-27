import { observer } from "mobx-react-lite";
import { Success } from "../../components/success";
import { paymentStore } from "../../stores/payment-store";
import { Loader } from "../../components/loader";
import { FormPayment } from "../../components/form-payment";

export const FormPaymentWidget = observer(() => {
  return (
    <div className="flex flex-col gap-[16px] md:gap-[20px] bg-[#ECEBFF] py-[24px] md:py-[40px] px-[12px] md:px-[60px]">
      {paymentStore.step === "form" && (
        <div className="flex justify-left">
          <h3 className="text-[22px] md:text-[38px] font-bold">Personal Details</h3>
        </div>
      )}
      {paymentStore.step === "loading" && <Loader />}
      {paymentStore.step === "success" && <Success />}
      {paymentStore.step === "form" && <FormPayment />}
    </div>
  );
});
