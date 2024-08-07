// components/ApiDocumentation.tsx
import React from "react";

const ApiDocumentation: React.FC = () => {
  const baseUrl = "http://16.171.237.145:5000/api/v1";

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white md:shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold mb-6 text-blue-600">
        API Documentation
      </h1>
      <a href="http://16.171.237.145:5000" className="underline">
        click to check if the server is running
      </a>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-green-600">Overview</h2>
        <p className="mb-2">
          This API allows you to submit and manage Spark jobs via Livy.
        </p>
        <p className="mb-4">
          Base URL:{" "}
          <code className="bg-gray-100 p-1 rounded text-green-500 text-sm md:text-md">
            {baseUrl}
          </code>
        </p>
        <p className="mb-4">
          You can use these dummy files that have been added to the instance:
        </p>
        <ul className="list-disc list-inside mb-4 text-xs md:text-sm">
          <li className="text-gray-700">/tmp/dummy/dummy_spark_script_4.py</li>
          <li className="text-gray-700">/tmp/dummy/dummy_spark_script_6.py</li>
          <li className="text-gray-700">/tmp/dummy/spark_script.test1.py</li>
          <li className="text-gray-700">/tmp/dummy/spark_script.test2.py</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-green-600">
          Authentication
        </h2>
        <p className="mb-4">
          This API uses JWT for authentication. You need to sign up and log in
          to get a token.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-green-600">Sign Up</h2>
        <h3 className="text-xl font-medium mb-2 text-blue-500">POST /signup</h3>
        <p className="mb-4">Create a new user account.</p>

        <h4 className="text-lg font-medium mb-2 text-purple-500">
          Request Body:
        </h4>
        <pre className="bg-gray-100 p-4 rounded mb-4 overflow-x-auto text-green-500">
          {`{
  "username": "your_username",
  "password": "your_password"
}`}
        </pre>

        <h4 className="text-lg font-medium mb-2 text-purple-500">Response:</h4>
        <pre className="bg-gray-100 p-4 rounded mb-4 overflow-x-auto text-green-500">
          {`{
  "message": "User created successfully"
}`}
        </pre>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-green-600">Log In</h2>
        <h3 className="text-xl font-medium mb-2 text-blue-500">POST /login</h3>
        <p className="mb-4">Log in to get a JWT token.</p>

        <h4 className="text-lg font-medium mb-2 text-purple-500">
          Request Body:
        </h4>
        <pre className="bg-gray-100 p-4 rounded mb-4 overflow-x-auto text-green-500">
          {`{
  "username": "your_username",
  "password": "your_password"
}`}
        </pre>

        <h4 className="text-lg font-medium mb-2 text-purple-500">Response:</h4>
        <pre className="bg-gray-100 p-4 rounded mb-4 overflow-x-auto text-green-500">
          {`{
  "token": "your_jwt_token"
}`}
        </pre>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-green-600">
          Submit a Spark Job
        </h2>
        <h3 className="text-xl font-medium mb-2 text-blue-500">POST /submit</h3>
        <p className="mb-4">Submit a new Spark job to the Livy server.</p>

        <h4 className="text-lg font-medium mb-2 text-purple-500">Headers:</h4>
        <pre className="bg-gray-100 p-4 rounded mb-4 overflow-x-auto text-green-500">
          {`Authorization: Bearer your_jwt_token`}
        </pre>

        <h4 className="text-lg font-medium mb-2 text-purple-500">
          Request Body:
        </h4>
        <pre className="bg-gray-100 p-4 rounded mb-4 overflow-x-auto text-green-500">
          {`{
  "file": "/tmp/dummy/dummy_spark_script_4.py",
  "className": "org.apache.spark.examples.SparkPi",
  "args": ["1000"],
  "jars": [],
  "pyFiles": [],
  "files": [],
  "driverMemory": "512M",
  "driverCores": 1,
  "executorMemory": "512M",
  "executorCores": 1,
  "numExecutors": 2,
  "archives": [],
  "queue": "default",
  "conf": {}
}`}
        </pre>

        <h4 className="text-lg font-medium mb-2 text-purple-500">Response:</h4>
        <pre className="bg-gray-100 p-4 rounded mb-4 overflow-x-auto text-green-500">
          {`{
  "id": 0,
  "name": "spark-job-cbff4953-91b7-4b12-8daf-ad55c1c7973e",
  "owner": null,
  "proxyUser": null,
  "state": "running",
  "appId": null,
  "appInfo": {
    "driverLogUrl": null,
    "sparkUiUrl": null
  },
  "log": [
    "stdout: ",
    "\nstderr: "
  ]
}`}
        </pre>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-green-600">
          Get Job Status
        </h2>
        <h3 className="text-xl font-medium mb-2 text-blue-500">
          GET /status/:batch_id
        </h3>
        <p className="mb-4">Get the status of a submitted Spark job.</p>

        <h4 className="text-lg font-medium mb-2 text-purple-500">Headers:</h4>
        <pre className="bg-gray-100 p-4 rounded mb-4 overflow-x-auto text-green-500">
          {`Authorization: Bearer your_jwt_token`}
        </pre>

        <h4 className="text-lg font-medium mb-2 text-purple-500">
          Parameters:
        </h4>
        <ul className="list-disc list-inside mb-4">
          <li className="text-gray-700">
            <code className="bg-gray-100 p-1 rounded text-green-500">
              batch_id
            </code>
            : The ID of the submitted job
          </li>
        </ul>

        <h4 className="text-lg font-medium mb-2 text-purple-500">Response:</h4>
        <p>
          The response will contain the full status of the batch job as returned
          by Livy.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-green-600">
          Get Job Result
        </h2>
        <h3 className="text-xl font-medium mb-2 text-blue-500">
          GET /result/:batch_id
        </h3>
        <p className="mb-4">Get the result of a Spark job.</p>

        <h4 className="text-lg font-medium mb-2 text-purple-500">Headers:</h4>
        <pre className="bg-gray-100 p-4 rounded mb-4 overflow-x-auto text-green-500">
          {`Authorization: Bearer your_jwt_token`}
        </pre>

        <h4 className="text-lg font-medium mb-2 text-purple-500">
          Parameters:
        </h4>
        <ul className="list-disc list-inside mb-4">
          <li className="text-gray-700">
            <code className="bg-gray-100 p-1 rounded text-green-500">
              batch_id
            </code>
            : The ID of the job
          </li>
        </ul>

        <h4 className="text-lg font-medium mb-2 text-purple-500">Response:</h4>
        <p>
          The response will contain the state of the batch job as returned by
          Livy.
        </p>
      </section>

      {/* <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-green-600">
          Health Check
        </h2>
        <h3 className="text-xl font-medium mb-2 text-blue-500">GET /health</h3>
        <p className="mb-4">Check the health status of the API.</p>

        <h4 className="text-lg font-medium mb-2 text-purple-500">Response:</h4>
        <pre className="bg-gray-100 p-4 rounded mb-4 overflow-x-auto text-green-500">
          {`{
  "status": "OK",
  "timestamp": "2023-07-26T12:34:56.789Z",
  "livy_url": "http://16.171.237.145:8998"
}`}
        </pre>
      </section> */}
    </div>
  );
};

export default ApiDocumentation;
