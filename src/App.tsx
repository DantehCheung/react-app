import ListGroup from "./components/ListGroup";

function App() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  // will reminding us to forget pass that props

  const handleSelect = (item: String) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup items={items} heading="Danteh" onSelectItem={handleSelect} />
    </div>
  );
}

export default App;
