export class Hotbar {
    private bot: any;

    constructor(bot: any) {
        this.bot = bot;
    }

    public SwitchHotbarSlot(input: string) {
        if (input.startsWith("slot")) {
            const trimedInput = input.trim();
            const args = trimedInput.split(" ");

            const numberString = args[1].trim();
            const slot = parseInt(numberString, 10);

            if (isNaN(slot)) {
              return;
            }

            if (slot > 8) {
              console.log("no slot exits");
              return;
            }

            try {
              this.bot.setQuickBarSlot(slot);
            } catch (error) {
              console.log(error);
            }
          }
    }
}
