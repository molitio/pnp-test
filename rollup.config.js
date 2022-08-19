import typescript from "@rollup/plugin-typescript";

export default {
  input: "./packages/consumer-library/src/index.ts",
  plugins: [typescript()],
  output: {
    file: "./packages/consumer-library/dist/index.js",
    format: "esm",
    name: "bundle",
  },
};
