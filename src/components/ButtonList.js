import React from 'react'
import Button from './Button'

const list=['All','Gaming',
'Songs','Live','Sports','News',
'Cooking','Health','History','Recently Uploaded','New'];
const ButtonList = () => {
  
  const items=list.map((item)=><Button name={item}/>)
  return (
    <div className='flex'>
      {/* <Button name='All'/>
      <Button name='Gaming'/>
      <Button name='Songs'/>
      <Button name='Live'/>
      <Button name='Sports'/>
      <Button name='News'/>
      <Button name='Cooking'/>
      <Button name='Health'/> */}
{items}
    </div>
  )
}

export default ButtonList