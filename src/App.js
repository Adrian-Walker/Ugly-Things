import React, { useState, useEffect } from 'react';
import './style.css';
import ThingCompoent from './ThingCompoent';
import { AppContext } from './AppContext';

function App() {
  const [contextData, setContextData] = useState([]); // to store all things data
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imgUrl, setImgUrl] = useState("");


  useEffect(() => {
    getAllThings(); // get all the things when init the page
  }, [])
  const clearInputs = () => {
    setTitle('');
    setDescription('');
    setImgUrl('');
  }

  const onSubmit = () => {
    const newThing = {
      title,
      description,
      imgUrl,
    };
    createThing(newThing); // creat new thing with ugly API
  }
  // we need to add async to use await funciton
  const createThing = async (data) => {
    const url = "https://api.vschool.io/adrianwalker/thing";
    // await will return response from promise
    const res = await fetch(url, {
      method: "POST", // send Post request
      // mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data) // to call fetch request with application/json format, it should be converted to string so call JSON.stringigy
    })
    const response = await res.json();
    clearInputs();
    console.log("post", response)
    getAllThings(); // featch all the things after creating new item

  }
  const updateThing = (data) => {

  }


  const getAllThings = async () => {
    const url = "https://api.vschool.io/adrianwalker/thing";
    const res = await fetch(url);
    const things = await res.json()
    setContextData(things);
    console.log("things", things);
  }
  const getThingByID = async (id) => {
    const url = `https://api.vschool.io/adrianwalker/thing/${id}`;
    const res = await fetch(url);
    const thing = await res.json()
    console.log("one thing", thing);
  }

  const deleteThing = async (id) => {
    const url = `https://api.vschool.io/adrianwalker/thing/${id}`;
    const res = await fetch(url, {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const thing = await res.json()
    console.log("delete thing", thing);
    getAllThings()
  }

  return (
    // Main App
    <AppContext.Provider value={{
      contextData,
      setContextData: (data) => setContextData(data)
    }}>
      <div className="app">
        {/* inputs */}
        <div className="inputs">
          <ul>
            <li className="item"><input placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)}></input></li><br />
            <li className="item"><input placeholder="Img URL" value={imgUrl} onChange={(e) => setImgUrl(e.target.value)}></input></li><br />
            <li className="item"><input placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)}></input></li><br />
          </ul>
          <div className='buttonDiv'>
            <button className="submit" onClick={() => onSubmit()}>Submit</button>
          </div>
        </div>
        <div className="things-container">
          {contextData && contextData.length > 0 && contextData.map(thing =>
            <ThingCompoent
              key={thing._id}
              thing={thing}
              onDeleteThing={(id) => deleteThing(id)}
            />
          )}
        </div>
      </div>
    </AppContext.Provider>
  );
}

export default App;
