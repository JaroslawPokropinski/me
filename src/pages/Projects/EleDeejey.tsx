import { Badge, Card } from "flowbite-react";
import { TransitionImg } from "../../components/TransitionImg";

export function Component() {
  return (
    <div className="h-full overflow-auto p-8">
      <h1 className="mb-6 text-2xl font-bold tracking-tight text-gray-800 dark:text-gray-300">
        EleDeejey
      </h1>

      <Card>
        <div id="tags" className="flex flex-wrap gap-2">
          <Badge color="gray">TypeScript</Badge>
          <Badge color="gray">C++</Badge>
          <Badge color="gray">Node.js</Badge>
          <Badge color="gray">Electron</Badge>
          <Badge color="gray">React</Badge>
          <Badge color="gray">Arduino</Badge>
        </div>

        <p className="mb-1 font-normal text-gray-600 dark:text-white">
          Source:{" "}
          <a
            className="text-blue-600 hover:underline dark:text-blue-500"
            href="https://github.com/JaroslawPokropinski/eledeejey"
          >
            GitHub
          </a>{" "}
        </p>

        <p className="mb-1 font-normal text-gray-600 dark:text-white">
          A project to controll PC audio using external hardware. It is inspired
          by the{" "}
          <a
            className="text-blue-600 hover:underline dark:text-blue-500"
            href="https://github.com/omriharel/deej"
            target="_blank"
          >
            deej
          </a>{" "}
          project, while addressing some of its limitations such as automatic
          reconnection of the serial port and support for Windows sleep. The
          hardware uses 3d printed case from thingiverse:
          <a
            className="text-blue-600 hover:underline dark:text-blue-500"
            href="https://www.thingiverse.com/thing:6548595"
            target="_blank"
          >
            {" "}
            Volume Mixer
          </a>
          .
        </p>

        <TransitionImg
          className="mx-auto h-[474.85px] max-w-2xl"
          src="./eledeejey.jpg"
        />
      </Card>
    </div>
  );
}
