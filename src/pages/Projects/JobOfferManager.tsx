import { Badge, Card } from "flowbite-react";
import { TransitionImg } from "../../components/TransitionImg";

export function Component() {
  return (
    <div className="h-full overflow-auto p-8">
      <h1 className="mb-6 text-2xl font-bold tracking-tight text-gray-800 dark:text-gray-300">
        Job Offer Manager
      </h1>

      <Card>
        <div id="tags" className="flex flex-wrap gap-2">
          <Badge color="gray">TypeScript</Badge>
          <Badge color="gray">React</Badge>
          <Badge color="gray">MUI</Badge>
        </div>

        <div>
          <p className="font-normal text-gray-600 dark:text-white">
            Source:{" "}
            <a
              className="text-blue-600 hover:underline dark:text-blue-500"
              href="https://github.com/JaroslawPokropinski/job-offer-manager"
            >
              GitHub
            </a>
          </p>

          <p className="mb-1 font-normal text-gray-600 dark:text-white">
            Application:{" "}
            <a
              className="text-blue-600 hover:underline dark:text-blue-500"
              href="https://jaroslawpokropinski.github.io/job-offer-manager/"
            >
              link
            </a>
          </p>
        </div>

        <p className="mb-1 font-normal text-gray-600 dark:text-white">
          Job Offer Manager is an app to manage job listings you are thinking of
          applying to. It supports autofill from nofluffjobs, pracuj.pl,
          justjoin, the:protocol and batch import using list of URLs.
        </p>

        <h2 className="text-xl font-bold tracking-tight text-gray-800 dark:text-gray-300">
          Job Offers Grid
        </h2>

        <p className="mb-1 font-normal text-gray-600 dark:text-white">
          Displays overview of saved offers.
        </p>

        <TransitionImg
          className="mx-auto h-[402.9px] max-w-2xl"
          src="./grid.png"
        />

        <h2 className="text-xl font-bold tracking-tight text-gray-800 dark:text-gray-300">
          Job Offer Import
        </h2>

        <p className="mb-1 font-normal text-gray-600 dark:text-white">
          Add Job Offer to the list.
        </p>

        <TransitionImg
          className="mx-auto h-[402.9px] max-w-2xl"
          src="./add.png"
        />
      </Card>
    </div>
  );
}
