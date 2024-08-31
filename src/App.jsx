import "./App.css";
import { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";

function App() {
  const [tost, setTost] = useState([]);

  const handleCloseIcon = (id) => {
    setTost(tost.filter((item) => item.id !== id));
  };

  const handleClick = () => {
    const newTost = {
      id: Date.now(),
      massage: Math.floor(Math.random() * 10),
      icon: <IoCloseOutline className="crosIcon" />,
    };

    setTost((prevTost) => [...prevTost, newTost]);

    setTimeout(() => {
      setTost((prevTost) => prevTost.filter((item) => item.id !== newTost.id));
    }, 5000);
  };

  return (
    <>
      <div className="mainDiv">
        <div className="tostMassageDiv">
          <div className="tostMassage">
            {tost.map((item) => (
              <div key={item.id} className="tostItem">
                <span onClick={() => handleCloseIcon(item.id)}>
                  {item.icon}
                </span>
                {item.massage}
              </div>
            ))}
          </div>
        </div>
        <button className="massageBtn" onClick={handleClick}>
          Get Massage
        </button>
      </div>
    </>
  );
}

export default App;
