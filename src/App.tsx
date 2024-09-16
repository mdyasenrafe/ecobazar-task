import "./App.css";
import { Text } from "./components/atoms";
import { MainLayout } from "./components/atoms/layout";
import { Home } from "./pages/main";

function App() {
  return (
    <div>
      <MainLayout>
        <Home />
      </MainLayout>
    </div>
  );
}

export default App;
