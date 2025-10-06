import { useContext, useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { MyContext } from "../context/MyProvider";

const StageOne = () => {
  const textInput = useRef();
  const context = useContext(MyContext);
  const [error, setError] = useState([])
  const handleSubmit = (e) => {
    e.preventDefault();
    const value = textInput.current.value;

    context.addPlayer(value);
    textInput.current.value = "";
    console.log(value);
  };

  const validateInput = (value)=> {

  }
  return (
    <>
      <form className="mt-4" onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Control
            type="text"
            placeholder="Add Player Name"
            name="player"
            ref={textInput}
          />
        </Form.Group>
        <Button className="miami" variant="primary" type="submit">
          Add Player
        </Button>
        {context.players && context.players.length > 0 ? (
          <>
            <hr />
            <div>
              <ul className="list-group">
                {context.players.map((player, idx) => (
                  <li
                    key={idx}
                    className="list-group-item d-flex justify-content-between align-item-center list-group-item-action"
                  >
                    {player}
                    <span className="badge badge-danger">X</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="action_button">NEXT</div>
          </>
        ) : null}
      </form>
    </>
  );
};

export default StageOne;
