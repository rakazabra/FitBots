export class Menu {
    private bot: any;

    constructor(bot: any) {
        this.bot = bot;
    }

    public UseMenu(input: string) {
            
        }
    public closeMenu() {
            this.bot.closeWindow(this.bot.currentWindow);
          }

    }
