import { getNotifications, onAuthenticatedUser } from "@/actions/user";
import {
  getAllUserVideos,
  getWorkspaceFolders,
  verifyAccessToWorkspace,
  getWorkSpaces,
} from "@/actions/workspace";
import { redirect } from "next/navigation";
import React from "react";

import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import Sidebar from "@/components/global/sidebar/index";
import GlobalHeader from "@/components/global/global-header";

type Props = {
  children: React.ReactNode;
  params: { workspaceId: string };
};

const Layout = async ({ children, params }: Props) => {
  const { workspaceId } = await params;
  if (!workspaceId) return;

  const auth = await onAuthenticatedUser();

  if (!auth.user?.workspace) redirect("/auth/sign-in");
  if (!auth.user.workspace.length) redirect("/auth/sign-in");

  const hasAccess = await verifyAccessToWorkspace(workspaceId);

  if (hasAccess.status !== 200) {
    redirect(`/dashboard/${auth.user?.workspace[0].id}`);
  }

  if (!hasAccess.data?.workspace) return null;

  const query = new QueryClient();

  // kinda statemangagement but for servers

  await query.prefetchQuery({ 
    queryKey: ["workspace-folders"], //
    queryFn: () => getWorkspaceFolders(workspaceId),
  });

  await query.prefetchQuery({
    queryKey: ["user-videos"],  
    queryFn: () => getAllUserVideos(workspaceId),
  });

  await query.prefetchQuery({ 
    queryKey: ["user-workspaces"], //
    queryFn: () => getWorkSpaces(),
  });

  await query.prefetchQuery({ 
    queryKey: ["user-notifications"], //
    queryFn: () => getNotifications(),
  });

  return (
    <HydrationBoundary state={dehydrate(query)}>
      <div className="flex h-screen w-screen">
        <Sidebar activeWorkspaceId={workspaceId} />
        <div className="w-full justify-start pt-28 p-6 overflow-y-scroll overflow-x-hidden">
          <GlobalHeader workspace={hasAccess.data.workspace} />
          <div className="mt-4">{children}</div>
        </div>
      </div>
    </HydrationBoundary>
  );
};

export default Layout;
