import React, { useState } from "react";
import { Menu, Button } from "semantic-ui-react";
import Login from "../authentication/Login";

export default function AppMenu() {
  const [loginOpen, setLoginOpen] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleOpenLogin() {
    setLoginOpen(true);
  }

  function handleLoginClose() {
    setLoginOpen(false);
  }

  function renderControl() {
    if (username === "") {
      return (
        <Menu.Item>
          <Button primary onClick={handleOpenLogin}>
            Login
          </Button>
        </Menu.Item>
      );
    } else {
      return <Menu.Item>{username}</Menu.Item>;
    }
  }

  return (
    <div>
      <Menu size="large">
        <Menu.Item name="Heytour" />

        <Menu.Menu position="right">{renderControl()}</Menu.Menu>
      </Menu>

      {loginOpen && (
        <Login
          open={loginOpen}
          onClose={handleLoginClose}
          setUser={(username) => setUsername(username)}
        />
      )}
    </div>
  );
}
