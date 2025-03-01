export class UseItem {
    private bot: any;

    constructor(bot: any) {
        this.bot = bot;
    }

    public UseItem() {
        this.bot.activateItem();
    }
}