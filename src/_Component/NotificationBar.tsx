import React, { useState } from "react";
import { MdOutlineNotificationsActive } from "react-icons/md";
import NotificationItem from "./NotificationItem";

type Notification = {
  id: number;
  message: string;
  timestamp: Date;
};

export const NotificationBell: React.FC = () => {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const addNotification = (message: string) => {
    const newNotification: Notification = {
      id: notifications.length,
      message,
      timestamp: new Date(),
    };
    setNotifications([...notifications, newNotification]);
  };
  const handleBellClick = () => {
    setIsDropdownVisible(!isDropdownVisible);
    if (!isDropdownVisible) {
      addNotification("your wallet has been funded");
    }
  };
  return (
    <div className="relative">
      <button onClick={handleBellClick} className="relative focus:outline-none">
        <MdOutlineNotificationsActive className="w-6 h-6 text-gray-600" />
        {notifications.length > 0 && (
          <span className="absolute top-0 right-0 inline-block w-2 h-2 bg-red-600 rounded-full"></span>
        )}
      </button>
      {isDropdownVisible && (
        <div className=" rounded-lg shadow-lg bg-white max-h-fit">
          <div className="absolute mx-auto  w-full bg-white">
            <h2 className="text-2xl font-medium">Notifications</h2>

            {notifications.length > 0 ? (
              notifications.map((notification) => (
                <NotificationItem
                  key={notification.id}
                  message={notification.message}
                  timestamp={notification.timestamp}
                />
              ))
            ) : (
              <div className="px-4 py-2 text-gray-700">No notification</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
