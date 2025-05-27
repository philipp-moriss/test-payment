import { observer } from "mobx-react-lite";
import { useForm, Controller } from "react-hook-form";
import { paymentStore } from "../stores/payment-store";
import styles from "./form-payment.module.css";
import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";
import { membershipStore } from "@/stores/membership-store";

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  country: string;
}

export const FormPayment = observer(() => {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    mode: "onBlur",
    defaultValues: { firstName: "", lastName: "", email: "", country: "" },
  });
  const { isOther, isMonthly, oneTimeAmount, selectedMembership, otherAmount } =
    membershipStore;

  const oneTimeSum = oneTimeAmount?.price;
  const monthlyAmountDollars = selectedMembership?.price.dollars;
  const monthlyAmount = isOther ? otherAmount?.price : monthlyAmountDollars;

  const dynamicCurrency = isOther
    ? otherAmount?.currency
    : oneTimeAmount?.currency;
  const currentAmount = isMonthly ? monthlyAmount : oneTimeSum;
  const currentCurrency = dynamicCurrency ? dynamicCurrency : "dollars";

  function onSubmit(data: FormValues) {
    if (!currentAmount) {
      alert("Please select a membership or other amount");
      return;
    }
    paymentStore.submitForm({
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      country: data.country,
    });
    if (window) {
      const payload = {
        type: "payment-success",
        payload: {
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          country: data.country,
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
      <label className={styles.formLabel}>First Name</label>
      <Controller
        name="firstName"
        control={control}
        rules={{ required: "Enter first name" }}
        render={({ field }) => (
          <Input
            {...field}
            type="text"
            className={styles.inputCartoon}
            aria-invalid={!!errors.firstName}
          />
        )}
      />
      {errors.firstName && (
        <span className={styles.errorCartoon}>{errors.firstName.message}</span>
      )}

      <label className={styles.formLabel}>Last Name</label>
      <Controller
        name="lastName"
        control={control}
        rules={{ required: "Enter last name" }}
        render={({ field }) => (
          <Input
            {...field}
            type="text"
            className={styles.inputCartoon}
            aria-invalid={!!errors.lastName}
          />
        )}
      />
      {errors.lastName && (
        <span className={styles.errorCartoon}>{errors.lastName.message}</span>
      )}

      <label className={styles.formLabel}>Email</label>
      <Controller
        name="email"
        control={control}
        rules={{
          required: "Enter email",
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: "Invalid email address",
          },
        }}
        render={({ field }) => (
          <Input
            {...field}
            type="email"
            className={styles.inputCartoon}
            aria-invalid={!!errors.email}
          />
        )}
      />
      {errors.email && (
        <span className={styles.errorCartoon}>{errors.email.message}</span>
      )}

      <label className={styles.formLabel}>Country</label>
      <Controller
        name="country"
        control={control}
        rules={{
          required: "Enter country",
        }}
        render={({ field }) => (
          <Input
            {...field}
            type="text"
            className={styles.inputCartoon}
            aria-invalid={!!errors.country}
          />
        )}
      />
      {errors.country && (
        <span className={styles.errorCartoon}>{errors.country.message}</span>
      )}

      <div className="flex justify-end w-[100%] h-content">
        <Button
          type="submit"
          variant="orange"
          className="w-[100%]"
          style={{ height: "auto" }}
          disabled={isSubmitting}
        >
          <span className="text-[16px] font-medium text-center text-wrap text-[#fff]">
            Donate {currentAmount} {currentCurrency}{" "}
            {isMonthly ? "monthly" : "one-time"}
          </span>
        </Button>
      </div>
    </form>
  );
});
