import { useState } from "react";

export default function Settings() {
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [emailAlerts, setEmailAlerts] = useState(true);
  const [message, setMessage] = useState("");

  const handleDarkMode = () => {
    document.documentElement.classList.toggle("dark");
    setDarkMode(!darkMode);
  };

  const handleSave = () => {
    setMessage("✅ Settings saved successfully!");

    setTimeout(() => {
      setMessage("");
    }, 3000);
  };

  const handleDelete = () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete your account?"
    );

    if (confirmDelete) {
      setMessage("🗑️ Account deleted successfully!");

      setTimeout(() => {
        setMessage("");
      }, 3000);
    }
  };

  return (
    <div className="p-4 md:p-6">
      <h1 className="text-2xl md:text-3xl font-bold mb-6">
        Settings
      </h1>

      {message && (
        <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-lg">
          {message}
        </div>
      )}

      <div className="bg-white dark:bg-slate-800 rounded-xl shadow p-6 space-y-8">

        {/* Profile Section */}
        <div>
          <h2 className="text-xl font-semibold mb-4">
            Profile Information
          </h2>

          <div className="flex flex-col md:flex-row gap-6 items-center mb-4">
            <img
              src="https://i.pravatar.cc/100"
              alt="Profile"
              className="w-24 h-24 rounded-full"
            />

            <input
              type="file"
              className="border p-2 rounded-lg"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Full Name"
              className="border p-3 rounded-lg text-black"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="border p-3 rounded-lg text-black"
            />

            <input
              type="text"
              placeholder="Phone Number"
              className="border p-3 rounded-lg text-black"
            />

            <input
              type="text"
              placeholder="Address"
              className="border p-3 rounded-lg text-black"
            />
          </div>
        </div>

        {/* Password */}
        <div>
          <h2 className="text-xl font-semibold mb-4">
            Change Password
          </h2>

          <div className="grid gap-4">
            <input
              type="password"
              placeholder="Current Password"
              className="border p-3 rounded-lg text-black"
            />

            <input
              type="password"
              placeholder="New Password"
              className="border p-3 rounded-lg text-black"
            />

            <input
              type="password"
              placeholder="Confirm Password"
              className="border p-3 rounded-lg text-black"
            />
          </div>
        </div>

        {/* Notifications */}
        <div>
          <h2 className="text-xl font-semibold mb-4">
            Notifications
          </h2>

          <div className="space-y-4">
            <label className="flex justify-between items-center">
              <span>Push Notifications</span>

              <input
                type="checkbox"
                checked={notifications}
                onChange={() =>
                  setNotifications(!notifications)
                }
              />
            </label>

            <label className="flex justify-between items-center">
              <span>Email Alerts</span>

              <input
                type="checkbox"
                checked={emailAlerts}
                onChange={() =>
                  setEmailAlerts(!emailAlerts)
                }
              />
            </label>
          </div>
        </div>

        {/* Appearance */}
        <div>
          <h2 className="text-xl font-semibold mb-4">
            Appearance
          </h2>

          <label className="flex justify-between items-center">
            <span>Dark Mode</span>

            <input
              type="checkbox"
              checked={darkMode}
              onChange={handleDarkMode}
            />
          </label>
        </div>

        {/* Language */}
        <div>
          <h2 className="text-xl font-semibold mb-4">
            Language
          </h2>

          <select className="border p-3 rounded-lg w-full text-black">
            <option>English</option>
            <option>Tamil</option>
            <option>Hindi</option>
          </select>
        </div>

        {/* Delivery Preference */}
        <div>
          <h2 className="text-xl font-semibold mb-4">
            Delivery Preference
          </h2>

          <select className="border p-3 rounded-lg w-full text-black">
            <option>Standard Delivery</option>
            <option>Express Delivery</option>
            <option>Priority Delivery</option>
          </select>
        </div>

        {/* Security */}
        <div>
          <h2 className="text-xl font-semibold mb-4">
            Security
          </h2>

          <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg">
            Enable Two-Factor Authentication
          </button>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={handleSave}
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg"
          >
            Save Changes
          </button>

          <button
            onClick={handleDelete}
            className="bg-red-500 hover:bg-red-600 text-white px-5 py-3 rounded-lg"
          >
            Delete Account
          </button>
        </div>

      </div>
    </div>
  );
}