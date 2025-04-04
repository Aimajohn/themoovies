// vite.config.ts
import { defineConfig } from "file:///home/ayon/patata/typescript/themoovies/node_modules/vite/dist/node/index.js"
import react from "file:///home/ayon/patata/typescript/themoovies/node_modules/@vitejs/plugin-react/index.mjs"
import path from "path"
var __vite_injected_original_dirname = "/home/ayon/patata/typescript/themoovies"
var vite_config_default = defineConfig({
  base: "/themoovies/",
  // base: "https://aimajohn.github.io/themoovies/",
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__vite_injected_original_dirname, "./src"),
      "@ui": path.resolve(
        __vite_injected_original_dirname,
        "./src/components/ui",
      ),
      "@components": path.resolve(
        __vite_injected_original_dirname,
        "./src/components",
      ),
    },
  },
})
export { vite_config_default as default }
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9heW9uL3BhdGF0YS90eXBlc2NyaXB0L3RoZW1vb3ZpZXNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9ob21lL2F5b24vcGF0YXRhL3R5cGVzY3JpcHQvdGhlbW9vdmllcy92aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vaG9tZS9heW9uL3BhdGF0YS90eXBlc2NyaXB0L3RoZW1vb3ZpZXMvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiXG5pbXBvcnQgcmVhY3QgZnJvbSBcIkB2aXRlanMvcGx1Z2luLXJlYWN0LXN3Y1wiXG5pbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiXG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIGJhc2U6IFwiL3RoZW1vb3ZpZXMvXCIsXG4gIC8vIGJhc2U6IFwiaHR0cHM6Ly9haW1ham9obi5naXRodWIuaW8vdGhlbW9vdmllcy9cIixcbiAgcGx1Z2luczogW3JlYWN0KCldLFxuICByZXNvbHZlOiB7XG4gICAgYWxpYXM6IHtcbiAgICAgIFwiQFwiOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcIi4vc3JjXCIpLFxuICAgICAgXCJAdWlcIjogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCIuL3NyYy9jb21wb25lbnRzL3VpXCIpLFxuICAgICAgXCJAY29tcG9uZW50c1wiOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcIi4vc3JjL2NvbXBvbmVudHNcIiksXG4gICAgfSxcbiAgfSxcbn0pXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQXVTLFNBQVMsb0JBQW9CO0FBQ3BVLE9BQU8sV0FBVztBQUNsQixPQUFPLFVBQVU7QUFGakIsSUFBTSxtQ0FBbUM7QUFJekMsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsTUFBTTtBQUFBO0FBQUEsRUFFTixTQUFTLENBQUMsTUFBTSxDQUFDO0FBQUEsRUFDakIsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0wsS0FBSyxLQUFLLFFBQVEsa0NBQVcsT0FBTztBQUFBLE1BQ3BDLE9BQU8sS0FBSyxRQUFRLGtDQUFXLHFCQUFxQjtBQUFBLE1BQ3BELGVBQWUsS0FBSyxRQUFRLGtDQUFXLGtCQUFrQjtBQUFBLElBQzNEO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
