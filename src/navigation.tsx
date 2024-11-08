import { LazyRouteFunction, NonIndexRouteObject } from "react-router-dom";
import { IconType } from "react-icons";
import { HiAcademicCap, HiBeaker, HiBriefcase, HiUser } from "react-icons/hi";

type NavigationObj = {
  name: string;
  path: string;
  icon?: IconType;
  component: LazyRouteFunction<NonIndexRouteObject>;
};

type NavigationGroup = {
  name: string;
  icon?: IconType;
  items: NavigationObj[];
};

export const appNavigation: (NavigationObj | NavigationGroup)[] = [
  {
    name: "About Me",
    path: "/about",
    icon: HiUser,
    component: () => import("./pages/About"),
  },
  {
    name: "Projects",
    icon: HiBeaker,
    items: [
      // {
      //   name: "Node GPGPU",
      //   path: "/projects/node-gpgpu",
      //   component: () => import("./pages/Projects/NodeGpgpu"),
      // },
      {
        name: "File Sharing",
        path: "/projects/file-sharing",
        component: () => import("./pages/Projects/FileSharing"),
      },
      {
        name: "Screen Sharing",
        path: "/projects/screen-sharing",
        component: () => import("./pages/Projects/ScreenSharing"),
      },
    ],
  },

  {
    name: "Education",
    path: "/education",
    icon: HiAcademicCap,
    component: () => import("./pages/Education"),
  },
  {
    name: "Work Experience",
    path: "/experience",
    icon: HiBriefcase,
    component: () => import("./pages/Experience"),
  },
];
