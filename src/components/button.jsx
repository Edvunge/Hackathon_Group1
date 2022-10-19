// Button component for button that will request 2 paramesters,
//it will need an action, that would be the functionality of the button, and 
//the props 
const Buttons = ({ action, ...props }) => {
    return (
        <div>
            {/* 
            creates the button,
            call's the css,
            call's the params
        */}
            <button {...props} className="button">
                {action}
            </button>
        </div>
    );
};

export default Buttons;