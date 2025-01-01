import { Badge, Card } from "flowbite-react";

export function Component() {
  return (
    <div className="h-full overflow-auto p-8">
      <h1 className="mb-6 text-2xl font-bold tracking-tight text-gray-800 dark:text-gray-300">
        Strict Null Checks
      </h1>

      <Card>
        <div id="tags" className="flex flex-wrap gap-2">
          <Badge color="gray">TypeScript</Badge>
          <Badge color="gray">Eslint</Badge>
          <a href="https://github.com/JaroslawPokropinski/eslint-plugin-strict-null-checks">
            <img src="https://img.shields.io/github/stars/JaroslawPokropinski/eslint-plugin-strict-null-checks?style=social&label=Star&maxAge=2592000" />
          </a>
          <a href="https://www.npmjs.com/package/eslint-plugin-strict-null-checks">
            <img src="https://badgen.net/npm/dy/eslint-plugin-strict-null-checks" />
          </a>
        </div>

        <p className="mb-1 font-normal text-gray-600 dark:text-white">
          Source:{" "}
          <a
            className="text-blue-600 hover:underline dark:text-blue-500"
            href="https://github.com/JaroslawPokropinski/eslint-plugin-strict-null-checks"
          >
            GitHub
          </a>{" "}
        </p>

        <p className="mb-1 font-normal text-gray-600 dark:text-white">
          Eslint plugin that aims to reproduce strictNullChecks from tsconfig
          for easier migration and for projects that prefer to have it as a
          warning not an error.
        </p>
      </Card>
    </div>
  );
}
