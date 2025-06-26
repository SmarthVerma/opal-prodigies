import CreateFolder from "@/components/global/create-folders";
import CreateWorkspace from "@/components/global/create-workspace";
import Folders from "@/components/global/folders";
import Videos from "@/components/global/videos";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";

type Props = {
  params: { workspaceId: string };
};

const Page = async ({ params }: Props) => {
  const { workspaceId } = await params;

  return (
    <div>
      <Tabs defaultValue="videos" className="mt-6">
        <div className="flex w-full justify-between items-center">
          <TabsList className="bg-transparent gap-2 pl-0">
            <TabsTrigger
              className="p-[13px] px-6 rounded-full data-[state=active]:bg-[#252525]"
              value="videos"
            >
              Videos
            </TabsTrigger>
            <TabsTrigger value="archive">Archive</TabsTrigger>
          </TabsList>
          <div className="flex gap-x-3">
            <CreateWorkspace />
            <CreateFolder workspaceId={workspaceId} />
          </div>
        </div>
        <section>
          <TabsContent value="videos">
            <Folders workspaceId={workspaceId} />
            {/* My added videoId */}
            <Videos workspaceId={workspaceId} videosKey={"workspace-videos"} />
          </TabsContent>
        </section>
      </Tabs>
    </div>
  );
};

export default Page;
