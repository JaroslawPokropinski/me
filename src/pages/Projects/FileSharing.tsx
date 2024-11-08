import { Badge, Card } from "flowbite-react";
import FilePeerImg from "/file-peer.png?url";
import FileSharingImg from "/file-sharing-cover.png?url";
import { TransitionImg } from "../../components/TransitionImg";

export function Component() {
  return (
    <div className="h-full overflow-auto p-8">
      <h1 className="mb-6 text-2xl font-bold tracking-tight text-gray-800 dark:text-gray-300">
        File Sharing Project
      </h1>

      <Card>
        <div id="tags" className="flex flex-wrap gap-2">
          <Badge color="gray">TypeScript</Badge>
          <Badge color="gray">Node.js</Badge>
          <Badge color="gray">React</Badge>
          <Badge color="gray">WebRTC</Badge>
          <Badge color="gray">ORM</Badge>
          <Badge color="gray">PostgreSQL</Badge>
        </div>

        <p className="mb-1 font-normal text-gray-600 dark:text-white">
          A simple file sharing project. Its purpose is to simplify the process
          of transfering files between devices focused on the mobile to pc and
          vice versa. It was implemented in two versions.
        </p>

        <TransitionImg
          className="mx-auto h-[474.85px] max-w-2xl"
          src={FilePeerImg}
        />

        <p className="mb-1 font-normal text-gray-600 dark:text-white">
          First design "
          <a
            className="text-blue-600 hover:underline dark:text-blue-500"
            href="https://github.com/JaroslawPokropinski/file-peer"
            target="_blank"
          >
            file-peer
          </a>
          " was using rooms you could join to share the files between devices.
          Rooms were managed by a Node.js server, the file transfer was done
          using WebRTC with peerjs and the interface was implemented using
          React.
        </p>

        <TransitionImg
          className="mx-auto h-[482.48px] max-w-2xl"
          src={FileSharingImg}
        />

        <p className="mb-1 font-normal text-gray-600 dark:text-white">
          Second design "
          <a
            className="text-blue-600 hover:underline dark:text-blue-500"
            href="https://github.com/JaroslawPokropinski/file-peer"
            target="_blank"
          >
            file-sharing-p2p
          </a>
          " available at{" "}
          <a
            className="text-blue-600 hover:underline dark:text-blue-500"
            href="https://fastfileshare.netlify.app/#/"
          >
            link
          </a>{" "}
          largely simplified the flow. It is using only fronted as the file
          transfer is done using WebTorrent and there are no rooms (anyone with
          a link or a QR code can download the file). Webtorren provides
          incredibly fast downloads over the local network and all the data
          needed can be passed to device such as mobile using a QR code.
        </p>
      </Card>
    </div>
  );
}
