// Reusable Button component that takes text, color, fontSize, and a click handler function as props
function Button({ text = "Click Me!", color = "blue", fontSize = 12, handleClick }) {
  // Define inline styles for the button
  const buttonStyle = {
    color: color, // Set text color
    fontSize: fontSize + "px" // Set font size in pixels
  };

  return (
    // Button element with an onClick event that triggers the handleClick function
    <button onClick={handleClick} style={buttonStyle}>
      {text} {/* Display button text */}
    </button>
  );
}

// Main App component
export default function App5() {
  // Function to redirect the user to a specified URL
  const handleButtonClick = (url) => {
    window.location.href = url; // Change the browser's current page to the given URL
  };

  return (
    <div>
      {/* Render the Button component and pass a function to handleClick that redirects to The Odin Project */}
      <Button handleClick={() => handleButtonClick('https://www.theodinproject.com')} />
    </div>
  );
}
