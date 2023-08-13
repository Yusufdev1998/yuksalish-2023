import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MainLayaut from "./layout/MainLayaut";

function App() {
  const navigate = useNavigate();
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user") as string);
    if (!user) {
      navigate("/login");
    }
  });

  return (
    <>
      <MainLayaut></MainLayaut>
    </>
  );
}

export default App;
