import {Button} from "./Button.tsx";


export type CounterPanelPropsType = {
    minValue: number
    maxValue: number
    value: number
    increment: () => void
    reset: () => void
    settingPanelActivate: () => void
}

export const CounterPanel = ({maxValue, value, increment, reset, settingPanelActivate} : CounterPanelPropsType) => {


    const incrementHandler = () => {
        increment()
    }
    const resetHandler = () => {
        reset()
    }
    const settingPanelActivateHandler = () => {
        settingPanelActivate()
    }

    return (
        <div className="panel-container">
            <div className='counter-display'>
                <p className={value===maxValue?'red-input':''}>{value}</p>
            </div>
            <div className='buttons-container'>
            <Button disabled={value>=maxValue} onClick={incrementHandler} title={"inc"}/>
            <Button onClick={resetHandler} title={"reset"}/>
            <Button onClick={settingPanelActivateHandler} title={"set"}/>
            </div>
        </div>
    );
};

