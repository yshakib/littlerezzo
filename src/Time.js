import Dropdown from 'react-bootstrap/Dropdown';

function Time() {
  return (
    <>
    <style type="text/css">
        {`
    #dropdown-occasion {
      background-color: #EDEFEE;
      color: #495E57;
      font-weight: medium;
      width: 200px;
      border: none;
    }
    `}
  </style>
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-time">
        Time
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

export default Time;