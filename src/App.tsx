import { TodoContainer } from "./components/TodoContainer";
import { TodoNavigation } from "./components/TodoNavigation";

export const App: React.FC = () => {
  return (
    <>
      <TodoNavigation />
      <TodoContainer />
    </>
  );
};

export default App;
