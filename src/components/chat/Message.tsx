import { useAuth } from "@/contexts/AuthProvider";
import { useTheme } from "@/contexts/ThemeProvider";
import { Messages } from "@/models/Message";
import { useEffect } from "react";

export default function Message({ message }: { message: Messages }) {
  const { theme, setTheme } = useTheme();
  const { user, setUser } = useAuth();
  const sentAt = new Date(message.time);
  const hour = String(sentAt.getHours()).padStart(2, "0");
  const minute = String(sentAt.getMinutes()).padStart(2, "0");

  return (
    <div
      className={`flex text-base ${
        message.user == user.data.username ? "justify-end" : "justify-start"
      }`}
    >
      <div
        className={`flex w-10/12 justify-end gap-2 ${
          message.user == user.data.username ? "flex-row" : "flex-row-reverse"
        }`}
      >
        <div
          className={`flex flex-col gap-y-2 ${
            message.user == user.data.username ? "items-end" : "items-start"
          }`}
        >
          <div>{message.user}</div>
          <div
            className={`flex ${
              message.user == user.data.username
                ? "flex-row-reverse"
                : "flex-row"
            } items-end gap-x-3`}
          >
            <div
              className={`break-all rounded-xl px-4 py-2 ${
                message.user == user.data.username
                  ? "bg-ui-red rounded-tr-none"
                  : "bg-ui-accent rounded-tl-none"
              } ${theme == "night" ? "text-white" : "text-white"}`}
            >
              {message.message}
            </div>
            <div className="text-sm text-ui-text-light">
              {`${hour}:${minute}`}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
