import React, {useState} from "react";
import { v4 as uuidv4 } from 'uuid';

const FormToDO = (props: any) => {
    const{submitToDos} = props;
    const [name, setToDoName] = useState('')
    const handleToDoName = (name: string) => {
        setToDoName(name);
    }

    const submitToDo = () => {
        const todo ={
            name,
            id: uuidv4(),
            time: Math.floor(Date.now() / 1000)
        }
        setToDoName('');
        submitToDos(todo)
    }
    return (
        <form>
            <label >ToDo NAme</label>
            <input type="text"
                   id="todoName"
                   name="todoname"
                   onChange={(event) =>handleToDoName(event.target.value)}
                   value={name}  />
            <button type="button" onClick={submitToDo}>Submit</button>
        </form>

        // <form action="/action_page.php">
        //     <label htmlFor="fname">First name:</label><br>
        //     <input type="text" id="fname" name="fname" value="John"><br>
        //         <label htmlFor="lname">Last name:</label><br>
        //         <input type="text" id="lname" name="lname" value="Doe"><br><br>
        //             <input type="submit" value="Submit">
        // </form>
)
}
export default FormToDO;
