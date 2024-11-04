import { Sidebar, useThemeMode } from "flowbite-react";
import {
  HiUser,
  HiAcademicCap,
  HiBriefcase,
  HiBeaker,
  HiMail,
} from "react-icons/hi";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { Outlet } from "react-router-dom";

function IconBar() {
  const { toggleMode, mode } = useThemeMode();

  return (
    <div className="mb-4 flex justify-center gap-1">
      <a
        className="rounded-full p-4 text-gray-600 hover:cursor-pointer hover:bg-slate-300 dark:text-white dark:hover:bg-slate-900"
        href="mailto:jarek.pokropinski@gmail.com"
      >
        <HiMail className="size-6" />
      </a>

      <a
        className="rounded-full p-4 text-gray-600 hover:cursor-pointer hover:bg-slate-300 dark:text-white dark:hover:bg-slate-900"
        href="https://www.linkedin.com/in/jaroslaw-pokropinski/"
        target="_blank"
      >
        <FaLinkedin className="size-6" />
      </a>

      <a
        className="rounded-full p-4 text-gray-600 hover:cursor-pointer hover:bg-slate-300 dark:text-white dark:hover:bg-slate-900"
        href="https://github.com/JaroslawPokropinski"
        target="_blank"
      >
        <FaGithub className="size-6" />
      </a>

      <span
        className="rounded-full p-4 text-gray-600 hover:cursor-pointer hover:bg-slate-300 dark:text-white dark:hover:bg-slate-900"
        onClick={toggleMode}
      >
        <MdDarkMode className={mode === "dark" ? "size-6" : "hidden"} />
        <MdLightMode className={mode !== "dark" ? "size-6" : "hidden"} />
      </span>
    </div>
  );
}

export function Layout() {
  return (
    <div className="flex h-screen gap-2 dark:bg-gray-900">
      <Sidebar aria-label="sidebar" className="h-full">
        <img src="./me-big.jpg" className="rounded-full p-6" />
        <IconBar />
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <Sidebar.Item href="#/about" icon={HiUser}>
              About Me
            </Sidebar.Item>

            <Sidebar.Collapse icon={HiBeaker} label="Projects" open>
              <Sidebar.Item href="#/projects/screen-sharing">
                Screen Sharing
              </Sidebar.Item>
              <Sidebar.Item href="#/projects/file-sharing">
                File Sharing
              </Sidebar.Item>
            </Sidebar.Collapse>

            <Sidebar.Item href="#/education" icon={HiAcademicCap}>
              Education
            </Sidebar.Item>

            <Sidebar.Item href="#/experience" icon={HiBriefcase}>
              Work Experience
            </Sidebar.Item>

            {/* <Sidebar.Item href="#/contact" icon={HiPhone}>
              Contact
            </Sidebar.Item> */}
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>

      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
}
