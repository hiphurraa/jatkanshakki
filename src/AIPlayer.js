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
            
        return priority;
    }

    play(gameGrid) {
        // Randomize the first move
        if (this.firstMove){
            let x, y;
            do {
                x = this.randomIntFromInterval(4, 10);
                y = this.randomIntFromInterval(4, 10);
            } while (gameGrid[y][x] != null)
            console.log(x + ', ' + y);
            gameGrid[y][x] = "A";
            this.firstMove = false;
            return gameGrid;
        }

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