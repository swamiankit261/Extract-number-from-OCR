import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navebar';
import Card from './Components/Card';
import Slider from './Components/Slider';
import Props from './Components/Props';
import Mycard from './Components/Mycard'
import Map from './Components/CardData/Map';
import MapTable from './Components/CardData/Table/MapTable';
import MyState from './Components/States/MyState';
import State from './Components/States/State';
import Update1 from './Components/States/Update1';
import TextUtils from './Components/TextUtils/TextUtils';
import Form from './Components/Form/Form';
import Mytable from './Components/Form/table/Mytable';
import Form2 from './Components/Form/Form2/Form2';
import Form3 from './Components/Form/Form3/Form3';
import { Route, Routes } from 'react-router-dom';
import Search from './Components/Search/Search';
import Slaider from './Components/MySlaider/Slaider';
import Radio from './Components/Form/Form3/Radio';
import { ToastBar, Toaster } from 'react-hot-toast';
import MaltiPage from './Components/MaltiPageForm/MaltiPage';
import Attendance1 from './Components/attendance/Attendance1';
import LocalStorage from './Components/Storage/LocalStorage';
import ImagePage from './Components/Storage/ImagePage';
import Number from './Components/Storage/Number';
import Motin from './Components/Storage/Motin';

function App() {
  // var a = "this";
  // var b = "that"

  // var obj = {
  //   name: "pawan",
  //   age: 25,
  //   class: "12th"
  // }

  // var objImage = {
  //   image: "https://cdn.vox-cdn.com/thumbor/c5VQwn71z9_TzxEUWFtCYEn4g3Y=/0x0:1200x696/1400x1400/filters:focal(631x178:632x179)/cdn.vox-cdn.com/uploads/chorus_asset/file/8378039/baby-groot-guardians.0.jpg",

  //   title: "my image",
  //   description: "James Gunn says Baby Groot is Groot's son, but does that ",
  //   button: "submit"
  // }

  return (
    <>
      <Navbar />

      {/* <Main /> */}

      <div>
        <Routes>
          {/* <Route path='/card' element={<Card />} /> */}
          <Route path='/' element=" Home" />
          <Route path='/map' element={<Map />} />
          <Route path='/myState' element={<MyState />} />
          <Route path='/mapTable' element={<MapTable />} />
          <Route path='/slider' element={<Slider />} />
          <Route path='/update' element={<Update1 />} />
          <Route path='/textUtils' element={<TextUtils />} />
          <Route path='/form' element={<Form />} />
          <Route path='/form2' element={<Form2 />} />
          <Route path='/form3' element={<Form3 />} />
          <Route path='/search' element={<Search />} />
          <Route path='/slaider' element={<Slaider />} />
          <Route path='/radio' element={<Radio />} />
          <Route path='/maltiPage' element={<MaltiPage />} />
          <Route path='/attendance' element={<Attendance1 />} />
          <Route path='/localStorage' element={<LocalStorage />} />
          <Route path='/imagePage' element={<ImagePage />} />
          <Route path='/number' element={<Number />} />
          <Route path='/motion' element={<Motin />} />
          <Route path='*' element="invalid url path" />
        </Routes>
      </div>
      <div className='d-flex justify-content-around m-5'>
        {/* <Card /> */}

      </div>
      {/* <Map /> */}
      {/* < MapTable /> */}

      {/* <Slider /> */}
      <div className=' d-flex w-100  container  m-5'>
        <div className='w-50'>
          {/* <MyState /> */}
        </div>
        <div>
          {/* <State /> */}
          {/* <Update1 /> */}
        </div>
      </div>

      {/* <TextUtils /> */}

      <div className='my-5'>
        <div>
          {/* <Form /> */}

        </div>
        {/* <div>
          <Mytable />
        </div> */}
      </div>
      <div className='d-flex w-100'>
        <div className='w-50'>
          {/* <Form2 /> */}

        </div>
        <div className='w-50'>
          {/* <Form3 /> */}

        </div>
      </div>
      {/* <Props name1={"pawan"} age={20} />
      <Props abc={a} b={b} />
      <Props obj={obj} />
      <Mycard objImage={objImage} /> */}

      <Toaster />
    </>
  );
}

export default App;
