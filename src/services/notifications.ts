import { store } from "react-notifications-component";

type NotificationType = "success" | "warning" | "danger" | undefined;
type NotificationContainerType =
  | "top-full"
  | "top-left"
  | "top-right"
  | "top-center"
  | "center"
  | "bottom-full"
  | "bottom-left"
  | "bottom-right"
  | "bottom-center";

export const showNotification = (
  title: string,
  message: string,
  container: NotificationContainerType,
  type: NotificationType
) => {
  store.addNotification({
    title: title,
    message: message,
    type: type,
    insert: "top",
    container: container,
    animationIn: ["animate__animated", "animate__fadeIn"],
    animationOut: ["animate__animated", "animate__fadeOut"],
    dismiss: {
      duration: 5000,
      onScreen: false,
    },
  });
};
