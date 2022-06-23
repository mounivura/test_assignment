import { Form } from "./components/form";
import { data } from "./components/data";

function App() {
  return (
    <div className="App">
    


      <Form
        initialState={data.data["B47B298A-D09D-4BA1-8BEC-2688532668CF"]}
        views={data.view["B47B298A-D09D-4BA1-8BEC-2688532668CF"]}
      />
    </div>
  );
}

      
    
    

export default App;
