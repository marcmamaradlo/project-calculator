import { useContext } from "react";
import { MyContext } from "../context";

const DisplayComponent = () => {

    const context = useContext(MyContext);
    const state = context.state;

    return (
        <div className="display">
            <p className='history' >{state.historyOne}</p>
            <p className='previews' >{state.previews}</p>
            <p className='value' >{state.value}</p>
        </div>
    )
}

export default DisplayComponent;