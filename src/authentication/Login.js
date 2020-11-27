import React from "react";
import { Button, Form, Grid, Modal } from "semantic-ui-react";

export default function Login(props) {
  return (
    <Modal onClose={props.onClose} open={props.open}>
      <Modal.Header>Login</Modal.Header>

      <Grid>
        <Grid.Column>
          <Form>
            <Grid.Row>
              <Form.Field>
                <label>Username:</label>
                <input
                  value={props.username}
                  onChange={(e) => props.setUser(e.target.value)}
                  name="username"
                  placeholder="Username"
                />
              </Form.Field>
            </Grid.Row>

            <Grid.Row>
              <Form.Field>
                <label>Password:</label>
                <input type="password" placeholder="Password" />
              </Form.Field>
            </Grid.Row>

            <Grid.Row>
              <Form.Field>
                <Button onClick={props.onClose}>Close</Button>
                <Button type="submit" onClick={props.onLogin}>
                  Login
                </Button>
              </Form.Field>
            </Grid.Row>
          </Form>
        </Grid.Column>
      </Grid>
    </Modal>
  );
}
