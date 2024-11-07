import { useDispatch, useSelector } from 'react-redux';
import { checkPin, deleteInput, writeInput } from './KeypadLockSlice.ts';


const KeypadLock = () => {
  const buttons = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const input = useSelector((state) => state.keypadLock.input);
  const access = useSelector((state) => state.keypadLock.access);
  const dispatch = useDispatch();

  return (
    <div className="container p-5">
      <div className="keypad col-4 border border-3 rounded-3">
        <div className="border border-2 p-2 mx-4 my-3 rounded-3"
        style={{backgroundColor: access === "pass" ? 'lightgreen':access === "wrong"? 'pink':'transparent'}}>
          {input.split('').map(() => '*').join('')}
          {access === "pass" && <p>Access Granted</p>}
          {access === "wrong" && <p>Access Denied</p>}
        </div>
        <div className="px-5">
          <div className="d-flex flex-lg-wrap px-2 gap-2 justify-content-center">
            {buttons.map((button) => (
              <button key={button} onClick={() => dispatch(writeInput(button))} className="btn p-3 btn-lg btn-light border border-2">
                {button} </button>
            ))}
          </div>
          <div className="p-2 d-flex gap-2 mb-3 justify-content-center">
            <button onClick={() => dispatch(deleteInput())} className="btn p-3 btn-lg btn-light border border-2">{"<"}
            </button>
            <button onClick={() => dispatch(writeInput('*'))} className="btn p-3 btn-lg btn-light border border-2">0
            </button>
            <button onClick={() => dispatch(checkPin())} className="btn p-3 btn-lg btn-light border border-2">E
            </button>

          </div>
        </div>
      </div>
    </div>
  )
}

export default KeypadLock;
