"use client";
import { getFolderInfo } from "@/actions/workspace";
import { useQueryData } from "@/hooks/useQueryData";
import { FoldersProps } from ".";
import { FolderProps } from "@/types/index.types";

type Props = {
  folderId: string;
};

const FolderInfo = ({ folderId }: Props) => {
  const { data } = useQueryData(["folder-info"], () => getFolderInfo(folderId));

  const { data: folder } = data as FolderProps;

  return (
    <div className="flex item-center">
      <h2 className="text-[#bdbdbd] text-2xl">{folder.name}</h2>
    </div>
  );
};

export default FolderInfo;
