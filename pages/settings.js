import Buttons from "../src/components/button";
import { useState } from "react";
import { resolveHref } from "next/dist/shared/lib/router/router";
import styles from '../styles/settings.module.css'
import { useRouter } from "next/router";

export default function Settings() {

    const router = useRouter();

    /////////////////////////////////////// use state ///////////////////////////////////////

    //useState to change the working timer value
    //has a 25 minutes start value
    const [workingTime, setWorkingTime] = useState("25")

    //useState to change the break timer value
    //has a 5 minutes start value
    const [breakTime, setBreakTime] = useState("5")

    //useState to change the settings
    const [settings, setSettings] = useState("")

    //useState to allow to stop the timer
    const [stopTimer, setstopTimer] = useState("")

    //////////////////////////////////////////////////////////////////////////////////////////

    //-------------------------------------------------------------------------------------//

    /////////////////////////////////////// functions //////////////////////////////////////

    //this function handles the changes made by the user
    //set's the previous state to a new one
    //this function will be called when the user click's on the save button
    //it shows an alert message to confirm the action
    function saveSettings() {


        return alert("Settings saved successfuly")

    }

    //this function allows or not, the user to have permission to stop the timer
    //using the settigs config's, if the stop timer is disabled, the user won't be allowed 
    //to stop the timer
    // function stopTimer() {

    //     if (timer !== 0) {

    //         return false

    //     } else {

    //         return true

    //     }

    // }


    //////////////////////////////////////////////////////////////////////////////////////////

    //-------------------------------------------------------------------------------------//


    return (

        <div className={styles.background}>

            <title>Settings Page</title>

            <div>

                {/* 
                    it's missing a style, create, import and add styles to the divs:
                        working timer,
                        break timer,
                        enable stop
                    for the enable stop, I left the css code that I found bellow, it's the big code
                    left on comments :) 
                */}

                {/* 
                    also don´t forget to read about after, I'll let this link here
                    https://developer.mozilla.org/en-US/docs/Web/CSS/::after
                    
                    I need this to put "min" after the lable content,
                    in case that you don't think that's necessary, make it your way :)
                */}

                <div className={styles.everyButtonCenterPadding}>

                    <div className={styles.divButtonsFill}>
                        <div>
                            <label>Working Timer: </label>
                            <input placeholder="25 min"></input>
                        </div>

                        <div>
                            <label>Break Timer: </label>
                            <input placeholder="5 min"></input>
                        </div>


                        <div>
                            <label> Enable Stop: </label>
                            <input type="checkbox"></input>
                            {/* styles for the button */}
                            <span className="styles.Zabya"></span>
                        </div>
                    </div>
                    <div className={styles.divButtons}>

                        <div className={styles.divSaveAndBAck}>

                            <div>
                                <button className={styles.actionButtons} type="submit" onClick={() => saveSettings()}>Save</button>
                            </div>

                            <div>
                                <button
                                    className={styles.actionButtons}
                                    onClick={() => router.push("/")}>Go Back</button>
                            </div>

                        </div>
                    </div>


                    {/* .switch {
                        position: relative;
                    display: inline-block;
                    width: 60px;
                    height: 34px;
}

                    .switch input {
                        opacity: 0;
                    width: 0;
                    height: 0;
}

                    .slider {
                        position: absolute;
                    cursor: pointer;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background-color: #ccc;
                    -webkit-transition: .4s;
                    transition: .4s;
}

                    .slider:before {
                        position: absolute;
                    content: "";
                    height: 26px;
                    width: 26px;
                    left: 4px;
                    bottom: 4px;
                    background-color: white;
                    -webkit-transition: .4s;
                    transition: .4s;
}

                    input:checked + .slider {
                        background - color: #2196F3;
}

                    input:focus + .slider {
                        box - shadow: 0 0 1px #2196F3;
}

                    input:checked + .slider:before {
                        -webkit - transform: translateX(26px);
                    -ms-transform: translateX(26px);
                    transform: translateX(26px);
}

                  
                     .slider.round {
                         border - radius: 34px;
 }

                     .slider.round:before {
                         border - radius: 50%;
 }  */}
                </div>

            </div>

        </div >

    )

}