import priorities from "./Priorities";
import Scanner from './Scanner';

class AIPlayer {

    constructor (){
        this.firstMove = true;
        this.scanner = new Scanner();
    }

    randomIntFromInterval(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    checkForWildCards(up, upRight, right, rightDown, down, downLeft, left, leftUp) {
        if (up.substring(0, 3) == "PPe" && down.substring(0, 2) == "Pe") return 99;
        if (upRight.substring(0, 3) == "PPe" && downLeft.substring(0, 2) == "Pe") return 99;
        if (right.substring(0, 3) == "PPe" && left.substring(0, 2) == "Pe") return 99;
        if (rightDown.substring(0, 3) == "PPe" && leftUp.substring(0, 2) == "Pe") return 99;
        if (down.substring(0, 3) == "PPe" && up.substring(0, 2) == "Pe") return 99;
        if (downLeft.substring(0, 3) == "PPe" && upRight.substring(0, 2) == "Pe") return 99;
        if (left.substring(0, 3) == "PPe" && right.substring(0, 2) == "Pe") return 99;
        if (leftUp.substring(0, 3) == "PPe" && rightDown.substring(0, 2) == "Pe") return 99;

        if (up.substring(0, 1) == "e" && down.substring(0, 4) == "PPPe") return 99;
        if (upRight.substring(0, 1) == "e" && downLeft.substring(0, 4) == "PPPe") return 99;
        if (right.substring(0, 1) == "e" && left.substring(0, 4) == "PPPe") return 99;
        if (rightDown.substring(0, 1) == "e" && leftUp.substring(0, 4) == "PPPe") return 99;
        if (down.substring(0, 1) == "e" && up.substring(0, 4) == "PPPe") return 99;
        if (downLeft.substring(0, 1) == "e" && upRight.substring(0, 4) == "PPPe") return 99;
        if (left.substring(0, 1) == "e" && right.substring(0, 4) == "PPPe") return 99;
        if (leftUp.substring(0, 1) == "e" && rightDown.substring(0, 4) == "PPPe") return 99;

        if (up.substring(0,1) == "P" && down.substring(0,3) == "PPP") return 999;
        if (upRight.substring(0, 1) == "P" && downLeft.substring(0, 3) == "PPP") return 999;
        if (right.substring(0, 1) == "P" && left.substring(0, 3) == "PPP") return 999;
        if (rightDown.substring(0, 1) == "P" && leftUp.substring(0, 3) == "PPP") return 999;
        if (down.substring(0, 1) == "P" && up.substring(0, 3) == "PPP") return 999;
        if (downLeft.substring(0, 1) == "P" && upRight.substring(0, 3) == "PPP") return 999;
        if (left.substring(0, 1) == "P" && right.substring(0, 3) == "PPP") return 999;
        if (leftUp.substring(0, 1) == "P" && rightDown.substring(0, 3) == "PPP") return 999;

        if (up.substring(0,2) == "PP" && down.substring(0,2) == "PP") return 999;
        if (upRight.substring(0, 2) == "PP" && downLeft.substring(0, 2) == "PP") return 999;
        if (right.substring(0, 2) == "PP" && left.substring(0, 2) == "PP") return 999;
        if (rightDown.substring(0, 2) == "PP" && leftUp.substring(0, 2) == "PP") return 999;
        if (down.substring(0, 2) == "PP" && up.substring(0, 2) == "PP") return 999;
        if (downLeft.substring(0, 2) == "PP" && upRight.substring(0, 2) == "PP") return 999;
        if (left.substring(0, 2) == "PP" && right.substring(0, 2) == "PP") return 999;
        if (leftUp.substring(0, 2) == "PP" && rightDown.substring(0, 2) == "PP") return 999;

        if (up.substring(0, 1) == "A" && down.substring(0, 3) == "AAA") return 999999;
        if (upRight.substring(0, 1) == "A" && downLeft.substring(0, 3) == "AAA") return 999999;
        if (right.substring(0, 1) == "A" && left.substring(0, 3) == "AAA") return 999999;
        if (rightDown.substring(0, 1) == "A" && leftUp.substring(0, 3) == "AAA") return 999999;
        if (down.substring(0, 1) == "A" && up.substring(0, 3) == "AAA") return 999999;
        if (downLeft.substring(0, 1) == "A" && upRight.substring(0, 3) == "AAA") return 999999;
        if (left.substring(0, 1) == "A" && right.substring(0, 3) == "AAA") return 999999;
        if (leftUp.substring(0, 1) == "A" && rightDown.substring(0, 3) == "AAA") return 999999;

        if (up.substring(0,2) == "AA" && down.substring(0,2) == "AA") return 999999;
        if (upRight.substring(0, 2) == "AA" && downLeft.substring(0, 2) == "AA") return 999999;
        if (right.substring(0, 2) == "AA" && left.substring(0, 2) == "AA") return 999999;
        if (rightDown.substring(0, 2) == "AA" && leftUp.substring(0, 2) == "AA") return 999999;
        if (down.substring(0, 2) == "AA" && up.substring(0, 2) == "AA") return 999999;
        if (downLeft.substring(0, 2) == "AA" && upRight.substring(0, 2) == "AA") return 999999;
        if (left.substring(0, 2) == "AA" && right.substring(0, 2) == "AA") return 999999;
        if (leftUp.substring(0, 2) == "AA" && rightDown.substring(0, 2) == "AA") return 999999;
    }

    calculatePriority(gameGrid, x, y) {
        let up = this.scanner.scanUp(gameGrid, x, y);
        let upRight = this.scanner.scanUpRight(gameGrid, x, y);
        let right = this.scanner.scanRight(gameGrid, x, y);
        let rightDown = this.scanner.scanRightDown(gameGrid, x, y);
        let down = this.scanner.scanDown(gameGrid, x, y);
        let downLeft = this.scanner.scanDownLeft(gameGrid, x, y);
        let left = this.scanner.scanLeft(gameGrid, x, y);
        let leftUp = this.scanner.scanLeftUp(gameGrid, x, y);

        let priority = priorities[up] + priorities[upRight] + priorities[right] + priorities[rightDown] + priorities[down] + 
            priorities[downLeft] + priorities[left] + priorities[leftUp];

        let wildCardPriority = this.checkForWildCards(up, upRight, right, rightDown, down, downLeft, left, leftUp);
        
        if (wildCardPriority > priority) return wildCardPriority;
        return priority;
    }

    play(gameGrid) {
        var topPriority = { 0: [0, 0] };

        for (let y = 0; y < gameGrid.length; y++) {
            let row = gameGrid[y];

            for (let x = 0; x < row.length; x++) {
                if (gameGrid[y][x] != null){
                    continue;
                }
                let priority = this.calculatePriority(gameGrid, x, y);

                if (priority > Object.keys(topPriority)[0]) {
                    let newTopPriority = {};
                    newTopPriority[priority] = [x, y];
                    topPriority = newTopPriority;
                }
            }
        }

        let x = Object.values(topPriority)[0][0];
        let y = Object.values(topPriority)[0][1];
        gameGrid[y][x] = "A";
        return gameGrid;
    }
}

export default AIPlayer;