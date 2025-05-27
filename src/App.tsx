import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { Main } from "./widgets/main";
import { Payment } from "./widgets/payment";

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
    <>
      <Main />
      <Payment />
    </>
  );
});

export default App;
