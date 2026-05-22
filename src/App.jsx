import "./App.css";
import HealthProfileWizard from "./healthProfile/HealthProfileWizard";
import "@fontsource/dm-sans/400.css";
import "@fontsource/dm-serif-display/400.css";

function App() {
  return (
    <div className="flex flex-col justify-center items-center">
      <HealthProfileWizard />
    </div>
  );
}

export default App;
