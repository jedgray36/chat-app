import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { Friend } from "../types/friend";


interface FriendsDetailProps  {
  friend: Friend,
  show: boolean,
  onClose: () => void;
}

const FriendDetails: React.FC<FriendsDetailProps> = ({friend, show, onClose}) => {
    


    
        return (
            <Modal show={show} onHide={onClose}>
            <Modal.Header closeButton>
              <Modal.Title>{friend.firstName + "s Details"}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div>Name: {friend.firstName + " " + friend.lastName}</div>
                <div>Age: {friend.age}</div>
                <div>Email: {friend.email}</div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={onClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
          )
      }
      
      export default FriendDetails;