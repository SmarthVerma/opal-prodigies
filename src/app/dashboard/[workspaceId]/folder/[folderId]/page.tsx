import { getAllUserVideos, getFolderInfo } from "@/actions/workspace";
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

const page = async ({ params: { folderId, workspaceId } }: Props) => {
  const query = new QueryClient();
  await query.prefetchQuery({
    queryKey: ["folder-videos"],
    queryFn: () => getAllUserVideos(workspaceId),
  });

  await query.prefetchQuery({
    queryKey: ["folder-info"],
    queryFn: () => getFolderInfo(folderId),
  });

  return <HydrationBoundary state={dehydrate(query)}>
    
  </HydrationBoundary>;
};

export default page;
