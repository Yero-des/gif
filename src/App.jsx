// Importaciones
///////////////////////////////
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { Presentation } from './component/Presentation.jsx';
import { State } from './component/State.jsx';
import { Form, Counter } from './component/Form.jsx';
import { PlusOrLess } from './component/Count.jsx';
import { Fade, Animation } from './component/Style.jsx';
import { Gif } from './component/gif/Gif.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Presentation/>}/>
        <Route path="/state" element={<State/>}/>
        <Route path="/counts" element={<PlusOrLess/>}/>
        <Route path="/fade_out" element={<Fade/>}></Route>
        <Route path="/gifs" element={<Gif/>}></Route>
        <Route path="/animation" element={<Animation/>}></Route>
        <Route path="/form" element={
          <div>
            <Form />
            <Counter />
          </div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
