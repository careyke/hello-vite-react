import { defineConfig } from "vite";
import ReactRefreshPlugin from "@vitejs/plugin-react-refresh";
import eslint from "@rollup/plugin-eslint";
import path from "path";

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  plugins: [
    {
      ...eslint({
        fix: true,
        include: "**/*.(js|ts|jsx|tsx)",
        exclude: "node_modules/**",
        throwOnError: true,
        throwOnWarning: true,
      }),
      enforce: "pre", // 需要配置，否则会编译源文件
    },
    new ReactRefreshPlugin(), // 这个插件的顺序只能在eslint后面，否则会导致eslint编译文件并且会出现重复定义的错误，应该是一个bug
  ],
  server: {
    port: 8000,
  },
});
