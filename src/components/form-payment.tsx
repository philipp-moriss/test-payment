import { observer } from "mobx-react-lite";
import { useForm, Controller } from "react-hook-form";
import { IMaskInput } from "react-imask";
import { paymentStore } from "../stores/payment-store";
import styles from "./form-payment.module.css";
import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";

interface FormValues {
  amount: string;
  cardNumber: string;
  expiryDate: string;
  cvc: string;
}

export const FormPayment = observer(function FormPayment() {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    mode: "onBlur",
    defaultValues: { amount: "", cardNumber: "", expiryDate: "", cvc: "" },
  });

  function onSubmit(data: FormValues) {
    paymentStore.submitForm(data);
    if (window) {
      const payload = {
        type: "payment-success",
        payload: {
          amount: data.amount,
          cardNumber: data.cardNumber,
          expiryDate: data.expiryDate,
        },
      };
      window?.parent?.postMessage(payload, "*");
      console.log("SEND REQUEST TO SERVER");
    }
  }

  return (
    <form
      className={styles.formWrapper}
      onSubmit={handleSubmit(onSubmit)}
      aria-label="Payment form"
    >
      <label className={styles.formLabel}>Amount</label>
      <Controller
        name="amount"
        control={control}
        rules={{ required: "Enter amount" }}
        render={({ field }) => (
          <Input
            {...field}
            type="number"
            min="1"
            placeholder="0"
            className={styles.inputCartoon}
            aria-invalid={!!errors.amount}
          />
        )}
      />
      {errors.amount && (
        <span className={styles.errorCartoon}>{errors.amount.message}</span>
      )}

      <label className={styles.formLabel}>Card number</label>
      <Controller
        name="cardNumber"
        control={control}
        rules={{
          required: "Enter card number",
          pattern: {
            value: /^\d{4} \d{4} \d{4} \d{4}$/,
            message: "Format: 0000 0000 0000 0000",
          },
        }}
        render={({ field }) => (
          <IMaskInput
            {...field}
            mask="0000 0000 0000 0000"
            unmask={false}
            placeholder="0000 0000 0000 0000"
            inputRef={field.ref}
            className={styles.inputCartoon}
            aria-invalid={!!errors.cardNumber}
            inputMode="numeric"
            onAccept={field.onChange}
          />
        )}
      />
      {errors.cardNumber && (
        <span className={styles.errorCartoon}>{errors.cardNumber.message}</span>
      )}

      <label className={styles.formLabel}>Expiry date</label>
      <Controller
        name="expiryDate"
        control={control}
        rules={{
          required: "Enter expiry date",
          pattern: {
            value: /^(0[1-9]|1[0-2])\/\d{2}$/,
            message: "Format: MM/YY",
          },
        }}
        render={({ field }) => (
          <IMaskInput
            {...field}
            mask="00/00"
            unmask={false}
            placeholder="MM/YY"
            inputRef={field.ref}
            className={styles.inputCartoon}
            aria-invalid={!!errors.expiryDate}
            inputMode="numeric"
            onAccept={field.onChange}
          />
        )}
      />
      {errors.expiryDate && (
        <span className={styles.errorCartoon}>{errors.expiryDate.message}</span>
      )}

      <label className={styles.formLabel}>CVC</label>
      <Controller
        name="cvc"
        control={control}
        rules={{
          required: "Enter CVC",
          pattern: { value: /^\d{3,4}$/, message: "3-4 digits" },
        }}
        render={({ field }) => (
          <IMaskInput
            {...field}
            mask="0000"
            unmask={false}
            placeholder="CVC"
            inputRef={field.ref}
            className={styles.inputCartoon}
            aria-invalid={!!errors.cvc}
            inputMode="numeric"
            onAccept={field.onChange}
            type="password"
            maxLength={4}
          />
        )}
      />
      {errors.cvc && <span className={styles.errorCartoon}>{errors.cvc.message}</span>}

      <div className="flex justify-end">
        <Button type="submit" variant="orange" disabled={isSubmitting}>Donate</Button>
      </div>
    </form>
  );
});
