import { Fragment, useState } from "react";
// decide {items: [] , heading :string}
// using interface we can define the shape or the interface
// of an object

interface ListGroupProps {
  items: string[];
  heading: string;
  // (item: string) => void
  onSelectItem: (item: string) => void;
  // when we just declared a variable here, the
  // TS compiler also remind us to declace back
  // a funation variable in superComponent (App.tsx)
}
// Add in Props to the function ListGroup

// As you can see, this position we use typescript to give
// both items and heading type to ListGroupProps
function ListGroup({ items, heading, onSelectItem }: ListGroupProps) {
  // dont use const, if that need to assign new value

  // we should pass above items as an input to this component just like how we can
  // call an function and give it an argument

  // this variable we declared here is local to this function component
  // react cant aware, little secrect

  // Hook , allow us to tap into build-in features in react
  // State Hook: tell react that this component can have
  // data or state will change over time
  // when the state changes, react will update dom to match
  // new component state
  const [selectedIndex, setSelectedIndex] = useState(-1);
  // variable (selected Index)
  // updater function

  // need return yout statment
  const getMessage = () => {
    //return items.length === 0 ? <p>No item found</p> : null;
    return items.length === 0 && <p>No item found</p>;
  };

  if (items.length === 0)
    return (
      <>
        <h1>{heading}</h1>
        <p>No Item found</p>
      </>
    );
  // React.createElement('h1')
  // map need key

  // Managing State
  return (
    <Fragment>
      <h1>{heading}</h1>
      {getMessage()}
      <ul className="list-group">
        {items.map(
          (
            item,
            index //map index too
          ) => (
            <li
              key={item}
              className={
                selectedIndex === index
                  ? "list-group-item active"
                  : "list-group-item"
              }
              onClick={() => {
                setSelectedIndex(index);
                // take the map index, that click and
                // use setSelectedIndex() to do changing

                onSelectItem(item);
                //call the props.method
              }}
            >
              {item}
            </li>
          )
        )}
      </ul>
    </Fragment>
  );
}
export default ListGroup;
