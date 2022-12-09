import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './index.css';

const CreateGroup = (props) => {
  const [groupItemName, setGroupItemName] = useState("");

  /*   const handleCreateGroupBtnClick = () => {
      setShowCreateGroup(true);
    };
  
    const handleCreateGroupCancelBtnClick = () => {
      setShowCreateGroup(false);
    };
  
    const handleCreateGroupSubmitBtnClick = (e, description, photo) => {
      e.preventDefault();
      setShowCreateGroup(false);
      //send message here
  
       console.log(selectedItem);
      console.log(description);
      console.log(photo); 
    }; */


  const { handleCreateGroupSubmitBtnClick, handleCreateGroupCancelBtnClick } = props;

  return (
    <div className='createGroup'>
      <Form onSubmit={(e) => { handleCreateGroupSubmitBtnClick(e, { groupItemName }); }}>
        <Form.Group className="mb-3 createGroupText">
          <Form.Label>What do you want to achieve?</Form.Label>
          <Form.Control placeholder="eg:Get up before 8:00" required="required" /* onChange={handleGroupItemNameChange} */ />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
        <Button variant="primary" onClick={handleCreateGroupCancelBtnClick}>
          Cancel
        </Button>

      </Form>

    </div>
  );
};

export default CreateGroup;