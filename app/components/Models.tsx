import React from 'react'
import type { Model } from '../constants/modelData'

type ModelProps = {
    model : Model,
    selectedModel: Model | undefined,
    setSelectedModel: React.Dispatch<React.SetStateAction<Model | undefined>>
    setPrompt: React.Dispatch<React.SetStateAction<string>>
}

const Models : React.FC<ModelProps> = ({model,selectedModel,setSelectedModel,setPrompt}) => {

  const handleClick = ()=>{
    setSelectedModel(model);
    setPrompt(model.modelPrompt)
  }
    
  return (
    <div className={`bg-red-400 m-2 p-2 rounded-md cursor-pointer ${selectedModel===model?"bg-red-800":""}`} onClick={()=>handleClick()}>
        <h3 className='font-bebas font-semibold tracking-wider text-xl'>{model.name}</h3>
        <p className='font-roboto text-sm'>{model.info}</p>
    </div>
  )
}

export default Models