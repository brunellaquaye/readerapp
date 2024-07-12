

const Button = ({ text, textColor, bgColor, hoverColor }) => {
  return (
    <button
      className={`px-4 py-2 rounded cursor-pointer`}
      style={{ color: textColor, backgroundColor: bgColor }}
      onMouseEnter={(e) => (e.target.style.backgroundColor = hoverColor)}
      onMouseLeave={(e) => (e.target.style.backgroundColor = bgColor)}
    >
      {text}
    </button>
  );
};

export default Button;
