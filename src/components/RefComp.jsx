import { useState } from "react";
import ToDo from "./ToDo";
const RefComp = () => {
  const [showToDo, setShowToDo] = useState(true);
  return (
    <div>
      {showToDo && <ToDo />}
      <button onClick={() => setShowToDo(!showToDo)}>Toogle ToDO</button>
    </div>
  );
};

export default RefComp;
