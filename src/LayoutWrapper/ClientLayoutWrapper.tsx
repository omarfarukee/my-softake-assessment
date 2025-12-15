import Loading from "@/app/loading";


export default function ClientLayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen">
      <Loading>
        <main>{children}</main>
      </Loading>
    </div>
  );
}
