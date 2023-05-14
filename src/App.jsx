
import Card from "./components/Card";
import Expenses from "./components/Expenses";


function App() {

  const expenses = [
    {
      id: "e1",
      title: "food",
      amount: 94.12,
      date: new Date(2023, 3, 14),
    },
    {
      id: "e2",
      title: "rent",
      amount: 580.0,
      date: new Date(2023, 2, 1),
    },
    {
      id: "e3",
      title: "bills",
      amount: 200.0,
      date: new Date(2023, 1, 10),
    },
    {
      id: "e4",
      title: "car repair",
      amount: 1100.0,
      date: new Date(2023, 4, 29),
    },
  ];

  return (
    <>
    <Card >
      <Expenses items={expenses}/>
    </Card>
    
    </>
  );
}

export default App;
