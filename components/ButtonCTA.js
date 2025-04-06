"use client";

const ButtonCTA = ({ text = "Get Started", extraStyle = "" }) => {
  return (
    <button className={`btn btn-primary ${extraStyle}`}>
      {text}
    </button>
  );
};

export default ButtonCTA; 