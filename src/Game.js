import Scanner from "./Scanner";

class Game {

    constructor() {
        this.scanner = new Scanner()
    }

    isWinningRow(row) {
        if (row=='AAAAA' || row=='PPPPP') {
            return true;
        }
        return false;
    }

    hasWinner(gameGrid) {

        for (let y = 0; y < gameGrid.length; y++) {
            let row = gameGrid[y];

            for (let x = 0; x < row.length; x++) {

                let row = this.scanner.scanUp(gameGrid, x, y);
                if (this.isWinningRow(row)) return {x, y, row, direction:"up"};

                row = this.scanner.scanUpRight(gameGrid, x, y);
                if (this.isWinningRow(row)) return {x, y, row, direction:"upRight"};

                row = this.scanner.scanRight(gameGrid, x, y);
                if (this.isWinningRow(row)) return {x, y, row, direction:"right"};

                row = this.scanner.scanRightDown(gameGrid, x, y);
                if (this.isWinningRow(row)) return {x, y, row, direction: "rightDown"};

                row = this.scanner.scanDown(gameGrid, x, y);
                if (this.isWinningRow(row)) return {x, y, row, direction: "down"};

                row = this.scanner.scanDownLeft(gameGrid, x, y);
                if (this.isWinningRow(row)) return {x, y, row, direction: "downLeft"};

                row = this.scanner.scanLeft(gameGrid, x, y);
                if (this.isWinningRow(row)) return {x, y, row, direction: "left"};

                row = this.scanner.scanLeftUp(gameGrid, x, y);
                if (this.isWinningRow(row)) return {x, y, row, direction: "leftUp"};
            }
        }

        return false;
    }

    showWinningRow(winner, gameGrid) {

        let x = winner.x;
        let y = winner.y;

        for (let i = 1; i <= 5; i++) {
            if (winner.direction == 'up'){
                gameGrid[y+i][x] = winner.row == "AAAAA"? "winner-ai" : "winner-player";
            }
            else if (winner.direction == 'upRight'){
                gameGrid[y+i][x+i] = winner.row == "AAAAA"? "winner-ai" : "winner-player";
            }
            else if (winner.direction == 'right'){
                gameGrid[y][x+i] = winner.row == "AAAAA"? "winner-ai" : "winner-player";
            }
            else if (winner.direction == 'rightDown'){
                gameGrid[y-i][x+i] = winner.row == "AAAAA"? "winner-ai" : "winner-player";
            }
            else if (winner.direction == 'down'){
                gameGrid[y-i][x] = winner.row == "AAAAA"? "winner-ai" : "winner-player";
            }
            else if (winner.direction == 'downLeft'){
                gameGrid[y-i][x-i] = winner.row == "AAAAA"? "winner-ai" : "winner-player";
            }
            else if (winner.direction == 'left'){
                gameGrid[y][x-i] = winner.row == "AAAAA"? "winner-ai" : "winner-player";
            }
            else if (winner.direction == 'leftUp'){
                gameGrid[y+i][x-i] = winner.row == "AAAAA"? "winner-ai" : "winner-player";
            }
        }

        return gameGrid;
    }
}

export default Game;