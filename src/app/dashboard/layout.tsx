import SideNav from "../ui/shared/sideNav";


export default function Layout({ children }: { children: React.ReactNode }) {
    return (
      <div className="flex flex-col md:flex-row md:overflow-hidden">
        <div className="w-full flex-none md:w-64">
          <SideNav />
        </div>
        <div className="flex-grow mt-20 md:mt-0 md:p-0  p-6 md:overflow-y-auto ">{children}</div>
      </div>
    );
  }