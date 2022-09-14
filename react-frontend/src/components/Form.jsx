import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";


function SignUpForm({}) {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signUp = (e) => {
    e.preventDefault();
    // if (password.length < 6) {
    //   alert("Password must be at least 6 characters")
    //   return
    // }
    // if (email.indexOf("@") === -1) {
    //   alert("Your email is not correct")
    //   return
    // }
    // if (email.indexOf(".com") === -1) {
    //   alert("Your email is not correct")
    //   return
    // }


    fetch("http://localhost:3000/users", {
          method: "POST",
          body: JSON.stringify({
            username: username,
            email: email,
            password: password
          }),
          headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
          },
        })
  };

  return (
    <Modal centered show={show} onHide={handleClose} className="mt-3">
      <Modal.Header closeButton>
        <Modal.Title><b>Signup</b></Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput">
            <Form.Label><b>Username</b></Form.Label>
            <Form.Control
              onChange={(event) => setUsername(event.target.value)}
              type="username"
              autoFocus
              autoComplete="off"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label><b>Email address</b></Form.Label>
            <Form.Control
              onChange={(event) => setEmail(event.target.value)}
              type="email"
              autoComplete="off"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
            <Form.Label><b>Password</b></Form.Label>
            <Form.Control
              onChange={(event) => setPassword(event.target.value)}
              type="password"
              autoComplete="off"
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          <b>Close</b>
        </Button>
        <Button variant="primary" onClick={signUp} type="submit">
          <b>Submit</b>
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default SignupForm;
