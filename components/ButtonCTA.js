"use client";

const ButtonCTA = ({ text = "Get Started", extraStyle = "", href = "" }) => {
  return href ? (
    <a href={href} className={`btn btn-primary text-sm sm:text-base ${extraStyle}`}>
      {text}
    </a>
  ) : (
    <button className={`btn btn-primary text-sm sm:text-base ${extraStyle}`}>
      {text}
    </button>
  );
};

export default ButtonCTA; 