import MessageSection from "./MessageSection";

export default function PrivateChat({ id }: { id: string }) {
  return (
    <div className="w-4/6 flex flex-col h-5/6 gap-y-8">
      <div className="w-full text-2xl font-bold">{id}</div>
      <span className="w-full border-t border-ui-text-light"></span>
      <MessageSection />
    </div>
  );
}
