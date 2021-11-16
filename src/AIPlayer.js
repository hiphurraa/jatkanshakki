import priorities from "./Priorities";
import Scanner from './Scanner';
import checkForWildCards from "./WildCards";

class AIPlayer {

    constructor (){
        this.scanner = new Scanner();
        this.turn = 1;
    }

    randomIntFromInterval(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min)
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
            priorities[downLeft] + priorities[left] + priorities[leftUp] + checkForWildCards(up, upRight, right, rightDown, down, downLeft, left, leftUp);
        
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