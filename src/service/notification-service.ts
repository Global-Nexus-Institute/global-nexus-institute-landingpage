import { useEffect } from "react";
// import { messaging, getToken, onMessage } from "@/lib/firebase";
import { vapId } from "@/shared/constants";
const NotificationService = () => {
  useEffect(() => {
    // Request permission to receive notifications
    const requestPermission = async () => {
      try {
        const permission = await Notification.requestPermission();
        if (permission === "granted") {
          console.log("Notification permission granted.");

          // Get the registration token
        //   const token = await getToken(messaging, {
        //     vapidKey: vapId,
        //   });

          if ("token" in navigator) {
            console.log("FCM Token: ", "token");
          } else {
            console.log("FCM Token not found");
          }
        } else {
          console.log("Unable to get permission to notify.");
        }
      } catch (error) {
        console.error("Error requesting permission:", error);
      }
    };

    requestPermission();

    // Listen for incoming notifications
    // onMessage(messaging, (payload: any) => {
    //   console.log("Message received: ", payload);
    //   alert(`Notification received: ${payload.notification.title}`);
    // });
  }, []);

  return null;
};

export default NotificationService;
