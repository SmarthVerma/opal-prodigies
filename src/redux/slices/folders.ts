import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type FolderItem = {
  id: string;
  name: string;
  createdAt: Date;
  workSpaceId: string | null;
  _count: {
    videos: number;
  };
};

type initialStateProps = {
  folders: FolderItem[];
};

const initialState: initialStateProps = {
  folders: [],
};

export const Folders = createSlice({
  name: "folders",
  initialState,
  reducers: {
    FOLDERS: (state, action: PayloadAction<initialStateProps>) => {
      return { ...action.payload };
    },
  },
});

export const { FOLDERS } = Folders.actions;
export default Folders.reducer;
