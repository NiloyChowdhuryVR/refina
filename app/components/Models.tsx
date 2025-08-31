import React from 'react'
import type { Model } from '../constants/modelData'

type ModelProps = {
    model : Model,
    selectedModel: Model | undefined,
    setSelectedModel: React.Dispatch<React.SetStateAction<Model | undefined>>
}

const Models : React.FC<ModelProps> = ({model,selectedModel,setSelectedModel}) => {
    
  return (
    <div className={`bg-red-400 m-2 p-2 rounded-md cursor-pointer ${selectedModel===model?"bg-red-800":""}`} onClick={()=>setSelectedModel(model)}>
        <h3 className='font-bebas font-semibold tracking-wider text-xl'>{model.name}</h3>
        <p className='font-roboto text-sm'>{model.info}</p>
    </div>
  )
}

export default Models