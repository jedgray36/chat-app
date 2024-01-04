import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";


interface SignInProps  {
    show: boolean,
    onClose: () => void;
    type: boolean
  }


const SignIn: React.FC<SignInProps> = ({show, onClose, type}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleEmail = (e: any) => {
        setEmail(e.target.value);
    }

    const handlePassword = (e: any) => {
        setPassword(e.target.value);
    }


        return (
            <Modal show={show} onHide={onClose}>
            {!type === false ? (
                <>
            <Modal.Header closeButton>
              <Modal.Title>Sign In</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control value={email} onChange={handleEmail} type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Password</Form.Label>
        <Form.Control value={password} onChange={handlePassword} type="password"/>
      </Form.Group>
    </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button disabled={!email && password.length < 6} variant="primary" onClick={onClose}>
                Sign In
              </Button>
            </Modal.Footer>
            </>
            ) : 
            <>
            <Modal.Header closeButton>
              <Modal.Title>Create Account</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control value={email} onChange={handleEmail} type="email" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Password</Form.Label>
                    <Form.Control value={password} onChange={handlePassword} type="password"/>
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button disabled={!email && password.length < 6} variant="primary" onClick={onClose}>
                Create Account
              </Button>
            </Modal.Footer>
            </>}
          </Modal>
        )
      }
      
      export default SignIn;