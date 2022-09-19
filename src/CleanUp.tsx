import React, {useState, useEffect} from 'react'

const CleanUp: React.FC = () => {
  const [currentNum, seCurrentNum] = useState(0);
  const incrementNum = () => {
    console.log("Mouse event invoked!");
    seCurrentNum((prev) => prev + 1);
  }

  useEffect(() => {
    console.log("useEffect in CleanUp invoked!!");
    window.addEventListener("mouseDown", incrementNum);
    return () => {
      console.log("Cleanup invoked!");
      window.removeEventListener("mouseDown", incrementNum);
    }
  }, []);

  return (
    <div>
      {currentNum}
    </div>
  )
};

export default CleanUp
