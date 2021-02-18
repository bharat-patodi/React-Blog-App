import React from "react";

class SettingsPage extends React.Component {
  handleSubmit = () => {
    console.log("Form Submitted");
  };
  render() {
    return (
      <div className="container setting-page">
        <h1>Settings</h1>
        <form
          action=""
          className="settings-form"
          id="settings-form"
          onSubmit={this.handleSubmit}
        >
          <label htmlFor="">
            Profile Picture:
            <input
              type="text"
              name="profile"
              id="profile"
              placeholder="Link to profile picture"
            />
          </label>
          <label htmlFor="">
            Username:
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Username"
            />
          </label>
          <label htmlFor="">
            Bio:
            <input type="text" name="bio" id="bio" placeholder="bio" />
          </label>
          <label htmlFor="">
            Email:
            <input type="email" name="email" id="email" placeholder="email" />
          </label>
          <label htmlFor="">
            New Password:
            <input
              type="password"
              name="password"
              id="password"
              placeholder="password"
            />
          </label>
          <br />
          <button type="submit">Update Settings</button>
        </form>
      </div>
    );
  }
}

export default SettingsPage;
