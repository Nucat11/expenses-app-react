import "./styles/global.scss";
import ExpenseItem from "./components/ExpenseItem/ExpenseItem";

function randomDate(start, end) {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
}

const expenses = [...new Array(10)].map(() => ({
  date: randomDate(new Date(2012, 0, 1), new Date()),
  title: Math.floor(Math.random()*100),
  price: Math.floor(Math.random()*100),
}));

function App() {
  return (
    <div>
      {expenses.map(({ date, title, price }) => (
        <ExpenseItem
          expenseDate={date}
          expenseTitle={title}
          expenseAmount={price}
        />
      ))}
    </div>
  );
}

export default App;
