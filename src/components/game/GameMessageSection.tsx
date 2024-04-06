import Message from "../chat/Message";

export default function GameMessageSection() {
  const mess = [
    ["Hello Im ik Hello Im ik Hello Im ik Hello Im ik", true, "Masato"],
    ["Hello", false, "Seiichi", "7:06 pm"],
    ["Hello Im ik", true, "Masato", "7:06 pm"],
    ["Hello Im ik", true, "Masato", "7:06 pm"],
    ["Hello", false, "Shinobu", "7:06 pm"],
    ["Hello", false, "Seiichi", "7:06 pm"],
    ["Hello Im ik", true, "Masato", "7:06 pm"],
    ["Hello", false, "Shinobu", "7:06 pm"],
    ["Hello Im ik", true, "Masato", "7:06 pm"],
    ["Hello Im ik", true, "Masato", "7:06 pm"],
    ["Hello", false, "Seiichi", "7:06 pm"],
    ["Hello", false, "Shinobu", "7:06 pm"],
    ["Hello Im ik", true, "Masato", "7:06 pm"],
    ["Hello", false, "Seiichi", "7:06 pm"],
    ["Hello Im ik", true, "Masato", "7:06 pm"],
    ["Hello Im ik", true, "Masato", "7:06 pm"],
    ["Hello", false, "Seiichi", "7:06 pm"],
    ["Hello", false, "Shinobu", "7:06 pm"],
    ["Hello Im ik", true, "Masato", "7:06 pm"],
    ["Hello", false, "Shinobu", "7:06 pm"],
    ["Hello Im ik", true, "Masato", "7:06 pm"],
    ["Hello Im ik", true, "Masato", "7:06 pm"],
    ["Hello", false, "Seiichi", "7:06 pm"],
    ["Hello", false, "Shinobu", "7:06 pm"],
  ];
  return (
    <div className="flex h-full flex-col overflow-y-auto px-6">
      <div className="flex flex-col gap-4">
        {mess.map((item, index) => (
          <Message message={item} key={index} />
        ))}
      </div>
    </div>
  );
}
