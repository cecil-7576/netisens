// import Card from './Card.jsx'

// function App() {
  
//   return(
//   <>
//     <Card/>
//     <Card/>
//     <Card/>
//     <Card/>
//   </>
//   );
// }

// export default App

// External styling 
// Modules styling
// Inline styling
// import Button from './Button.jsx'

// function App(){

//   return(
//     <>
//       <Button/>
//     </>
//   );
// }

// export default App

import Student from './Student.jsx'

import Child from './Component/Child.jsx'
import Grandchild from './Component/Grandchild.jsx'

function App(){

  return(
    <>
      <Student name="Cecil" age={35} isStudent={true}/>
      <Student name="Naeto" age={2} isStudent={true}/>
      <Student name="Virgil" age={32} isStudent={true}/>
      <Student name="Gillian" age={29} isStudent={true}/>
      <br/>
      <br/>
      <Child/>
      <Grandchild/>
    </>
  );
}

export default App
