import { Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import {
  ChatBubbleOvalLeftIcon,
  MagnifyingGlassIcon,
  UserCircleIcon,
} from "@heroicons/react/24/solid";

import { Link } from "../ui/link";

const SideNavigation = () => {
  return (
    <div className="flex flex-col gap-1.5 p-1.5 ps-2 pe-2 shadow-right">
      <Link to="/">
        <ChatBubbleOvalLeftIcon />
      </Link>

      <Link to="/profile">
        <UserCircleIcon />
      </Link>

      <Link to="/search">
        <MagnifyingGlassIcon />
      </Link>
    </div>
  );
};

const SideBar = () => {
  return (
    <aside className="hidden md:flex flex-row absolute top-0 bottom-0 w-40 md:w-52 lg:w-[26rem] shadow-right bg-white">
      <SideNavigation />
      <div className="h-full flex-grow">lkd</div>
    </aside>
  );
};

export const MainLayout = () => {
  return (
    <div className="bg-white flex-1">
      <SideBar />
      <div className="relative ml-0 sm:ml-40 md:ml-52 lg:ml-[26rem] h-full bg-white">
        <main>
          <Outlet />
          <TanStackRouterDevtools />
        </main>
      </div>
    </div>
  );
};
