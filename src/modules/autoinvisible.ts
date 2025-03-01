export class AutoInvisible {

    private bot: any;

    constructor(bot: any) {
        this.bot = bot;
    }

    public EnableAutoInvisible() {
        let isInvis: boolean = false;

        const checkInvis = () => {
            // tslint:disable-next-line:prefer-conditional-expression
            isInvis = !!(this.bot.ownEffects && this.bot.ownEffects.some((effect: any) => effect.id === "invisibility"));
        };

        const UseInvis = () => {
            const item: any = this.bot.inventory.items().find((i: any) => i.name.includes("potion"));
            if (item) {
                const hotbarSlot: number = 44;
                this.bot.moveSlotItem(item.slot, hotbarSlot);
                this.bot.setQuickBarSlot(8);
                setTimeout(() => {
                    this.bot.activateItem();
                }, 500);
            } else {
                return;
            }
        };

        setInterval(() => {
            checkInvis();

            if (!isInvis) {
                UseInvis();
                checkInvis();
            }
        }, 80000);
    }

}
