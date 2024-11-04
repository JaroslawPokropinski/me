import { Card } from "flowbite-react";
import PwrLogo from "/pwr-logo.png?url";
import { TransitionImg } from "../components/TransitionImg";

function EducationCard({ title, years }: { title: string; years: string }) {
  return (
    <Card className="mb-4">
      <div className="flex justify-between">
        <div>
          <h2 className="mb-4 text-xl font-bold tracking-tight text-gray-800 dark:text-gray-300">
            {title}
          </h2>

          <p className="mb-1 font-normal text-gray-600 dark:text-white">
            Wroclaw University of Science and Technology
          </p>

          <p className="mb-1 font-normal text-gray-600 dark:text-gray-500">
            {years}
          </p>
        </div>

        <TransitionImg src={PwrLogo} className="h-20 rounded-sm" />
      </div>
    </Card>
  );
}

export function Component() {
  return (
    <div className="h-full overflow-auto p-8">
      <h1 className="mb-6 text-2xl font-bold tracking-tight text-gray-800 dark:text-gray-300">
        Education
      </h1>

      <EducationCard
        title="Master of Science in Applied Computer Science"
        years="2020 - 2021"
      />

      <EducationCard
        title="Bachelor of Science in Computer Science"
        years="2016 - 2020"
      />
    </div>
  );
}
