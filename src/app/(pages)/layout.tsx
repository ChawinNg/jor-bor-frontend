import BackButton from "@/components/ui/BackButton";

export default function Pages({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <BackButton />
      <div className="">{children}</div>
    </div>
  );
}
