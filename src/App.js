import "./styles/global.scss";
import Expenses from "./components/Expenses/Expenses";
import { v4 as uuidv4 } from "uuid";

function randomDate(start, end) {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
}

const expenses = [...new Array(10)].map(() => ({
  date: randomDate(new Date(2012, 0, 1), new Date()),
  title: Math.floor(Math.random() * 100),
  price: Math.floor(Math.random() * 100),
  id: uuidv4()
}));

function App() {
  return (
    <>
      <Expenses expenses={expenses} />
    </>
  );
}

export default App;
