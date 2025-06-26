"use client";
import { cn } from "@/lib/utils";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";
import Loader from "../loader";
import FolderDuotone from "@/components/icons/FolderDuotone";
import { useMutationData, useMutationDataState } from "@/hooks/useMutationData";
import { renameFolders } from "@/actions/workspace";
import { Input } from "@/components/ui/input";

type Props = {
  name: string;
  id: string;
  optimistic?: boolean;
  count?: number;
};

const Folder = ({ id, name, optimistic, count }: Props) => {
  const inputRef = React.useRef<HTMLInputElement | null>(null);
  const folderRef = React.useRef<HTMLDivElement | null>(null);
  const pathName = usePathname();
  const router = useRouter();
  const [onRename, setOnRename] = useState(false);

  const Rename = () => setOnRename(true);
  const Renamed = () => setOnRename(false);

  // WIP : loading folders progress

  // optimistic
  const { mutate, isPending } = useMutationData(
    ["rename-folders"],
    (data: { name: string }) => renameFolders(id, data.name),
    "workspace-folders",
    Renamed
  );

  const { latestVariables } = useMutationDataState(["rename-folders"]);
  const handleFolderClick = () => {
    if (onRename) return;
    router.push(`${pathName}/folder/${id}`);
  };

  const handleNameDoubleClick = (e: React.MouseEvent<HTMLParagraphElement>) => {
    e.stopPropagation();
    // Rename functionality
    Rename();
  };

  const updateFolderName = (e: React.FocusEvent<HTMLInputElement>) => {
    if (inputRef.current) {
      if (inputRef.current.value) {
        mutate({ name: inputRef.current.value, id }); // added id just for changing that specifc folder
      } else {
        Renamed();
      }
    }
  };

  return (
    <div
      onClick={handleFolderClick}
      ref={folderRef}
      className={cn(
        optimistic && "opacity-60",
        "flex hover:bg-neutral-800 cursor-pointer transition duration-150 " +
          "items-center gap-2 justify-between min-w-[250px] p-4 rounded-lg border-[1px]"
      )}
    >
      <Loader state={false}>
        <div className="flex flex-col gap-[1px]">
          <div className="flex flex-col gap-[1px]">
            {onRename ? (
              <Input
                autoFocus
                onBlur={(e: React.FocusEvent<HTMLInputElement>) => {
                  updateFolderName(e);
                }}
                placeholder={name}
                className="border-none  text-base w-full outline-none text-neutral-300 bg-transparent p-0"
                ref={inputRef}
              />
            ) : (
              <p
                className="text-neutral-300"
                onClick={(e) => e.stopPropagation()}
                onDoubleClick={handleNameDoubleClick}
              >
                {latestVariables &&
                latestVariables.status === "pending" &&
                latestVariables.variables.id === id
                  ? latestVariables.variables.name
                  : name}
              </p>
            )}
          </div>
          <span className="text-sm text-neutral-500">{count || 0} videos</span>
        </div>
      </Loader>{" "}
      <FolderDuotone />
    </div>
  );
};

export default Folder;
