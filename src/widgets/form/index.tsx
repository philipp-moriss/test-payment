import { observer } from "mobx-react-lite";
import { Success } from "../../components/success";
import { paymentStore } from "../../stores/payment-store";
import { Loader } from "../../components/loader";
import { FormPayment } from "../../components/form-payment";
import { motion } from "framer-motion";

export const FormPaymentWidget = observer(() => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <div className="flex flex-col gap-[16px] md:gap-[20px] bg-[#ECEBFF] py-[24px] md:py-[40px] px-[12px] md:px-[60px]">
        {paymentStore.step === "form" && (
          <div className="flex justify-left">
            <h3 className="text-[22px] md:text-[38px] font-bold">
              Personal Details
            </h3>
          </div>
        )}
        {paymentStore.step === "loading" && <Loader />}
        {paymentStore.step === "success" && <Success />}
        {paymentStore.step === "form" && <FormPayment />}
      </div>
    </motion.div>
  );
});
