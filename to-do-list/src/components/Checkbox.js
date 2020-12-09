import React from "react"


function Checkbox(){
    return(

        <div>

            <form >
                <input type="checkbox" id="to-do-1" name="to-do-1" value="Learn JS"/>
                <label for="to-do-1"> Learn JS</label><br/>

                <input type="checkbox" id="to-do-2" name="to-do-2" value="Learn React"/>
                <label for="to-do-2"> Learn React</label><br/>

                <input type="checkbox" id="to-do-3" name="to-do-3" value="Learn NodeJS"/>
                <label for="to-do-3"> Learn NodeJS</label><br/>
                
            </form>

        </div>
    )
}

export default Checkbox