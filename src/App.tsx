import Picture from "./app/Picture";
import Register from "./app/Register";

const App = () => {
  return (
    <main>
      <div className="grid grid-cols-12">
        <div className="col-span-8 overflow-hidden max-lg:col-span-6 max-md:col-span-12">
          <Picture />
        </div>
        <div className="col-span-4 max-lg:col-span-6 max-md:col-span-12">
          <Register />
        </div>
      </div>
    </main>
  );
};

export default App;
