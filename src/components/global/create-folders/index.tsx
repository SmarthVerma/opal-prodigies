"use client";
import FolderPlusDuotone from "@/components/icons/FolderPlusDuotone";
import { Button } from "@/components/ui/button";
import { useCreateFolders } from "@/hooks/useCreateFolders";
import React from "react";

type Props = {
  workspaceId: string;
};

const CreateFolder = ({ workspaceId }: Props) => {
  // WIP: add create folders
  const { onCreateNewFolder } = useCreateFolders(workspaceId);
  return (
    <Button
      onClick={onCreateNewFolder}
      className="bg-[#1D1D1D] hover:bg-purple-50/80 cursor-pointer text-[#707070] flex items-center gap-2 py-6 px-4 rounded-2xl"
    >
      <FolderPlusDuotone />
      Create a folder
    </Button>
  );
};

export default CreateFolder;
