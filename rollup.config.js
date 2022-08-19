import typescript from "@rollup/plugin-typescript";

export default {
  input: "packages/consumer-library/src/index.ts",
  plugins: [
    typescript({
      noEmit: false,
      declaration: true,
      rootDir: "packages/consumer-library/src",
      declarationDir: "packages/consumer-library/dist",
    }),
  ],
  output: {
    file: "packages/consumer-library/dist/index.js",
    format: "esm",
    name: "bundle",
  },
};
