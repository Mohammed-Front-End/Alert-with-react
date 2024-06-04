import './App.css'
import Alert from './components/Alert/Alert';
import { Ban } from 'lucide-react';

function App() {

  return (
    <div>
      <Alert type={'alert-defulalt'} icon={ <Ban />} title={"Upgrade your paln"}>
        <p>
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
          numquam aperiam iure, repudiandae {" "}voluptatem veniam quae ipsa
          <a href="/">accusantium!</a> Illo, obcaecati.'
        </p>
      </Alert>
      
      <Alert type={'alert-info'} icon={ <Ban />} title={"Note"}>
        <p>
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
          numquam aperiam iure, repudiandae {" "}voluptatem veniam quae ipsa
          <a href="/">accusantium!</a> Illo, obcaecati.'
        </p>
      </Alert>

      <Alert type={'alert-warning'} icon={ <Ban />} title={"Your Order has been processed"}>
        <p>
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
          numquam aperiam iure, repudiandae {" "}voluptatem veniam quae ipsa
          <a href="/">accusantium!</a> Illo, obcaecati.'
        </p>
      </Alert>

      <Alert type={'alert-error'} icon={ <Ban />} title={"Somthing went worng"}>
        <p>
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
          numquam aperiam iure, repudiandae {" "}voluptatem veniam quae ipsa
          <a href="/">accusantium!</a> Illo, obcaecati.'
        </p>
      </Alert>

      <Alert type={'alert-succes'} icon={ <Ban />} title={"Tips & Tricks"}>
        <p>
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
          numquam aperiam iure, repudiandae {" "}voluptatem veniam quae ipsa
          <a href="/">accusantium!</a> Illo, obcaecati.'
        </p>
      </Alert>

    </div>
  )
}

export default App
