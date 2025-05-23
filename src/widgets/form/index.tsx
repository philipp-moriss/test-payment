import { observer } from "mobx-react-lite";
import { Success } from "../../components/success";
import { paymentStore } from "../../stores/payment-store";
import { Loader } from "../../components/loader";
import { FormPayment } from "../../components/form-payment";

export const FormPaymentWidget = observer(() => {
  return (
    <div className="flex flex-col gap-[20px]">
      <div className="flex justify-left">
        <h3 className="text-[38px] font-bold">Personal Details</h3>
      </div>
      {paymentStore.step === "loading" && <Loader />}
      {paymentStore.step === "success" && <Success />}
      {paymentStore.step === "form" && <FormPayment />}
    </div>
  );
});
