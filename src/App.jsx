import Board from "./components/Board/Board";
import Toolbar from "./components/Toolbar/Toolbar";
import BoardProvider from "./store/BoardProvider";
import ToolboxProvider from "./store/ToolboxProvider";
import Toolbox from "./components/Toolbox/Toolbox";

function App() {
  return (
    <>
      <BoardProvider>
        <ToolboxProvider>
          <Toolbox />
          <Toolbar />
          <Board />
        </ToolboxProvider>
      </BoardProvider>
    </>
  );
}

export default App;