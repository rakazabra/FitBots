export class AntiAFK {
    private bot:any;


    constructor(bot:any) {
        this.bot = bot;

    }

    public startAntiAFK(bot: any) {
        setInterval(() => {
            bot.setControlState("jump", true);
        }, 20000)
    

    }

    public StopAntiAFK(bot: any) {
        bot.setControlState("jump", false)
    }

}