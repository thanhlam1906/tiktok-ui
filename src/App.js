import { CountNumber, TwoWayBinding, ToDoList } from './lessons/UseStateHook';
import ReducerHook from './lessons/ReducerHook';
function App() {
    return (
        <div>
            <CountNumber />
            <hr />
            <TwoWayBinding />
            <hr />
            <ToDoList />

            {/* <ReducerHook /> */}
        </div>
    );
}

export default App;
