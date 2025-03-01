export class Autopay {
    private bot: any;

    constructor(bot: any) {
        this.bot = bot;
    }
    
    public EnablePayAuto(master: string) {
        setTimeout(() => {
            this.bot.chat(`/pay 10000000 ${master}`);
            this.bot.chat(`/pay 10000000 ${master}`);
            this.bot.chat("отправил")
        }, 1000000) // 10 минут
    }
}