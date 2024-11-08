import { Card } from "flowbite-react";
import { CopyBlock, dracula } from "react-code-blocks";
import { TransitionImg } from "../../components/TransitionImg";
import RayTraceImg from "/raytrace.png?url";

const code = `import { Gpgpu, KernelContext, Types, kernelEntry, kernelFunction } from 'node-gpgpu';
async function main() {
  const n = 2000;
  const iter = 216;
  const gpgpu = new Gpgpu();

  class PiIntegralKernel extends KernelContext {
    @kernelFunction(Types.number, [Types.number])
    f(x: number) {
      return 2 * this.sqrt(1 - x * x);
    }

    @kernelEntry([
      { type: 'Float32Array', readWrite: 'write' },
      { type: 'Object', readWrite: 'read', shapeObj: { n: Types.number, iter: Types.number } },
    ])
    main(c: Float32Array, opt: { n: number, iter: number }) {
      const id = this.get_global_id(0);

      c[id] = 0.0;
      for (let i = id * opt.iter; i < (id + 1) * opt.iter; i += 1) {
        const dx = 2 / (opt.n * opt.iter);
        const x1 = dx * i - 1;
        const x2 = dx * (i + 1) - 1;

        c[id] += (this.f(x2) + this.f(x1)) * 0.5 * dx;
      }
    }
  }

  const k = gpgpu.createKernel(PiIntegralKernel).setSize([2000], [10]);
  const c = new Float32Array(n);

  await k(c, { n, iter });
  const res = c.reduce((prev, curr) => prev + curr);
  console.log(\`Result: \${res}\`);
}
main();`;

export function Component() {
  return (
    <div className="h-full overflow-auto p-8">
      <h1 className="mb-6 text-2xl font-bold tracking-tight text-gray-800 dark:text-gray-300">
        Node GPGPU
      </h1>

      <Card>
        <p className="mb-1 font-normal text-gray-600 dark:text-white">
          Source:{" "}
          <a
            className="text-blue-600 hover:underline dark:text-blue-500"
            href="https://github.com/JaroslawPokropinski/node-gpgpu"
          >
            GitHub
          </a>{" "}
        </p>

        <p className="mb-1 font-normal text-gray-600 dark:text-white">
          Node GPGPU is Node.js library for gpu accelerated programming. It
          allows to write accelerated code using subset of javascript/typescript
          and use it directly in javascript code.
        </p>

        <p className="mb-1 font-normal text-gray-600 dark:text-white">
          It is implemented by parsing JavaScript code, converting it to OpenCL
          flavoured C and passing it to OpenCL runtime using NAPI.
        </p>

        <h2 className="mb-4 text-xl font-bold tracking-tight text-gray-800 dark:text-gray-300">
          Ray Tracing Example
        </h2>

        <p className="mb-1 font-normal text-gray-600 dark:text-white">
          Source:{" "}
          <a
            className="text-blue-600 hover:underline dark:text-blue-500"
            href="https://github.com/JaroslawPokropinski/node-gpgpu-examples/tree/main/ray-trace"
          >
            GitHub
          </a>{" "}
        </p>

        <TransitionImg
          className="mx-auto h-[300px] max-w-2xl"
          src={RayTraceImg}
        />

        <h2 className="mb-4 text-xl font-bold tracking-tight text-gray-800 dark:text-gray-300">
          Integral Example
        </h2>

        <div className="mb-1 font-normal text-gray-600 dark:text-white">
          <CopyBlock
            theme={dracula}
            text={code}
            language="typescript"
            showLineNumbers
            wrapLongLines
          />
        </div>
      </Card>
    </div>
  );
}
