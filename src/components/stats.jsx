
const abc = ({ action, ...props }) => {
  return (
       <div>
           
           {/* creates the button,
           call's the css,
           call's the params */}
       
            <button {...props} className="button">
               {action}
           </button>
       </div>
  );
};

export default abc;