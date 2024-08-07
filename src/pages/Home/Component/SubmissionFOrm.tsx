import React, { useState } from "react";

const SubmitForm: React.FC = () => {
  const [file, setFile] = useState("");
  const [className, setClassName] = useState("");
  const [args, setArgs] = useState<string[]>([]);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const response = await fetch("http://16.171.237.145:5000/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        file,
        className,
        args,
        driverMemory: "512M",
        driverCores: 1,
        executorMemory: "512M",
        executorCores: 1,
        numExecutors: 2,
        queue: "default",
      }),
    });

    const data = await response.json();
    console.log(data);
    console.log(file, { className, args });

    alert("Job submitted successfully!");
  };

  const handleArgsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newArgs = e.target.value.split(",").map((arg) => arg.trim());
    setArgs(newArgs);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6">Submit Spark Job</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="file" className="block text-gray-700 font-bold mb-2">
            File Path:
          </label>
          <input
            type="text"
            id="file"
            name="file"
            value={file}
            onChange={(e) => setFile(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <p>
          you can use these dummy files i have added in the instance "
          /tmp/dummy/dummy_spark_script_4.py",
          "/tmp/dummydummy_spark_script_6.py"
          ,"/tmp/dummyspark_script.test1.py", "/tmp/dummyspark_script.test2.py"
        </p>
        <div className="mb-4">
          <label
            htmlFor="className"
            className="block text-gray-700 font-bold mb-2"
          >
            Class Name:
          </label>
          <input
            type="text"
            id="className"
            name="className"
            value={className}
            onChange={(e) => setClassName(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="args" className="block text-gray-700 font-bold mb-2">
            Arguments (comma-separated):
          </label>
          <input
            type="text"
            id="args"
            name="args"
            value={args.join(", ")}
            onChange={handleArgsChange}
            className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default SubmitForm;
