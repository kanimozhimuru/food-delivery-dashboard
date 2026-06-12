import { useState } from "react";

export default function CreateUserModal() {
  const [show, setShow] = useState(false);

  return (
    <>
      <button
        onClick={() => setShow(true)}
        className="bg-blue-600 text-white px-4 py-2 rounded-lg"
      >
        Create User
      </button>

      {show && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center">

          <div className="bg-white p-6 rounded-xl w-96">
            <h2 className="text-xl font-bold mb-4">
              Create User
            </h2>

            <input
              placeholder="Name"
              className="border w-full p-2 rounded mb-3"
            />

            <input
              placeholder="Email"
              className="border w-full p-2 rounded mb-3"
            />

            <div className="flex gap-3">
              <button
                onClick={() => setShow(false)}
                className="bg-gray-300 px-4 py-2 rounded"
              >
                Cancel
              </button>

              <button className="bg-blue-600 text-white px-4 py-2 rounded">
                Save
              </button>
            </div>
          </div>

        </div>
      )}
    </>
  );
}