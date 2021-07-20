const CustomRadio = (props) => {
    return (
      <div onClick={() => props.onClick(props.value)} className="radio-container">
        <svg height="25" width="25">
          <circle
            cx="12"
            cy="12"
            r="11"
            stroke="gray"
            strokeWidth="1"
            fill={props.checked ? '#990ae3' : 'white'}
          />
          <circle cx="12" cy="12" r="4" fill="white" />
          Sorry, your browser does not support inline SVG.
        </svg>
  
        <span> {props.children}</span>
      </div>
    );
  };
  
  export default CustomRadio;