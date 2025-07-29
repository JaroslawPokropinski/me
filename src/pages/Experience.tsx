import { Card, List, Timeline } from "flowbite-react";
import MstrLogo from "/MSTR.svg?url";
import NcdcLogo from "/ncdc-logo.jpg?url";
import TooplooxLogo from "/tooploox_logo.jpg?url";
import { TransitionImg } from "../components/TransitionImg";

function ExperienceCard({
  title,
  image,
  positions,
  description,
}: {
  title: string;
  image: string;
  positions: { title: string; years: string }[];
  description?: React.JSX.Element;
}) {
  return (
    <Card className="relative mb-4">
      <div className="flex justify-between">
        <div>
          <h2 className="mb-4 text-xl font-bold tracking-tight text-gray-800 dark:text-gray-300">
            {title}
          </h2>

          <div className="mb-4 font-normal text-gray-600 dark:text-white">
            {positions.length <= 1 ? (
              positions[0].title
            ) : (
              <Timeline horizontal>
                {positions.map((position) => (
                  <Timeline.Item key={position.title}>
                    <Timeline.Point />
                    <Timeline.Content>
                      <Timeline.Time>{position.years}</Timeline.Time>
                      <Timeline.Title>{position.title}</Timeline.Title>
                    </Timeline.Content>
                  </Timeline.Item>
                ))}
              </Timeline>
            )}
          </div>

          <div className="mb-2 font-normal text-gray-600 dark:text-white">
            {description}
          </div>
        </div>

        <div className="size-20 shrink-0">
          <TransitionImg src={image} className="size-20 rounded-sm" />
        </div>
      </div>
    </Card>
  );
}

export function Component() {
  return (
    <div className="h-full overflow-auto p-8">
      <h1 className="mb-6 text-2xl font-bold tracking-tight text-gray-800 dark:text-gray-300">
        Experience
      </h1>

      <ExperienceCard
        title="Tooploox"
        image={TooplooxLogo}
        positions={[
          {
            title: "Software Engineer",
            years: "February 2025 - ",
          },
        ]}
        description={
          <List className="ml-4 list-outside">
            <List.Item className="text-gray-600 dark:text-white">
              Worked on various projects for the Ebay.com including{" "}
              <a
                className="text-blue-600 hover:underline dark:text-blue-500"
                href="https://www.ebay.com/ebaylive"
              >
                Ebay Live
              </a>
              .
            </List.Item>
          </List>
        }
      />

      <ExperienceCard
        title="MicroStrategy"
        image={MstrLogo}
        positions={[
          {
            title: "Senior Software Engineer",
            years: "April 2024 - September 2024",
          },
          { title: "Software Engineer", years: "November 2022 - April 2024" },
          {
            title: "Associate Software Engineer",
            years: "November 2021 - November 2022",
          },
        ]}
        description={
          <List className="ml-4 list-outside">
            <List.Item className="text-gray-600 dark:text-white">
              Created written designs for solutions and implemented changes
              across multiple frontends (both in the browser and as a native app
              based on web technologies) and backends.
            </List.Item>
            <List.Item className="text-gray-600 dark:text-white">
              Worked in agile teams in 2-week iterations.
            </List.Item>
            <List.Item className="text-gray-600 dark:text-white">
              Co-operated on features across multiple teams leading discussions
              and presenting the work to PMs.
            </List.Item>
            <List.Item className="text-gray-600 dark:text-white">
              Mentored less senior members of the team.
            </List.Item>
            <List.Item className="text-gray-600 dark:text-white">
              Awarded "Employee of the Quarter" for Q3 2022, Q1 2023 and Q4
              2023.
            </List.Item>
            <List.Item className="text-gray-600 dark:text-white">
              As a member of a team of 3 awarded "Best use of AI in
              Administration" in internal Hackathon.
            </List.Item>
            <List.Item className="text-gray-600 dark:text-white">
              Technologies mainly included React, Redux Toolkit, and TypeScript
              on the front and Java, Spring Boot, and C++ on the backend.
            </List.Item>
          </List>
        }
      />

      <ExperienceCard
        title="Nordic Consulting & Development Company"
        image={NcdcLogo}
        positions={[
          {
            title: "Student Intern",
            years: "July 2018 - September 2018",
          },
        ]}
        description={
          <List className="ml-4 list-outside">
            <List.Item className="text-gray-600 dark:text-white">
              Worked in a team, building a service to manage matches on the
              Foosball table. Focused mainly on the frontend. Made some API
              contributions and worked on the integration with other team’s app.
            </List.Item>
            <List.Item className="text-gray-600 dark:text-white">
              Technologies: Spring Boot and React.
            </List.Item>
          </List>
        }
      />
    </div>
  );
}
