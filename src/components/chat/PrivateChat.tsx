export default function PrivateChat({ id }: { id: string }) {
  return (
    <div className="w-4/6">
      <div className="w-full">{id}</div>
    </div>
  );
}
