import Navbar from "@/components/layout/Navbar";


function App() {
  

  const start = () => {
    intervalRef.current = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);
  };

  const stop = () => {
    clearInterval(intervalRef.current);
  };

  return (
    <div>
      <Navbar />
      <h1 class="text-3xl font-bold underline">Hello world!</h1>
    </div>
  );
}

export default App;
