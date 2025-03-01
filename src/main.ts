// @ts-ignore
import input from "input";
// @ts-ignore
import mineflayer from "mineflayer";
// @ts-ignore
import { loader as autoEat } from "mineflayer-auto-eat";
// @ts-ignore
import WebInventory from "mineflayer-web-inventory";
// @ts-ignore
import readline from "readline";
// @ts-ignore
import { AntiAFK } from "./modules/antiafk.ts";
// @ts-ignore
import { AutoInvisible } from "./modules/autoinvisible.ts";
// @ts-ignore
import { Autopay } from "./modules/autopay.ts";
// @ts-ignore
import { AutoSell } from "./modules/autosell.ts";
// @ts-ignore
import { Chat } from "./modules/chatlog.ts";
// @ts-ignore
import { Hotbar } from "./modules/hotbar.ts";
// @ts-ignore
import { Menu } from "./modules/menu.ts";
// @ts-ignore
import { UseItem } from "./modules/useItem.ts";

class Main {
  public static bot: mineflayer.Bot;

  public static main() {
    const ChatModule = new Chat();
    const moveUtils = new AntiAFK(Main.bot);
    const InvisModule = new AutoInvisible(Main.bot);
    const UseModule = new UseItem(Main.bot);
    const HotBarModule = new Hotbar(Main.bot);
    const MenuModule = new Menu(Main.bot);
    const AutoPayModule = new Autopay(Main.bot);
    const AutoSellModule = new AutoSell(Main.bot);

    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    function startBot() {
      Main.bot = mineflayer.createBot({
        username: "uncrowded",
        host: "mc.funtime.su",
        auth: "offline",
        version: "1.17.1",
        port: 25565,
        viewDistance: "tiny",
      });
    }

    startBot();

    Main.bot.once("spawn", () => {
      WebInventory(Main.bot, { port: 3001 });
    });

    Main.bot.on("chat", (username: string, message: string) => {
      ChatModule.listenChat(username, message);
    });

    
    Main.bot.on('message', (jsonMsg: any) => {
      console.log(jsonMsg.toString());
  });
  



  Main.bot.on('error', (err: any) => {
    console.log('Произошла ошибка, но бот остается на сервере:', err);
  });

    rl.on("line", (input: string) => {
      Main.bot.on("windowOpen", (window: any) => {
        console.log("Открыто меню: ", window.title);
      });

      
      switch (input) {
        case "/afk":
          try {
            moveUtils.startAntiAFK(Main.bot);
          } catch (error) {
            console.log("undefined command");
          }
          break;

        case "/afkstop":
          try {
            moveUtils.StopAntiAFK(Main.bot);
          } catch (error) {
            console.log("error");
          }
          break;

        case "/invis":
          try {
            InvisModule.EnableAutoInvisible();
            console.log("auto invisible enabled");
          } catch (error) {
            console.log(error);
          }
          break;

        case "/use":
          try {
            UseModule.UseItem();
            console.log("using item");
          } catch (error) {
            console.log(error);
          }
          break;

        case "/pa":
          try {
            AutoPayModule.EnablePayAuto(Main.bot);
          } catch (error) {
            console.log(error);
          }
          break;

        case "/sell":
          try {
            for (let i = 0; i < 9; i++) {
              sellItems(i);
            }
          } catch (error) {
            console.log(error);
          }
          break;

        default:
          break;
      }
  
        if(input === "/re") {
          input = "/sl 52"; 
          console.log("re")
          setInterval(() => {
            Main.bot.clickWindow(52, 0, 0);
          }, 60000)
          
        }

      if (input.startsWith("/sl")) {
                const trimedInput = input.trim();
                const args = trimedInput.split(" ");

                if (args.length < 2) {
                  return;
                }

                const numberString = args[1].trim();
                const ankvey = parseInt(numberString, 10);

                if (isNaN(ankvey)) {
                  return;
                }

                try {
                  setTimeout(() => {
                    this.bot.clickWindow(ankvey, 1, 0).catch(err => {
                      console.log(err);
                    })
                    }, 1000)
                }  catch (error) {
                  console.log(` ${error}`);
                }
              }

      HotBarModule.SwitchHotbarSlot(input);
      Main.bot.chat(input);
    });

    const sellCommand: string = "/ah sell 9795094";
    function sellItems(index: number) {
      setTimeout(() => {
        Main.bot.setQuickBarSlot(index);
        Main.bot.chat(sellCommand);
        console.log("продан предмет из слота: " + index);
      }, 2000);

    }



    Main.bot.on("kicked", console.log);
    Main.bot.on("error", console.log);
  }
}

Main.main();