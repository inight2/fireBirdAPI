class Bot {
    moveXY(x1: number, y1: number, x2: number, y2: number) {
        let distanceTo: number, angleTo: number;
        //distance formula
        let horizontal: number = Math.pow((x2 - x1), 2);
        let vertical: number = Math.pow((y2 - y1), 2);
        distanceTo = Math.sqrt(horizontal + vertical);
        return distanceTo;
    }

}

let bot = new Bot();
let mydistance = bot.moveXY(12, 24, 35, 45);

brick.showNumber(mydistance, 1)



