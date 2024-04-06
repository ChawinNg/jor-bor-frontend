import Image from "next/image";

export default function InviteCard({ name }: { name: string }) {
  return (
    <div className="flex flex-row w-full rounded-lg text-2xl font-semibold items-center bg-ui-accent p-6 gap-x-4 ">
      <input
        type="checkbox"
        className="size-8 appearance-auto border-white border-2 rounded-md checked:bg-ui-accent focus:text-white indeterminate:bg-ui-accent checkmark-white"
      ></input>
      <div className="text-center">{name}</div>
    </div>
  );
}
