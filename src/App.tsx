import {useEffect, useState} from 'react'


import './App.css'
import {CounterPanel} from "./CounterPanel.tsx";
import {SetPanel} from "./SetPanel.tsx";


function App() {


  const [minValue, setMinValue] = useState(1);
  const [maxValue, setMaxValue] = useState(5);
  const [value, setValue] = useState(minValue)
  const [isSetting, setIsSetting] = useState<boolean>(false);

  useEffect(() => {
      const minValueString = localStorage.getItem('minValue')
      const maxValueString = localStorage.getItem('maxValue')
      if (minValueString !== null) {
          setMinValue(JSON.parse(minValueString))
          setValue(JSON.parse(minValueString))
      }
      if(maxValueString !==null){
          setMaxValue(JSON.parse(maxValueString))
      }




  },[])

  const increment = () => {
      if (value < maxValue) {
          setValue(prev=> prev+1)
      }

  }

  const reset = () => {
      setValue(minValue)
  }

  const settingPanelActivate = () => {
      setIsSetting(true);
  }

  const set =(minFromSetPanel: number, maxFromSetPanel: number) => {
      setIsSetting(false)
      setMinValue(minFromSetPanel)
      localStorage.setItem('minValue', JSON.stringify(minFromSetPanel))
      setMaxValue(maxFromSetPanel)
      localStorage.setItem('maxValue', JSON.stringify(maxFromSetPanel))
      setValue(minFromSetPanel)
    }


  return (
    <div>
        {
            isSetting ? <SetPanel set={set} minValue={minValue} maxValue={maxValue}/>
                :<CounterPanel minValue={minValue}  maxValue={maxValue} value={value} increment={increment} reset={reset} settingPanelActivate={settingPanelActivate}/>

        }


    </div>
  )
}

export default App
