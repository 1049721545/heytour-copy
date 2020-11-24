import React, { useState } from "react";
import { Button, Form, Modal } from "semantic-ui-react";

export default function Login(props) {
  const [username, setUsername] = useState(undefined);
  const [password, setPassword] = useState(undefined);

  return (
    <Modal onClose={props.onClose} open={props.open}>
      <Modal.Header>Login</Modal.Header>

      <Form>
        <Form.Field>
          <label>Username:</label>
          <input
            value={username}
            placeholder="Username"
            onChange={(e) => setUsername(e.target.username)}
          />
        </Form.Field>
        <Form.Field>
          <label>Password:</label>
          <input
            value={password}
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.password)}
          />
        </Form.Field>

        <Button onClick={props.onClose}>Close</Button>
        <Button type="submit" onClick={props.onLogin}>
          Login
        </Button>
      </Form>
    </Modal>
  );
}
