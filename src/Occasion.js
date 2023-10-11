import Dropdown from 'react-bootstrap/Dropdown';

function Occasion() {
  const occasion = <style type="text/css">
    {`
    #dropdown-occasion {
      background-color: #EDEFEE;
      color: #495E57;
      width: 200px;
      border: none;
    }
    `}
  </style>;
  return (
    <>
    {occasion}
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-occasion">
        Occasion
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item>None</Dropdown.Item>
        <Dropdown.Item>Birthday</Dropdown.Item>
        <Dropdown.Item>Engagement</Dropdown.Item>
        <Dropdown.Item>Anniversary</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    </>
  );
}

export default Occasion;