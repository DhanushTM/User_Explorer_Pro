import Navbar from "./Component/NavBar";
import UserDetails from "./Component/UserDetail";
import ActiveUserCount from "./Component/ActiveUserCount";
import Chart from "./Component/Chart";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <ActiveUserCount></ActiveUserCount>
      <UserDetails></UserDetails>
      <Chart></Chart>
    </div>
  );
}

export default App;
