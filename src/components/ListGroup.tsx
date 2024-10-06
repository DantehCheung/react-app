import { Fragment } from "react";

function ListGroup() {
  // dont use const, if that need to assign new value
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  items = [];

  //need return yout statment
  const getMessage = () => {
    //return items.length === 0 ? <p>No item found</p> : null;
    return items.length === 0 && <p>No item found</p>;
  };

  if (items.length === 0)
    return (
      <>
        <h1>List</h1>
        <p>No Item found</p>
      </>
    );
  // React.createElement('h1')
  // map need key
  return (
    <Fragment>
      <h1>List</h1>
      {getMessage()}
      <ul className="list-group">
        {items.map((item) => (
          <li key={item} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    </Fragment>
  );
}
export default ListGroup;
