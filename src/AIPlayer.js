import priorities from "./Priorities";
import Scanner from './Scanner';
import CheckForSpecialDefensive from "./SpecialDefensive";
import CheckForSpecialOffenive from "./SpecialOffensive";

class AIPlayer {

    constructor (){
        this.scanner = new Scanner();
        this.turn = 1;
    }

    randomIntFromInterval(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    checkForWildCards(up, upRight, right, rightDown, down, downLeft, left, leftUp) {

        var priority = 0;
        
        /* OFFENSIVE */

        // Opposites
        if (up.substring(0, 1) == "A" && down.substring(0, 3) == "AAA") priority += 999999;
        if (upRight.substring(0, 1) == "A" && downLeft.substring(0, 3) == "AAA") priority += 999999;
        if (right.substring(0, 1) == "A" && left.substring(0, 3) == "AAA") priority += 999999;
        if (rightDown.substring(0, 1) == "A" && leftUp.substring(0, 3) == "AAA") priority += 999999;
        if (down.substring(0, 1) == "A" && up.substring(0, 3) == "AAA") priority += 999999;
        if (downLeft.substring(0, 1) == "A" && upRight.substring(0, 3) == "AAA") priority += 999999;
        if (left.substring(0, 1) == "A" && right.substring(0, 3) == "AAA") priority += 999999;
        if (leftUp.substring(0, 1) == "A" && rightDown.substring(0, 3) == "AAA") priority += 999999;

        // Opposites
        if (up.substring(0,2) == "AA" && down.substring(0,2) == "AA") priority += 999999;
        if (upRight.substring(0, 2) == "AA" && downLeft.substring(0, 2) == "AA") priority += 999999;
        if (right.substring(0, 2) == "AA" && left.substring(0, 2) == "AA") priority += 999999;
        if (rightDown.substring(0, 2) == "AA" && leftUp.substring(0, 2) == "AA") priority += 999999;
        if (down.substring(0, 2) == "AA" && up.substring(0, 2) == "AA") priority += 999999;
        if (downLeft.substring(0, 2) == "AA" && upRight.substring(0, 2) == "AA") priority += 999999;
        if (left.substring(0, 2) == "AA" && right.substring(0, 2) == "AA") priority += 999999;
        if (leftUp.substring(0, 2) == "AA" && rightDown.substring(0, 2) == "AA") priority += 999999;

        // 90 deg
        if (up.substring(0,3) == "AAe" && right.substring(0, 4) == "AAAe") priority += 333;
        if (upRight.substring(0,3) == "AAe" && rightDown.substring(0, 4) == "AAAe") priority += 333;
        if (right.substring(0,3) == "AAe" && down.substring(0, 4) == "AAAe") priority += 333;
        if (rightDown.substring(0,3) == "AAe" && downLeft.substring(0, 4) == "AAAe") priority += 333;
        if (down.substring(0,3) == "AAe" && left.substring(0, 4) == "AAAe") priority += 333;
        if (downLeft.substring(0,3) == "AAe" && leftUp.substring(0, 4) == "AAAe") priority += 333;
        if (left.substring(0,3) == "AAe" && up.substring(0, 4) == "AAAe") priority += 333;
        if (leftUp.substring(0,3) == "AAe" && upRight.substring(0, 4) == "AAAe") priority += 333;

        // Opposites
        if (up.substring(0, 3) == "AAe" && down.substring(0, 2) == "Ae") priority += 333;
        if (upRight.substring(0, 3) == "AAe" && downLeft.substring(0, 2) == "Ae") priority += 333;
        if (right.substring(0, 3) == "AAe" && left.substring(0, 2) == "Ae") priority += 333;
        if (rightDown.substring(0, 3) == "AAe" && leftUp.substring(0, 2) == "Ae") priority += 333;
        if (down.substring(0, 3) == "AAe" && up.substring(0, 2) == "Ae") priority += 333;
        if (downLeft.substring(0, 3) == "AAe" && upRight.substring(0, 2) == "Ae") priority += 333;
        if (left.substring(0, 3) == "AAe" && right.substring(0, 2) == "Ae") priority += 333;
        if (leftUp.substring(0, 3) == "AAe" && rightDown.substring(0, 2) == "Ae") priority += 333;

        // Opposites
        if (up.substring(0, 1) == "e" && down.substring(0, 4) == "AAAe") priority += 333;
        if (upRight.substring(0, 1) == "e" && downLeft.substring(0, 4) == "AAAe") priority += 333;
        if (right.substring(0, 1) == "e" && left.substring(0, 4) == "AAAe") priority += 333;
        if (rightDown.substring(0, 1) == "e" && leftUp.substring(0, 4) == "AAAe") priority += 333;
        if (down.substring(0, 1) == "e" && up.substring(0, 4) == "AAAe") priority += 333;
        if (downLeft.substring(0, 1) == "e" && upRight.substring(0, 4) == "AAAe") priority += 333;
        if (left.substring(0, 1) == "e" && right.substring(0, 4) == "AAAe") priority += 333;
        if (leftUp.substring(0, 1) == "e" && rightDown.substring(0, 4) == "AAAe") priority += 333;

        // 90 deg & opposite
        if (up.substring(0,3) == "AAe" && down.substring(0, 1) == "e" && right.substring(0,3) == "AAe" && left.substring(0,1) == "e") priority += 70;
        if (upRight.substring(0,3) == "AAe" && downLeft.substring(0, 1) == "e" && rightDown.substring(0,3) == "AAe" && leftUp.substring(0,1) == "e") priority += 70;
        if (right.substring(0,3) == "AAe" && left.substring(0, 1) == "e" && down.substring(0,3) == "AAe" && up.substring(0,1) == "e") priority += 70;
        if (rightDown.substring(0,3) == "AAe" && leftUp.substring(0, 1) == "e" && downLeft.substring(0,3) == "AAe" && upRight.substring(0,1) == "e") priority += 70;
        if (down.substring(0,3) == "AAe" && up.substring(0, 1) == "e" && left.substring(0,3) == "AAe" && right.substring(0,1) == "e") priority += 70;
        if (downLeft.substring(0,3) == "AAe" && upRight.substring(0, 1) == "e" && leftUp.substring(0,3) == "AAe" && rightDown.substring(0,1) == "e") priority += 70;
        if (left.substring(0,3) == "AAe" && right.substring(0, 1) == "e" && up.substring(0,3) == "AAe" && down.substring(0,1) == "e") priority += 70;
        if (leftUp.substring(0,3) == "AAe" && rightDown.substring(0, 1) == "e" && upRight.substring(0,3) == "AAe" && downLeft.substring(0,1) == "e") priority += 70;

        /* DEFENSIVE */

        // Opposites
        if (up.substring(0,1) == "P" && down.substring(0,3) == "PPP") priority += 999;
        if (upRight.substring(0, 1) == "P" && downLeft.substring(0, 3) == "PPP") priority += 999;
        if (right.substring(0, 1) == "P" && left.substring(0, 3) == "PPP") priority += 999;
        if (rightDown.substring(0, 1) == "P" && leftUp.substring(0, 3) == "PPP") priority += 999;
        if (down.substring(0, 1) == "P" && up.substring(0, 3) == "PPP") priority += 999;
        if (downLeft.substring(0, 1) == "P" && upRight.substring(0, 3) == "PPP") priority += 999;
        if (left.substring(0, 1) == "P" && right.substring(0, 3) == "PPP") priority += 999;
        if (leftUp.substring(0, 1) == "P" && rightDown.substring(0, 3) == "PPP") priority += 999;

        // Opposites
        if (up.substring(0,2) == "PP" && down.substring(0,2) == "PP") priority += 999;
        if (upRight.substring(0, 2) == "PP" && downLeft.substring(0, 2) == "PP") priority += 999;
        if (right.substring(0, 2) == "PP" && left.substring(0, 2) == "PP") priority += 999;
        if (rightDown.substring(0, 2) == "PP" && leftUp.substring(0, 2) == "PP") priority += 999;
        if (down.substring(0, 2) == "PP" && up.substring(0, 2) == "PP") priority += 999;
        if (downLeft.substring(0, 2) == "PP" && upRight.substring(0, 2) == "PP") priority += 999;
        if (left.substring(0, 2) == "PP" && right.substring(0, 2) == "PP") priority += 999;
        if (leftUp.substring(0, 2) == "PP" && rightDown.substring(0, 2) == "PP") priority += 999;

        // 90 deg
        if (up.substring(0,3) == "PPe" && right.substring(0, 4) == "PPPe") priority += 100;
        if (upRight.substring(0,3) == "PPe" && rightDown.substring(0, 4) == "PPPe") priority += 100;
        if (right.substring(0,3) == "PPe" && down.substring(0, 4) == "PPPe") priority += 100;
        if (rightDown.substring(0,3) == "PPe" && downLeft.substring(0, 4) == "PPPe") priority += 100;
        if (down.substring(0,3) == "PPe" && left.substring(0, 4) == "PPPe") priority += 100;
        if (downLeft.substring(0,3) == "PPe" && leftUp.substring(0, 4) == "PPPe") priority += 100;
        if (left.substring(0,3) == "PPe" && up.substring(0, 4) == "PPPe") priority += 100;
        if (leftUp.substring(0,3) == "PPe" && upRight.substring(0, 4) == "PPPe") priority += 100;

        // Opposites
        if (up.substring(0, 3) == "PPe" && down.substring(0, 2) == "Pe") priority += 99;
        if (upRight.substring(0, 3) == "PPe" && downLeft.substring(0, 2) == "Pe") priority += 99;
        if (right.substring(0, 3) == "PPe" && left.substring(0, 2) == "Pe") priority += 99;
        if (rightDown.substring(0, 3) == "PPe" && leftUp.substring(0, 2) == "Pe") priority += 99;
        if (down.substring(0, 3) == "PPe" && up.substring(0, 2) == "Pe") priority += 99;
        if (downLeft.substring(0, 3) == "PPe" && upRight.substring(0, 2) == "Pe") priority += 99;
        if (left.substring(0, 3) == "PPe" && right.substring(0, 2) == "Pe") priority += 99;
        if (leftUp.substring(0, 3) == "PPe" && rightDown.substring(0, 2) == "Pe") priority += 99;

        // Opposites
        if (up.substring(0, 1) == "e" && down.substring(0, 4) == "PPPe") priority += 99;
        if (upRight.substring(0, 1) == "e" && downLeft.substring(0, 4) == "PPPe") priority += 99;
        if (right.substring(0, 1) == "e" && left.substring(0, 4) == "PPPe") priority += 99;
        if (rightDown.substring(0, 1) == "e" && leftUp.substring(0, 4) == "PPPe") priority += 99;
        if (down.substring(0, 1) == "e" && up.substring(0, 4) == "PPPe") priority += 99;
        if (downLeft.substring(0, 1) == "e" && upRight.substring(0, 4) == "PPPe") priority += 99;
        if (left.substring(0, 1) == "e" && right.substring(0, 4) == "PPPe") priority += 99;
        if (leftUp.substring(0, 1) == "e" && rightDown.substring(0, 4) == "PPPe") priority += 99;

        // 90 deg & opposite
        if (up.substring(0,3) == "PPe" && down.substring(0, 1) == "e" && right.substring(0,3) == "PPe" && left.substring(0,1) == "e") priority += 60;
        if (upRight.substring(0,3) == "PPe" && downLeft.substring(0, 1) == "e" && rightDown.substring(0,3) == "PPe" && leftUp.substring(0,1) == "e") priority += 60;
        if (right.substring(0,3) == "PPe" && left.substring(0, 1) == "e" && down.substring(0,3) == "PPe" && up.substring(0,1) == "e") priority += 60;
        if (rightDown.substring(0,3) == "PPe" && leftUp.substring(0, 1) == "e" && downLeft.substring(0,3) == "PPe" && upRight.substring(0,1) == "e") priority += 60;
        if (down.substring(0,3) == "PPe" && up.substring(0, 1) == "e" && left.substring(0,3) == "PPe" && right.substring(0,1) == "e") priority += 60;
        if (downLeft.substring(0,3) == "PPe" && upRight.substring(0, 1) == "e" && leftUp.substring(0,3) == "PPe" && rightDown.substring(0,1) == "e") priority += 60;
        if (left.substring(0,3) == "PPe" && right.substring(0, 1) == "e" && up.substring(0,3) == "PPe" && down.substring(0,1) == "e") priority += 60;
        if (leftUp.substring(0,3) == "PPe" && rightDown.substring(0, 1) == "e" && upRight.substring(0,3) == "PPe" && downLeft.substring(0,1) == "e") priority += 60;

        // let specialOffensivePriority = CheckForSpecialOffenive(up, upRight, right, rightDown, down, downLeft, left, leftUp);
        // if (specialOffensivePriority) return specialOffensivePriority;
        // let specialDefensivePriority = CheckForSpecialDefensive(up, upRight, right, rightDown, down, downLeft, left, leftUp);
        // if (specialDefensivePriority) return specialDefensivePriority;

        return priority;
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
            priorities[downLeft] + priorities[left] + priorities[leftUp] + this.checkForWildCards(up, upRight, right, rightDown, down, downLeft, left, leftUp);
        
        return priority;
    }

    play(gameGrid) {
        
        let randX = this.randomIntFromInterval(4, 9);
        let randY = this.randomIntFromInterval(4, 9);

        do {
            randX = this.randomIntFromInterval(4, 9);
            randY = this.randomIntFromInterval(4, 9);
        } while (gameGrid[randY][randX] != null)

        let priorityOne = [1, randX, randX];
        let priorityTwo = [1, this.randomIntFromInterval(4, 9), this.randomIntFromInterval(4, 9)];
        let priorityThree = [1, this.randomIntFromInterval(4, 9), this.randomIntFromInterval(4, 9)];

        for (let y = 0; y < gameGrid.length; y++) {
            let row = gameGrid[y];

            for (let x = 0; x < row.length; x++) {
                if (gameGrid[y][x] != null){
                    continue;
                }

                let priority = this.calculatePriority(gameGrid, x, y);
                
                if (priority > priorityOne[0]) {
                    priorityThree = Array.from(priorityTwo);
                    priorityTwo = Array.from(priorityOne);
                    priorityOne = [priority, x, y];
                }
            }
        }

        this.turn++;
        return [ priorityOne, priorityTwo, priorityThree ];
    }
}

export default AIPlayer;