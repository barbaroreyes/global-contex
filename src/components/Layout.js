import React from 'react';

const Layout = ({children}) => {
  return (
    <div>
     <header className="bg-gray-800 text-white flex px-20 py-5">
     <h1 className="font-black text-lg">Task App</h1>
      <div className="flex-grow text-right">
          <button className="bg-green-300 px-3 py-2 text-black">Add Task</button>
      </div>
     </header>
     <hr/>
     {children}
    </div>
  );
}

export default Layout;
