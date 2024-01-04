import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import SettingsIcon from '@mui/icons-material/Settings';

interface SettingsModalProps  {
    show: boolean,
    onClose: () => void;
  }


const SettingsModal: React.FC<SettingsModalProps> = ({show, onClose}) => {

        return (
            <Modal
            show={show}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header>
              <Modal.Title id="contained-modal-title-vcenter">
               Settings
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h4>Dark Mode</h4>
              <p>
                Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                consectetur ac, vestibulum at eros.
              </p>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={onClose}>Close</Button>
            </Modal.Footer>
          </Modal>
          )
      }
      
      export default SettingsModal;