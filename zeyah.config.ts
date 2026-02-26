import { defineConfig } from "@zeyah-bot/registry";
import "dotenv/config";
import { sixSevenPlugin } from "./checked/sixSeven-plugin";
import { menuHandlePlugin } from "./checked/menu-handle";

export default defineConfig({
  DESIGN: {
    Title: "Zeyah",
    Admin: "ʚɸɞ Christus ɸɞ",
    Theme: "retro",
  },
  adminBot: ["61568791604271","61580333625022"],
  moderatorBot: [],
  prefixes: [process.env.PREFIX ?? "+"],
  useDiscord: true,
  useFacebook: process.env.FB_STATE ? true : false,
  discordToken: process.env.DISCORD_TOKEN ?? "",
  plugins: [sixSevenPlugin, menuHandlePlugin],
  pluginConfig: {
    "menu-handle": {},
    "six-seven": {
      enabled: true,
    },
  },
  lang: "en",
});
