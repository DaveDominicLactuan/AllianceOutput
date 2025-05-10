"use client"

import type React from "react"
import { useState } from "react"

// Define prop types for Card component
interface CardProps {
  children: React.ReactNode
  className?: string
}

// Local Card component
const Card: React.FC<CardProps> = ({ children, className = "" }) => {
  return <div className={`bg-white rounded-md shadow-sm p-6 ${className}`}>{children}</div>
}

// Define prop types for Switch component
interface SwitchProps {
  id: string
  checked: boolean
  onCheckedChange: (checked: boolean) => void
  className?: string
}

// Local Switch component
const Switch: React.FC<SwitchProps> = ({ id, checked, onCheckedChange, className = "" }) => {
  return (
    <label htmlFor={id} className={`relative inline-flex items-center cursor-pointer ${className}`}>
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={(e) => onCheckedChange(e.target.checked)}
        className="sr-only"
      />
      <div className={`w-11 h-6 rounded-full transition-colors ${checked ? "bg-green-500" : "bg-gray-300"}`}>
        <div
          className={`absolute top-[2px] left-[2px] bg-white w-5 h-5 rounded-full transition-transform ${
            checked ? "translate-x-5" : "translate-x-0"
          }`}
        />
      </div>
    </label>
  )
}

const Settings: React.FC = () => {
  // State for notification settings
  const [desktopNotifications, setDesktopNotifications] = useState(true)
  const [taskbarFlashing, setTaskbarFlashing] = useState(true)
  const [notificationSounds, setNotificationSounds] = useState(true)

  // State for preference settings
  const [hideUserDetails, setHideUserDetails] = useState(true)
  const [largerText, setLargerText] = useState(true)

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Left sidebar */}
      <div className="w-64 bg-blue-100 p-6">
        <h1 className="text-2xl font-bold text-blue-900">Settings and Preferences</h1>
      </div>

      {/* Main content */}
      <div className="flex-1 p-6">
        {/* Notifications section */}
        <Card className="mb-6">
          <h2 className="text-xl font-semibold text-blue-600 mb-6">Notifications</h2>

          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <label htmlFor="desktop-notifications" className="text-blue-500 font-medium">
                Enable Desktop Notifications
              </label>
              <Switch
                id="desktop-notifications"
                checked={desktopNotifications}
                onCheckedChange={setDesktopNotifications}
              />
            </div>

            <div className="flex items-center justify-between">
              <label htmlFor="taskbar-flashing" className="text-blue-500 font-medium">
                Enable Taskbar Flashing
              </label>
              <Switch id="taskbar-flashing" checked={taskbarFlashing} onCheckedChange={setTaskbarFlashing} />
            </div>

            <div className="flex items-center justify-between">
              <label htmlFor="notification-sounds" className="text-blue-500 font-medium">
                Enable Notification Sounds
              </label>
              <Switch id="notification-sounds" checked={notificationSounds} onCheckedChange={setNotificationSounds} />
            </div>
          </div>
        </Card>

        {/* Preferences section */}
        <Card>
          <h2 className="text-xl font-semibold text-blue-600 mb-6">Preferences</h2>

          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <label htmlFor="hide-user-details" className="text-blue-500 font-medium">
                Privacy - Hide User Details from Others
              </label>
              <Switch id="hide-user-details" checked={hideUserDetails} onCheckedChange={setHideUserDetails} />
            </div>

            <div className="flex items-center justify-between">
              <label htmlFor="larger-text" className="text-blue-500 font-medium">
                Enable Larger Text
              </label>
              <Switch id="larger-text" checked={largerText} onCheckedChange={setLargerText} />
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}

export default Settings
