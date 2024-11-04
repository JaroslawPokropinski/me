import { Card } from "flowbite-react";

export function Component() {
  return (
    <div className="h-full overflow-auto p-8">
      <h1 className="mb-6 text-2xl font-bold tracking-tight text-gray-800 dark:text-gray-300">
        About Me
      </h1>

      <Card className="mb-4">
        <h2 className="mb-4 text-xl font-bold tracking-tight text-gray-800 dark:text-gray-300">
          Summary
        </h2>

        <p className="mb-1 font-normal text-gray-900 dark:text-white">
          My name is Jarosław Pokropiński. I am a software developer specialized
          in full-stack web development. My journey with programming began with
          C and C++ which were my primary programming languages for a few years.
        </p>
        <p className="mb-1 font-normal text-gray-900 dark:text-white">
          After that I started diversifying my knowledge and skills by learning
          many languages such as Java, a little bit of Scala and GoLang.
        </p>
        <p className="mb-1 font-normal text-gray-900 dark:text-white">
          In university I learned many languages at various levels. I started
          learning web technologies (HTML, CSS, JavaScript, Typescript, NodeJs,
          Electron, React, Angular, Vue) and I made quite a few projects in them
          as well as joining a fullstack project (React, Java, SpringBoot) as an
          internship.
        </p>
        <p className="mb-1 font-normal text-gray-900 dark:text-white">
          My commercial experience is in the field of fullstack web development
          with technologies such as React (with Typescript, CRA, NextJs, Redux
          Toolkit), Java (SpringBoot), and C++.
        </p>
      </Card>
      <Card className="mb-4">
        <h2 className="mb-4 text-xl font-bold tracking-tight text-gray-800 dark:text-gray-300">
          Skills
        </h2>

        <p className="mb-1 font-normal text-gray-900 dark:text-white">
          <span className="font-bold">Languages:</span> JavaScript, TypeScript,
          HTML, CSS, Java, C++, and many more.
        </p>
        <p className="mb-1 font-normal text-gray-900 dark:text-white">
          <span className="font-bold">Technologies:</span> React, Node.js,
          Express, NestJS, Spring Boot, Git, Docker, GraphQL, as well as other
          web technologies.
        </p>
        <p className="mb-1 font-normal text-gray-900 dark:text-white">
          <span className="font-bold">Soft skills:</span> Fast learner,
          Problem-solving, Teamwork, Mentorship.
        </p>
        <p className="mb-1 font-normal text-gray-900 dark:text-white">
          <span className="font-bold">Spoken languages:</span> Polish (Native),
          English.
        </p>
      </Card>
    </div>
  );
}
