// import { LanguageToggle } from "@/components/LanguageToggle";
// import { Button } from "@/components/ui/button";
// import { ArrowDown } from "lucide-react";
// import { useTranslation } from "react-i18next";

function Header() {
  // const { t } = useTranslation()
  return (
    <div className="flex justify-between items-center px-6 flex-wrap gap-5 ">
      <div>
        <h1 className="font-[500]">Welcome Back!</h1>
        <p className=" font-poppins text-[#7e817b] text-[12px] font-[400] leading-[14px] tracking-[0px]">
        </p>
      </div>

      <div className="flex gap-5 items-center">
        <button className="border-none">

        </button>
        <button className="bg-[#4763E4] hover:bg-[#363d5e]">
        </button>
      </div>
    </div>
  );
}

export default Header;
