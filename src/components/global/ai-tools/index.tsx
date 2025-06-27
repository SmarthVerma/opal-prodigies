import { Button } from "@/components/ui/button";
import { TabsContent } from "@/components/ui/tabs";

type Props = {
  plan: "FREE"  | "PRO";
  trial: boolean | undefined;
  videoId: string;
};

const AiTools = ({ plan, trial, videoId }: Props) => {
  return (
    <TabsContent
      value="Ai tools"
      className="p-5 bg-[#1D1D1D] rounded-xl flex flex-col gap-y-10"
    >
      {" "}
      <div className="flex items-center">
        <div className="w-8/12">
          <h2 className="text-3xl font-bold">Ai Tools</h2>
          <p className="text-[#BDBDBD]">
            Taking your video to the next <br /> step with the power of AI!
          </p>
        </div>
      </div>
      {plan === "FREE" ? !trial ? <Button className=""></Button> : "" : ""}
    </TabsContent>
  );
};

export default AiTools;
