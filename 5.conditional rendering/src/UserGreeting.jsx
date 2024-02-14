import PropTypes from "prop-types";

function UserGreeting(props) {
  const welcomeMessage = (
    <h2 className="welcome-message">Welcome {props.username}</h2>
  );
  const loginPropt = (
    <h2 className="login-prompt">Please log in to continue</h2>
  );

  return props.isLoggedIn ? welcomeMessage : loginPropt;
}

UserGreeting.prototypes = {
  isLoggedIn: PropTypes.bool,
  username: PropTypes.string,
};

UserGreeting.defaltProps = {
  isLoggedIn: false,
  username: "Guest",
};
export default UserGreeting;
