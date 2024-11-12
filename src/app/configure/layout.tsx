import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Steps from "@/components/Steps";
import { ReactNode } from "react";


const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <MaxWidthWrapper className="flex flex-1 flex-col">
      <Steps />
      {children}
    </MaxWidthWrapper>
  );
};

export default Layout;

/**NOTE:
 * this layout inside configure folder "/configure/layout.tsx" 
 * will apply to all subfolders in the configure folder. NOT OUT
 *  
 */
