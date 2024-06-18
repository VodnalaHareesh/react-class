import { React} from 'react' //imporing useState from react package
import { BrowserRouter,Routes,Route } from 'react-router-dom'
// import UserData from './UserData
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Navigation from './Navigation'
export default function App(){
  return(
    <BrowserRouter>
    <Navigation/>
      <Routes>
        <Route path= "/" element ={ <Home/>}/>
        <Route path ="/about" element ={<About/>}/>
        <Route path ='/contact' element ={<Contact/>}/>
</Routes>
</BrowserRouter>



  )
}

// import Props from './Props'
// import List from './List'
// import Input from './Input'
// import Vehicles from './Vehicles'


//{/* 
// function App() { //function name should be app */}
//   const [name, setName] = useState('reactjs')//setname-if we change  the value of name in future it will use
//   const [year, setYear] = useState(2013)


//   return (
   
//     //only one element will work if we want more mention in div tag
//     //return variables in curly braces
//     //props for pass 
//     <div>
//       <UserData/>
//       {/* <Movies/>
//       <Vehicles/>
//       <Input/>
//       <List/> */}
//       {/* <p> this is the first code in react js</p>
//       <p> this is the first code in react js</p>
//       <p>name:{name}  year:{year}</p>
//       <Props studentName="hareesh"studentRollno="1"/>
//       <Props studentName="suresh"studentRollno="2"/>
//       <Props studentName="naresh"studentRollno="3"/> */}
//     </div>

//   )
// }
//export default App 