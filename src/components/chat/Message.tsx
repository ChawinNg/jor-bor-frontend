export default function Message({
  message,
}: {
  message: (string | boolean)[];
}) {
  return (
    <div
      className={`flex text-base ${
        message[1] ? "justify-end" : "justify-start"
      }`}
    >
      <div
        className={`flex w-10/12 justify-end gap-2 ${
          message[1] ? "flex-row" : "flex-row-reverse"
        }`}
      >
        <div
          className={`flex flex-col gap-y-2 ${
            message[1] ? "items-end" : "items-start"
          }`}
        >
          <div>{message[2]}</div>
          <div
            className={`flex ${
              message[1] ? "flex-row-reverse" : "flex-row"
            } items-end gap-x-3`}
          >
            <div
              className={`break-all rounded-xl px-4 py-2 ${
                message[1]
                  ? "bg-ui-red rounded-tr-none"
                  : "bg-ui-accent rounded-tl-none"
              }`}
            >
              {message[0]}
            </div>
            <div className="text-sm text-ui-text-light">{message[3]}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
