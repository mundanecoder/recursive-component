import React from "react";
import { Link } from "react-router-dom";

const App: React.FC = () => {
  return (
    <div className=" flex justify-center items-center py-4 ">
      <Link
        to="/filesystem"
        className="py-4 px-2 bg-gray-300 shadow-md justify-center flex w-1/12 rounded"
      >
        recursive file system
      </Link>

      <Link
        to="/fin"
        className="py-4 px-2 bg-gray-300 shadow-md justify-center flex w-1/12 rounded"
      >
        Income statement
      </Link>

      <Link
        to="/ssr"
        className="py-4 px-2 bg-gray-300 shadow-md justify-center flex w-1/12 rounded"
      >
        ssr in csr
      </Link>
      {/* <ApiDocumentation /> */}

      {/* <SubmitForm /> */}
      {/* <div className="  border mt-14 py-8 flex flex-col gap-8 items-center">
        <StatusForm />
        <ResultForm />
      </div> */}
    </div>
  );
};

export default App;
