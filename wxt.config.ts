import { defineConfig } from 'wxt';

// See https://wxt.dev/api/config.html
export default defineConfig({
  modules: ['@wxt-dev/module-react'],
  runner: {
    startUrls: ["https://github.com/trending/typescript?since=daily"],
  },
});
