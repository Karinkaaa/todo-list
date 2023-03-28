import { TodoContainer } from "../todos/TodoContainer";
import { TodoNavigation } from "../nav/TodoNavigation";

export const App: React.FC = () => {
  return (
    <>
      <TodoNavigation />
      <TodoContainer />
    </>
  );
};

export default App;
