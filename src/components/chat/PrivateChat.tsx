import MessageSection from "./MessageSection";
import TextFieldSection from "./TextFieldSection";

export default function PrivateChat({ id }: { id: string }) {
  return (
    <div className="w-4/6 flex flex-col h-5/6 gap-y-4">
      <div className="w-full text-2xl font-bold">{id}</div>
      <span className="w-full border-t border-ui-text-light"></span>
      <MessageSection />
      <span className="w-full border-t border-ui-text-light"></span>
      <TextFieldSection id={id} />
    </div>
  );
}
