import './App.css'
import Alert from './components/Alert/Alert';
import { Ban } from 'lucide-react';

function App() {

  return (
    <>
      <div>
        <Alert type={'alert-succes'} icon={ <Ban />} title={"Somthing went worng"} 
        description='
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
        numquam aperiam iure, repudiandae voluptatem veniam quae ipsa
        accusantium! Illo, obcaecati.'/>
      </div>
    </>
  )
}

export default App
