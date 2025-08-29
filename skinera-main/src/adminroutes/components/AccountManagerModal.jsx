import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function AccountManagerModal({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState("password"); // 'password' | 'username'

  // Profile info from backend
  const [stored, setStored] = useState({ username: "" });

  useEffect(() => {
    if (!isOpen) return;
    const loadProfile = async () => {
      try {
        const resp = await fetch(
          import.meta.env.VITE_SERVER_URL + "/api/admin/profile"
        );
        const data = await resp.json();
        if (resp.ok && data?.success) {
          setStored({ username: data.username || "" });
          // Optional: keep for display elsewhere
          localStorage.setItem("admin.username", data.username || "");
        } else {
          toast.error(data?.message || "Failed to load profile");
        }
      } catch (e) {
        toast.error("Failed to load profile");
      }
    };
    loadProfile();
  }, [isOpen]);

  // Change Password form state
  const [pwdForm, setPwdForm] = useState({
    current: "",
    next: "",
    confirm: "",
  });
  const [pwdMsg, setPwdMsg] = useState({ type: "", text: "" });

  // Change Username form state
  const [userForm, setUserForm] = useState({
    password: "",
    username: "",
    confirm: "",
  });
  const [userMsg, setUserMsg] = useState({ type: "", text: "" });

  const closeAndReset = () => {
    setPwdForm({ current: "", next: "", confirm: "" });
    setUserForm({ password: "", username: "", confirm: "" });
    setPwdMsg({ type: "", text: "" });
    setUserMsg({ type: "", text: "" });
    setActiveTab("password");
    onClose?.();
  };

  const handlePasswordUpdate = (e) => {
    e.preventDefault();
    setPwdMsg({ type: "", text: "" });
    const { current, next, confirm } = pwdForm;
    if (!current || !next || !confirm) {
      return setPwdMsg({ type: "error", text: "All fields are required." });
    }
    if (next.length < 6) {
      return setPwdMsg({
        type: "error",
        text: "New password must be at least 6 characters.",
      });
    }
    if (next !== confirm) {
      return setPwdMsg({
        type: "error",
        text: "New password and confirm password must match.",
      });
    }
    // Call backend API
    (async () => {
      try {
        const resp = await fetch(
          import.meta.env.VITE_SERVER_URL + "/api/admin/change-password",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              currentPassword: current,
              newPassword: next,
            }),
          }
        );
        const data = await resp.json();
        if (resp.ok && data?.success) {
          toast.success("Password updated successfully");
          setPwdForm({ current: "", next: "", confirm: "" });
          setPwdMsg({ type: "", text: "" });
        } else {
          setPwdMsg({ type: "error", text: data?.message || "Update failed" });
        }
      } catch (e) {
        setPwdMsg({ type: "error", text: "Update failed" });
      }
    })();
  };

  const handleUsernameUpdate = (e) => {
    e.preventDefault();
    setUserMsg({ type: "", text: "" });
    const { password, username, confirm } = userForm;
    if (!password || !username || !confirm) {
      return setUserMsg({ type: "error", text: "All fields are required." });
    }
    if (username.trim().length < 3) {
      return setUserMsg({
        type: "error",
        text: "Username must be at least 3 characters.",
      });
    }
    if (username !== confirm) {
      return setUserMsg({
        type: "error",
        text: "Username and confirm username must match.",
      });
    }
    // Call backend API
    (async () => {
      try {
        const resp = await fetch(
          import.meta.env.VITE_SERVER_URL + "/api/admin/change-username",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ password, newUsername: username }),
          }
        );
        const data = await resp.json();
        if (resp.ok && data?.success) {
          const nextUsername = data.username || username;
          setStored((s) => ({ ...s, username: nextUsername }));
          localStorage.setItem("admin.username", nextUsername);
          toast.success("Username updated successfully");
          setUserForm({ password: "", username: "", confirm: "" });
          setUserMsg({ type: "", text: "" });
        } else {
          setUserMsg({ type: "error", text: data?.message || "Update failed" });
        }
      } catch (e) {
        setUserMsg({ type: "error", text: "Update failed" });
      }
    })();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/30" onClick={closeAndReset} />

      {/* Panel */}
      <div className="relative z-10 w-full max-w-2xl mx-4 bg-white rounded-lg shadow-xl">
        <div className="border-b px-6 py-4 flex items-center justify-between">
          <h3 className="text-xl font-domine font-medium text-[#b37556]">
            Manage Account
          </h3>
          <button
            onClick={closeAndReset}
            className="text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
        </div>

        {/* Tabs */}
        <div className="px-6 pt-4 pb-6">
          <div className="inline-flex rounded-md shadow-sm mb-4" role="tablist">
            <button
              onClick={() => setActiveTab("password")}
              className={`px-4 py-2 text-sm font-medium border ${
                activeTab === "password"
                  ? "bg-[#c98963] text-white border-[#c98963]"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
              } rounded-l-md`}
            >
              Change Password
            </button>
            <button
              onClick={() => setActiveTab("username")}
              className={`px-4 py-2 text-sm font-medium border-t border-b border-r ${
                activeTab === "username"
                  ? "bg-[#c98963] text-white border-[#c98963]"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
              } rounded-r-md`}
            >
              Change Username
            </button>
          </div>

          {/* Forms */}
          {activeTab === "password" ? (
            <form onSubmit={handlePasswordUpdate} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Current Password
                </label>
                <input
                  type="password"
                  value={pwdForm.current}
                  onChange={(e) =>
                    setPwdForm((f) => ({ ...f, current: e.target.value }))
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#c98963]"
                  placeholder="Enter current password"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  New Password
                </label>
                <input
                  type="password"
                  value={pwdForm.next}
                  onChange={(e) =>
                    setPwdForm((f) => ({ ...f, next: e.target.value }))
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#c98963]"
                  placeholder="Enter new password"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Confirm New Password
                </label>
                <input
                  type="password"
                  value={pwdForm.confirm}
                  onChange={(e) =>
                    setPwdForm((f) => ({ ...f, confirm: e.target.value }))
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#c98963]"
                  placeholder="Confirm new password"
                />
              </div>
              {pwdMsg.text && (
                <div
                  className={`p-3 rounded-md text-sm ${
                    pwdMsg.type === "success"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {pwdMsg.text}
                </div>
              )}
              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={closeAndReset}
                  className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300"
                >
                  Close
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#c98963] text-white rounded-md hover:bg-[#be7f58]"
                >
                  Update Password
                </button>
              </div>
            </form>
          ) : (
            <form onSubmit={handleUsernameUpdate} className="space-y-4">
              <div className="text-sm text-gray-600">
                Current username:{" "}
                <span className="font-medium">{stored.username}</span>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  value={userForm.password}
                  onChange={(e) =>
                    setUserForm((f) => ({ ...f, password: e.target.value }))
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#c98963]"
                  placeholder="Enter your password"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  New Username
                </label>
                <input
                  type="text"
                  value={userForm.username}
                  onChange={(e) =>
                    setUserForm((f) => ({ ...f, username: e.target.value }))
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#c98963]"
                  placeholder="Enter new username"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Confirm Username
                </label>
                <input
                  type="text"
                  value={userForm.confirm}
                  onChange={(e) =>
                    setUserForm((f) => ({ ...f, confirm: e.target.value }))
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#c98963]"
                  placeholder="Confirm new username"
                />
              </div>
              {userMsg.text && (
                <div
                  className={`p-3 rounded-md text-sm ${
                    userMsg.type === "success"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {userMsg.text}
                </div>
              )}
              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={closeAndReset}
                  className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300"
                >
                  Close
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#c98963] text-white rounded-md hover:bg-[#be7f58]"
                >
                  Update Username
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
