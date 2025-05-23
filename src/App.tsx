import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import styles from "./App.module.css";
import { FormPaymentWidget } from "./widgets/form";
import { MembershipWidget } from "./widgets/memberships";

const App = observer(function App() {
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.data === "init-payment") {
        console.log("Payment init in your site");
      }
    };

    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  return (
    <div className={styles.center}>
      <MembershipWidget />
      <FormPaymentWidget />
    </div>
  );
});

export default App;
