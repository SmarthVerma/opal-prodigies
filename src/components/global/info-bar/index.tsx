import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { UserButton } from "@clerk/nextjs";
import { Search, UploadIcon, Video } from "lucide-react";

type Props = {};

const InfoBar = (props: Props) => {
  return (
    <header className="pl-20 md:pl-[265px] fixed p-4 w-full flex items-center justify-between gap-4 ">
      <div className="flex gap-4 justify-center items-center border-2 rounded-full px-4 w-full max-w-lg">
        <Search size={25} className="text-[#707070]" />
        <Input
          className=" border-none !bg-transparent "
          placeholder="Search for people, projects, tags & folders"
        />
      </div>
      <div className="flex items-center gap-4 font-bold">
        <Button className="bg-[#9D9D9D] flex items-center gap-2">
          <UploadIcon size={20} color="#000" />{" "}
          <span className="flex items-center gap-2 text-black">Upload</span>
        </Button>
        <Button className="bg-[#9D9D9D] flex items-center gap-2">
          <Video size={20} color="#000" />
          <span className="flex items-center gap-2 text-black">Record</span>
        </Button>
        <UserButton />
      </div>    
    </header>
  );
};

export default InfoBar;
