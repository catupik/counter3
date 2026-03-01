import {Button} from "./Button.tsx";
import {type ChangeEvent, useState} from "react";

export type SetPanelPropsType = {
    set: (minFromSetPanel: number, maxFromSetPanel: number) => void
    minValue: number
    maxValue: number
}

export const SetPanel = ({set, minValue, maxValue}: SetPanelPropsType) => {
    const [minValueDraft, setMinValueDraft] = useState<number>(minValue)
    const [maxValueDraft, setMaxValueDraft] = useState<number>(maxValue)

    const [isWrong, setIsWrong] = useState<boolean>(false)

    const setHandler = ()=>{
        set(minValueDraft, maxValueDraft)
    }

    const onChangeSetMinValueDraft = (e:ChangeEvent<HTMLInputElement>)=>{
        const value = +e.currentTarget.value
        setMinValueDraft(value)
        const isWrong = value < 0 || value >= maxValueDraft || maxValueDraft < 0
        setIsWrong(isWrong)
    }

    const onChangeSetMaxValueDraft = (e: ChangeEvent<HTMLInputElement>)=>{
        const value = +e.currentTarget.value
        setMaxValueDraft(value)
        const isWrong = value < 0 || value <= minValueDraft || minValueDraft < 0
        setIsWrong(isWrong)

    }


    return (
        <div className="panel-container">
            <div className= 'counter-display'>
                <div className='input-container'>
                    <span>max value</span><input type="number" value={maxValueDraft} step='1'
                                                 onChange={onChangeSetMaxValueDraft}
                                                 className={isWrong ? 'input-wrong' : ''}/>
                </div>
                <div className='input-container'>
                    <span>min value</span><input value={minValueDraft} type="number" step='1'
                                                 className={isWrong ? 'input-wrong' : ''}
                                                 onChange={onChangeSetMinValueDraft}/>
                </div>

            </div>
            <div className='buttons-container'>
                <Button title={"set"} onClick={setHandler} disabled={isWrong}/>
            </div>

        </div>
    );
};

