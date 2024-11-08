import { Badge, Card } from "flowbite-react";
import NuxtScreenShareImg from "/nuxt-screenshare.png?url";
import ScreenSharingImg from "/screensharing.png?url";
import { TransitionImg } from "../../components/TransitionImg";

export function Component() {
  return (
    <div className="h-full overflow-auto p-8">
      <h1 className="mb-6 text-2xl font-bold tracking-tight text-gray-800 dark:text-gray-300">
        Screen Sharing Project
      </h1>

      <Card>
        <div id="tags" className="flex flex-wrap gap-2">
          <Badge color="gray">TypeScript</Badge>
          <Badge color="gray">React</Badge>
          <Badge color="gray">Node.js</Badge>
          <Badge color="gray">Redux</Badge>
          <Badge color="gray">Websocket</Badge>
          <Badge color="gray">Vue</Badge>
          <Badge color="gray">Nuxt</Badge>
        </div>

        <p className="mb-1 font-normal text-gray-600 dark:text-white">
          Screensharing is an app that can be used to share screen using the
          browser. Video is shared between clients using peerjs. It was
          implemented as a free alternative to screen sharing solutions such as
          Discord.
        </p>

        <TransitionImg
          className="mx-auto h-[402.9px] max-w-2xl"
          src={ScreenSharingImg}
        />

        <p className="mb-1 font-normal text-gray-600 dark:text-white">
          First design "
          <a
            className="text-blue-600 hover:underline dark:text-blue-500"
            href="https://github.com/JaroslawPokropinski/screen-sharing-web"
            target="_blank"
          >
            screen-sharing-web
          </a>
          " was implemented using React, TypeScript, WebRTC through peerjs and
          simple Node.js server.
        </p>

        <TransitionImg
          className="mx-auto h-[474.5px] max-w-2xl"
          src={NuxtScreenShareImg}
        />

        <p className="mb-1 font-normal text-gray-600 dark:text-white">
          Second design "
          <a
            className="text-blue-600 hover:underline dark:text-blue-500"
            href="https://github.com/JaroslawPokropinski/nuxt-screenshare"
            target="_blank"
          >
            nuxt-screenshare
          </a>
          " available at{" "}
          <a
            className="text-blue-600 hover:underline dark:text-blue-500"
            href="https://jaroslawpokropinski.github.io/nuxt-screenshare/"
          >
            link
          </a>{" "}
          is a vue + nuxt reimplementation. It is generated to a static site
          without need for a server (a public peer js signaling server is used).
        </p>
      </Card>
    </div>
  );
}
