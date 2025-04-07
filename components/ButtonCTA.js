"use client";

const ButtonCTA = ({ text = "Get Started", extraStyle = "" }) => {
  return (
    <button className={`btn btn-primary text-sm sm:text-base ${extraStyle}`}>
      {text}
    </button>
  );
};

export default ButtonCTA; 