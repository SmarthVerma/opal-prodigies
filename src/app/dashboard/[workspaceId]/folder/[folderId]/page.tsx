import { getAllUserVideos, getFolderInfo } from "@/actions/workspace";
import FolderInfo from "@/components/global/folders/folder-info";
import Videos from "@/components/global/videos";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import React from "react";

type Props = {
  params: {
    folderId: string;
    workspaceId: string;
  };
};

const page = async ({ params }: Props) => {
  const { folderId, workspaceId } = await params;

  const query = new QueryClient();
  await query.prefetchQuery({
    queryKey: ["folder-videos"],
    queryFn: () => getAllUserVideos(folderId),
  });

  await query.prefetchQuery({
    queryKey: ["folder-info"],
    queryFn: () => getFolderInfo(folderId),
  });

  console.log('SO i got called again for not reason at all',)

  return (
    <HydrationBoundary state={dehydrate(query)}>
      <FolderInfo folderId={folderId} />
      <Videos
        folderId={folderId}
        videosKey={"folder-videos"}
        workspaceId={workspaceId}
      />
    </HydrationBoundary>
  );
};

export default page;
