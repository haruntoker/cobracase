import { cn } from "@/lib/utils";
import { ReactNode } from "react";

const MaxWidthWrapper = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return (
    <div className={cn(`mx-auto w-full h-full max-w-screen-xl px-2.5 md:px-20`, className)}>
      {children}
    </div>
  );
};

export default MaxWidthWrapper;


// INFO about this component
/**
 * This component reuseable component that at around the application,
 * so we have have standard padding, margin height and etc.
 * and makes the page looks consistent.
 * 
 * USAGE:
 * If you need any specific className you can apply on it, like below:
 * 
 * <MaxWidthWrapper className="pb-24 pt-10 lg:grid lg:grid-cols-3 sm:pb-32 lg:gap-x-0 xl:gap-x-8 lg:pt-24 xl:pt-32 lg:pb-52">
    <div className=""></div>
   </MaxWidthWrapper>
 */