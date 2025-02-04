function B(props) {
    const buttonStyle = {
      color: props.color,
      fontSize: props.fontSize + 'px'
    };
  
    return (
      <button style={buttonStyle}>{props.text}</button>
    );
  }
export default B;