//import Alert from "./components/Alert";
import { useState } from "react";
import Button from "./components/Button";
import Alert from "./components/Alert";

function App() {
  const [alertVisible, setAlertVisible] = useState(false);
  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisible(false)}>My Alert</Alert>
      )}
      <Button color="danger" onClick={() => setAlertVisible(true)}>
        Danteh Button
      </Button>
    </div>
  );
}

export default App;
