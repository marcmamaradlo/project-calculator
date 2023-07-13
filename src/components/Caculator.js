import { useContext } from "react";
import { MyContext } from "../context";
import DisplayComponent from "./DisplayComponent";

const Calculator = () => {

    const context = useContext(MyContext);
    const handleButtons = context.handleButtons;
    const handleOperators = context.handleOperators;
    const handleAllClear = context.handleAllClear;
    const handleDelete = context.handleDelete;
    const handleEquals = context.handleEquals;

    return (
        <div className="container">
            {DisplayComponent()}
            {/* <div className='button-container'>
                <div className="divider">
                    <button onClick={handleAllClear} name='allClear' id="allClear"><i className="fa-solid fa-a"><i className="fa-solid fa-c"></i></i></button>
                    <button onClick={handleDelete} name='delete' id="delete"><i className="fa-solid fa-delete-left"></i></button>
                    <button onClick={handleOperators} name='/' id="operator" className="darker"><i className="fa-solid fa-divide"></i></button>
                </div>
                <div className="divider">
                    <button onClick={handleButtons} name='7' id="button"><i className="fa-solid fa-7"></i></button>
                    <button onClick={handleButtons} name='8' id="button"><i className="fa-solid fa-8"></i></button>
                    <button onClick={handleButtons} name='9' id="button"><i className="fa-solid fa-9"></i></button>
                    <button onClick={handleOperators} name='*' id="operator" className="darker"><i className="fa-solid fa-xmark"></i></button>
                </div>
                <div className="divider">
                    <button onClick={handleButtons} name='4' id="button"><i className="fa-solid fa-4"></i></button>
                    <button onClick={handleButtons} name='5' id="button"><i className="fa-solid fa-5"></i></button>
                    <button onClick={handleButtons} name='6' id="button"><i className="fa-solid fa-6"></i></button>
                    <button onClick={handleOperators} name='-' id="operator" className="darker"><i className="fa-solid fa-minus"></i></button>
                </div>
                <div className="divider">
                    <button onClick={handleButtons} name='1' id="button"><i className="fa-solid fa-1"></i></button>
                    <button onClick={handleButtons} name='2' id="button"><i className="fa-solid fa-2"></i></button>
                    <button onClick={handleButtons} name='3' id="button"><i className="fa-solid fa-3"></i></button>
                    <button onClick={handleOperators} name='+' id="operator" className="darker"><i className="fa-solid fa-plus"></i></button>
                </div>
                <div className="divider">
                    <button onClick={handleButtons} name='.' id="button"><i className="fa-solid fa-circle"></i></button>
                    <button onClick={handleButtons} name='0' id="button"><i className="fa-solid fa-0"></i></button>
                    <button onClick={handleEquals} name='=' id="equals" className="darker"><i className="fa-solid fa-equals"></i></button>
                </div>
            </div> */}
            <div className='button-container'>
                <div className='divider'>
                    <button onClick={handleAllClear} name='allClear' id='allClear'>AC</button>
                    <button onClick={handleDelete} name='delete' id="delete">DEL</button>
                    <button onClick={handleOperators} name='/' id="operator">÷</button>
                </div>
                <div className="divider">
                    <button onClick={handleButtons} name='7' id="button">7</button>
                    <button onClick={handleButtons} name='8' id="button">8</button>
                    <button onClick={handleButtons} name='9' id="button">9</button>
                    <button onClick={handleOperators} name='*' id='operator'>×</button>
                </div>
                <div className="divider">
                    <button onClick={handleButtons} name='4' id="button">4</button>
                    <button onClick={handleButtons} name='5' id="button">5</button>
                    <button onClick={handleButtons} name='6' id="button">6</button>
                    <button onClick={handleOperators} name='-' id="operator">-</button>
                </div>
                <div className="divider">
                    <button onClick={handleButtons} name='1' id="button">1</button>
                    <button onClick={handleButtons} name='2' id="button">2</button>
                    <button onClick={handleButtons} name='3' id="button">3</button>
                    <button onClick={handleOperators} name='+' id="operator">+</button>
                </div>
                <div className="divider">
                    <button onClick={handleButtons} name='.' id="button">.</button>
                    <button onClick={handleButtons} name='0' id="button">0</button>
                    <button onClick={handleEquals} name='=' id="equals">=</button>
                </div>
            </div>
        </div>
    )
}

export default Calculator;