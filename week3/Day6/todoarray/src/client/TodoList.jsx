import React,{useState,useEffect} from 'react'
import axios from 'axios';
export const TodoList = ({  newListItems, checkboxChecked }) => {
    const [data, setdata] = useState('');
    const [res, setres] = useState('');

    const [todos, settodos] = useState();
    function toggleTextDecoration(index) {
        const checkbox = document.getElementById(`checkbox${index}`);
        const label = document.querySelector(`label[for="checkbox${index}"]`);
      
        if (checkbox.checked) {
          label.style.textDecoration = 'line-through';
          label.style.color = 'purple';
        } else {
          label.style.textDecoration = 'none';
        }
      }

      const fetchData = async () => {
        try {
          const response = await axios.get('http://localhost:5000/');
          const data = response.data;
          // Process the data received from the server
          console.log('ssss',data); 
          // Example: log the received data
        //   setDay(data.day);
        //   console.log(day,'one')
        //   settodos(data.newItems)
        //   console.log(todos,'two')
        setres(data)
                  console.log(res.day,"sdfdhjg")
                  console.log(res.newItems,"")


        } catch (error) {
          console.error(error,'you are wrong');
        }
      };



      useEffect(() => {
        fetchData(); // Fetch data when the component mounts
      }, []);

   
      const MyComponent = () => {
        const [inputValue, setInputValue] = useState('');
      
    
        const handleInputChange = (event) => {
          setInputValue(event.target.value);
        };
    
        const handleSubmit = async (event) => {
            event.preventDefault(); // Prevent form submission
            console.log(inputValue);
          
            try {
                console.log("sdsfgghfjfhjkgk",inputValue);

              const response = await axios.post('http://localhost:5000/', { newItems:inputValue });
              const dataValues = response.data;
              console.log("responsDATA",dataValues)
              setdata(dataValues)

                 // Log the response from the server
            } catch (error) {
              console.error(error, 'An error occurred while posting data');
            }
          };

       
  
  return (
  <>
 
  <div style={{marginTop: '25px'}}>
    <h1
      style={{
        backgroundColor: 'blueviolet',
        textAlign: 'center',
        width: '50%',
        margin: '0 auto',
        borderRadius: '5px',
        paddingTop: '25px',
        paddingBottom : '25px',
        color: 'black',
        
      }}
    >
      {res.day} 
    </h1>

    <div
      className="main"
      style={{
        borderRadius: '5px',
        backgroundColor: 'white',
        width: '50%',
        margin: '0 auto',
        marginTop: '50px',
        paddingTop: '25px',
        paddingBottom: '15px'
        
      }}
    >

<ul>
  {/* {data.map((item, index) => (
    <li key={index} style={{ marginTop: '25px', listStyle: 'none' }}>
      <input
        type="checkbox"
        id={`checkbox${index}`}
        style={{ marginRight: '15px' }}
        onChange={() => toggleTextDecoration(index)}
      />
      <label
        htmlFor={`checkbox${index}`}
        style={{
          textDecoration: checkboxChecked[index] ? 'line-through' : 'none',
        }}
      >
        {item}
      </label>
    </li>
  ))} */}
</ul>

         
       {
        <ul>
            {
                data.map((todo)=>{
                    return(
                        <li>{todo}</li>
                    )

                })
            }
        {/* {
           newListItems.map((item, index) => (
          <li key={index} style={{ marginTop: '25px', listStyle: 'none' }}>
            <input
              type="checkbox"
              id={`checkbox${index}`}
              style={{ marginRight: '15px' }}
              onChange={() => toggleTextDecoration(index)}
            />
            <label
              htmlFor={`checkbox${index}`}
              style={{
                textDecoration: checkboxChecked[index] ? 'line-through' : 'none',
              }}
            >
              {item}
            </label>
          </li>
        ))} */}
      </ul>
       }  

      <form
      onSubmit={handleSubmit}
        action="/"
        method="post"
        style={{
          marginTop: '35px',
          display: 'flex',
          justifyContent: 'space-evenly',
        }}
      >
        <input
          type="text"
          name="newItem"
          autoComplete="off"
          placeholder="New Item"
          onChange={handleInputChange}
         value={inputValue}
          style={{ border: 0 }}
        />
        <button
          type="submit"
          style={{
            backgroundColor: 'blueviolet',
            outline: 'none',
            border: 0,
            fontSize: '30px',
            color: 'white',
            width: '50px',
            height: '50px',
            borderRadius: '50%',
          }}
        >
          +
        </button>
      </form>
     
    </div>
  </div>

  </>
   
  )
};
return <MyComponent />;
};
