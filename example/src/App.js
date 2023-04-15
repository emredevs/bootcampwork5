import React from 'react'
//oluşturduğumuz components çağırılışı
import {
  Primary,
  Success,
  Danger,
  Warning,
  Warning1,
  Primary1,
  Success1,
  Danger1
} from 'moirus'
import 'moirus/dist/index.css'

const App = () => {
  return (
    <div className='App'>
      {/* çağırılan components lerin kullanılması */}
      <Primary text='Primary' />
      <Success text='Success' />
      <Danger text='Danger' />
      <Warning text='Warning' />
      <br />
      <br />
      <Primary1 text='Primary1' />
      <Success1 text='Success1' />
      <Danger1 text='Danger1' />
      <Warning1 text='Warning1' />
    </div>
  )
}

export default App
