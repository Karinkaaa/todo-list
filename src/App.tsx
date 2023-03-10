import { useState } from "react";
import { TodoContainer } from "./components/TodoContainer";
import { TodoNavigation } from "./components/TodoNavigation";
import { TODO_TYPE } from "./enums";
import { useTodos } from "./redux/hooks";
import { SelectorType } from "./types";

export const App: React.FC = () => {
  const [selector, setSelector] = useState<SelectorType>(TODO_TYPE.ALL);

  return (
    <>
      <TodoNavigation setSelector={setSelector} />
      <TodoContainer todos={useTodos(selector)} />
    </>
  );
};

export default App;
