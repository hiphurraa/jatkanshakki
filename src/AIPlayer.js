import priorities from "./Priorities";
import Scanner from './Scanner';
import checkForWildCards from "./WildCards";

class AIPlayer {

    constructor (){
        this.scanner = new Scanner();
    }

    randomIntFromInterval(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    // Calculate the priority to a given cell
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

    // Give random cells, make sure not taken yet
    randomPriorities(gameGrid) {

        let randX = this.randomIntFromInterval(4, 9);
        let randY = this.randomIntFromInterval(4, 9);

        while(gameGrid[randY][randX] != null){
            randX = this.randomIntFromInterval(4, 9);
            randY = this.randomIntFromInterval(4, 9);
        }

        let priorityOne = [1, randX, randX];

        while(gameGrid[randY][randX] != null && randX != priorityOne[1] && randY != priorityOne[2]){
            randX = this.randomIntFromInterval(4, 9);
            randY = this.randomIntFromInterval(4, 9);
        }

        let priorityTwo = [1, randX, randX];

        while(gameGrid[randY][randX] != null && randX != priorityTwo[1] && randY != priorityTwo[2]){
            randX = this.randomIntFromInterval(4, 9);
            randY = this.randomIntFromInterval(4, 9);
        }

        let priorityThree = [1, randX, randX];

        return [ priorityOne, priorityTwo, priorityThree ];
    }

    // Make sure that priotities are different cells
    differentiatePriorities(gameGrid, priorityOne, priorityTwo, priorityThree) {

        if (priorityTwo[1] == priorityOne[1] && priorityTwo[2] == priorityTwo[2]){
            let randX = this.randomIntFromInterval(4, 9);
            let randY = this.randomIntFromInterval(4, 9);
            while(gameGrid[randY][randX] != null && randX != priorityOne[1] && randY != priorityOne[2]){
                randX = this.randomIntFromInterval(4, 9);
                randY = this.randomIntFromInterval(4, 9);
            }
            priorityTwo = [0, randX, randY];
        }

        if (priorityThree[1] == priorityTwo[1] && priorityThree[2] == priorityTwo[2]){
            let randX = this.randomIntFromInterval(4, 9);
            let randY = this.randomIntFromInterval(4, 9);
            while(gameGrid[randY][randX] != null && randX != priorityTwo[1] && randY != priorityTwo[2]){
                randX = this.randomIntFromInterval(4, 9);
                randY = this.randomIntFromInterval(4, 9);
            }
            priorityThree = [0, randX, randY];
        }

        return [priorityTwo, priorityThree];
    }

    play(gameGrid) {
        
        let [priorityOne, priorityTwo, priorityThree] = this.randomPriorities(gameGrid);

        for (let y = 0; y < gameGrid.length; y++) {
            let row = gameGrid[y];

            for (let x = 0; x < row.length; x++) {

                // cell already taken, skip
                if (gameGrid[y][x] != null){
                    continue;
                }

                let priority = this.calculatePriority(gameGrid, x, y);
                
                // If higher priotity found
                if (priority > priorityOne[0]) {
                    priorityThree = Array.from(priorityTwo);
                    priorityTwo = Array.from(priorityOne);
                    priorityOne = [priority, x, y];
                }
            }
        }

        [priorityTwo, priorityThree] = this.differentiatePriorities(gameGrid, priorityOne, priorityTwo, priorityThree);

        return [ priorityOne, priorityTwo, priorityThree ];
    }
}

export default AIPlayer;