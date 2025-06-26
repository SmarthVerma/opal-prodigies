import { useAppSelector } from "@/redux/store";
import { useEffect, useState } from "react";
import { useMutationData } from "./useMutationData";
import { getWorkspaceFolders, moveVideoLocation } from "@/actions/workspace";
import useZodForm from "./useZodForm";
import { movieVideoSchema } from "@/components/forms/change-video-location/schema";
import { set } from "date-fns";

export const useMoveVideos = (videoId: string, currentWorkspace: string) => {
  const { folders } = useAppSelector((state) => state.FolderReducer);
  const { workspaces } = useAppSelector((state) => state.WorkspaceReducer);

  // fetching states
  const [isFetching, setIsFetching] = useState(false);
  // stat folders
  const [isFolders, setIsFolders] = useState<
    | ({ _count: { videos: number } } & {
        id: string;
        name: string;
        createdAt: Date;
        workSpaceId: string | null;
      })[]
    | undefined
  >(undefined);

  // use mutation data optimisc
  const { mutate, isPending } = useMutationData(
    ["change-video-location"],
    async (data: { folder_id: string; workspace_id: string }) =>
      await moveVideoLocation(videoId, data.workspace_id, data.folder_id)
  );

  // usezodForm
  const { errors, onFormSubmit, watch, register } = useZodForm(
    movieVideoSchema,
    mutate,
    {
      folder_id: null,
      workspace_id: currentWorkspace,
    }
  );

  const fetchFolders = async (workspaceId: string) => {
    setIsFetching(true);
    const folders = await getWorkspaceFolders(workspaceId);
    setIsFetching(false);
    setIsFolders(folders.data);
  };

  useEffect(() => {
    fetchFolders(currentWorkspace);
  }, []);

  useEffect(() => {
    const workspace = watch(async (value) => {
      if (value.workspace_id) fetchFolders(value.workspace_id);
    });
    return () => workspace.unsubscribe();
  }, [watch]);

  return {
    onFormSubmit,
    errors,
    register,
    isPending,
    folders,
    workspaces,
    isFetching,
    isFolders,
  };
};
