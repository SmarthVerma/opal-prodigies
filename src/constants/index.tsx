import { Home, Bell, CreditCard, Settings } from "lucide-react";
import FileDuoToneBlack from "@/components/icons/FileDuoToneBlack";

const ICONS: { [key: string]: React.ReactNode } = {
  Home: <Home color="#666666" />,
  MyLibrary: <FileDuoToneBlack />,
  Notifications: <Bell color="#666666" />,
  Billing: <CreditCard color="#666666" />,
  Settings: <Settings color="#666666" />,
};

export const MENU_ITEMS = (
  workspaceId: string
): { title: string; href: string; icon: React.ReactNode }[] => [
  {
    title: "Home",
    href: `/dashboard/${workspaceId}/home`,
    icon: ICONS.Home,
  },
  {
    title: "My Library",
    href: `/dashboard/${workspaceId}`,
    icon: ICONS.MyLibrary,
  },
  {
    title: "Notifications",
    href: `/dashboard/${workspaceId}/notifications`,
    icon: ICONS.Notifications,
  },
  {
    title: "Billing",
    href: `/dashboard/${workspaceId}/billing`,
    icon: ICONS.Billing,
  },
  {
    title: "Settings",
    href: `/dashboard/${workspaceId}/settings`,
    icon: ICONS.Settings,
  },
];
