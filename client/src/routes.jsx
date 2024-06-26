import {
  HomeIcon,
  UserCircleIcon,
  TableCellsIcon,
  InformationCircleIcon,
  ServerStackIcon,
  RectangleStackIcon,
} from "@heroicons/react/24/solid";
import { Home, Profile, Tables, Notifications } from "@/pages/dashboard";
import { SignIn, SignUp } from "@/pages/auth";
import { MainHome, ContactUs, AboutUs } from "@/pages/landing";


const icon = {
  className: "w-5 h-5 text-inherit",
};

export const routes = [
  {
    title: "landing pages",
    layout: "",
    pages: [
      {
        icon: <ServerStackIcon {...icon} />,
        name: "Main Home",
        path: "/",
        element: <MainHome />,
      },
      {
        icon: <ServerStackIcon {...icon} />,
        name: "About Us",
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        icon: <RectangleStackIcon {...icon} />,
        name: "Contact Us",
        path: "/contact-us",
        element: <ContactUs />,
      },
    ],
  },
  {
    layout: "dashboard",
    pages: [
      {
        icon: <HomeIcon {...icon} />,
        name: "dashboard",
        path: "/home",
        element: <Home />,
      },
      {
        icon: <UserCircleIcon {...icon} />,
        name: "profile",
        path: "/profile",
        element: <Profile />,
      },
      {
        icon: <TableCellsIcon {...icon} />,
        name: "tables",
        path: "/tables",
        element: <Tables />,
      },
      {
        icon: <InformationCircleIcon {...icon} />,
        name: "notifications",
        path: "/notifications",
        element: <Notifications />,
      },
    ],
  },
  {
    title: "auth pages",
    layout: "auth",
    pages: [
      {
        icon: <ServerStackIcon {...icon} />,
        name: "sign in",
        path: "/sign-in",
        element: <SignIn />,
      },
      {
        icon: <RectangleStackIcon {...icon} />,
        name: "sign up",
        path: "/sign-up",
        element: <SignUp />,
      },
    ],
  },
];

export default routes;
