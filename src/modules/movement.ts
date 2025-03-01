export class Movement {
private  bot: any;

constructor(bot: any) {
    this.bot = bot;
}

public Moveforward() {
        this.bot.setControlState("forward", true);
    }
public Moveback() {
        this.bot.setControlState("back", true);
    }

public Moveright() {
        this.bot.setControlState("right", true);
    }

public Moveleft() {
        this.bot.setControlState("left", true);
    }

public jump() {
        this.bot.setControlState("jump", true);
}

public stop() {
        this.bot.setControlState("stop", true);
    }
}
