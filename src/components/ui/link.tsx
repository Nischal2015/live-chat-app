import { memo } from "react";
import { Link as RouterLink, MakeLinkOptions } from "@tanstack/react-router";

import { cn } from "@/utils";

const Link = memo(({ className, to, children, ...props }: MakeLinkOptions) => {
  const childNode =
    typeof children === "function" ? children({ isActive: false }) : children;
  return (
    <RouterLink
      to={to}
      className={cn(
        "leading-none p-2.5 ps-3 pe-3 rounded-xl hover:bg-gray-100",
        className
      )}
      activeProps={{
        className: "bg-gray-100 [&>span>*]:text-slate-950",
      }}
      {...props}
    >
      <span className="inline-block [&>*]:h-6 [&>*]:text-slate-700">
        {childNode}
      </span>
    </RouterLink>
  );
});

Link.displayName = "Link";

export { Link };
