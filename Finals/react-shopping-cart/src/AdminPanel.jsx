import React, { useState } from "react";

export default function AdminPanel(props) {
  const accounts = props.accounts;

  const [devlogs, setDevlogs] = useState([]);

  function AddDevlogs() {
    const title = document.getElementById("title").value;
    const content = document.getElementById("content").value;

    let devlog = {
      date: new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate(),
      title: title,
      content: content
    };

    setDevlogs((d) => [...d, devlog]);
    document.getElementById("title").value = "";
    document.getElementById("content").value = "";
  }

  const renderAccounts = () => {
    return (
      accounts.map((account) => {
        return (
          <div key={account.id}>
            <h2>{account.username}</h2>
            <p>{account.role}</p>
          </div>
        );
      })
    );
  };

  const renderDevLogHistory = () => {
    return (
      devlogs.map((devlog, index) => {
        return (
          <div key={index}>
            <h2>{devlog.title}</h2>
            <p>{devlog.date}</p>
            <p>{devlog.content}</p>
          </div>
        );
      })
    );
  };

  if (props.isLoggedIn === false) {
    return <Login />;
  } else {
    return (
      <div>
        <h1>This is the Admin Page</h1>
        <p>These are the Active Accounts: </p>
        {renderAccounts()}
        <br />
        <br />
        <h4>Admin Devlogs: </h4>
        Title: <input type="text" name="title" id="title" />
        <br />
        <br />
        Content: <br />
        <textarea name="content" id="content" cols="50" rows="10"></textarea>
        <br />
        <br />
        <button type="button" onClick={AddDevlogs}>Submit</button>
        <br />
        <br />
        <h4>Devlog History: </h4>
        {renderDevLogHistory()}
      </div>
    );
  }
}
