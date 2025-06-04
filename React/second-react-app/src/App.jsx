import BoyorGirl from './BoyorGirl.jsx';
import UserGreeting from './UserGreeting.jsx'
import List from './list.jsx'
import Items from './Items.jsx'
import Button from './Button.jsx'
import ProfilePicture from './ProfilePicture.jsx';



const fruits = 
        [{id: 6, name:'Apple', calories: 95}, 
        {id: 7, name:'Orange', calories: 45}, 
        {id: 8, name:'Banana', calories: 105}, 
        {id: 9, name:'Coconut', calories: 159}, 
        {id: 10, name:'Pineapple', calories: 37}];

const food = 
        [{id: 11, name:'Rice', calories: 95}, 
        {id: 12, name:'Yam', calories: 45}, 
        {id: 13, name:'Beans', calories: 105}, 
        {id: 14, name:'Casava', calories: 159}, 
        {id: 15, name:'Potatoes', calories: 37}];


const vehicles = 
        [{id: 1, name: 'Toyota', horsePower: 600},
        {id: 2, name:'Benz', horsePower: 800}, 
        {id: 3, name:'Nissan', horsePower: 500}, 
        {id: 4, name:'Mazda', horsePower: 400}, 
        {id: 5, name: 'Audi', horsePower: 900}]; 
  


function App() {

  

  return(
    <>

      <Button />
      <UserGreeting LoggedIn={true} username='Cecil' age={55} />

      <List items={fruits} category='fruits' group= 'A'/>
      <List items={food} category='food' group='B'/>

      <BoyorGirl isBoy={true}  isGirl={false} boy='John' girl='Ada' />

      {vehicles.length > 0 && <Items ride={vehicles} category= "Cars"/>}

    <ProfilePicture /> 
    </>
  );
}

export default App
