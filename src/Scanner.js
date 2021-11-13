export default class Scanner {

    scanUp(gameGrid, x ,y) {
        var scanResult = "";
        for (let i = 1; i <= 5; i++) {
            try {
                let cell = gameGrid[y+i][x];
                if (cell == null) {
                    scanResult += 'e';
                }
                else {
                    scanResult += cell;
                }
            }
            catch {
                scanResult += 'w';
            }
        }
        return scanResult;
    }

    scanUpRight(gameGrid, x, y) {
        var scanResult = "";
        for (let i = 1; i <= 5; i++) {
            try {
                let cell = gameGrid[y+i][x+i];
                if (cell == null) {
                    scanResult += 'e';
                }
                else {
                    scanResult += cell;
                }
            }
            catch {
                scanResult += 'w';
            }
        }
        return scanResult;
    }

    scanRight(gameGrid, x ,y) {
        var scanResult = "";
        for (let i = 1; i <= 5; i++) {
            try {
                let cell = gameGrid[y][x+i]
                if (cell == null) {
                    scanResult += 'e';
                }
                else {
                    scanResult += cell;
                }
            }
            catch {
                scanResult += 'w';
            }
        }
        return scanResult;
    }

    scanRightDown(gameGrid, x ,y) {
        var scanResult = "";
        for (let i = 1; i <= 5; i++) {
            try {
                let cell = gameGrid[y-i][x+i];
                if (cell == null) {
                    scanResult += 'e';
                }
                else {
                    scanResult += cell;
                }
            }
            catch {
                scanResult += 'w';
            }
        }
        return scanResult;
    }

    scanDown(gameGrid, x ,y) {
        var scanResult = "";
        for (let i = 1; i <= 5; i++) {
            try {
                let cell = gameGrid[y-i][x]
                if (cell == null) {
                    scanResult += 'e';
                }
                else {
                    scanResult += cell;
                }
            }
            catch {
                scanResult += 'w';
            }
        }
        return scanResult;
    }

    scanDownLeft(gameGrid, x ,y) {
        var scanResult = "";
        for (let i = 1; i <= 5; i++) {
            try {
                let cell = gameGrid[y-i][x-i];
                if (cell == null) {
                    scanResult += 'e';
                }
                else {
                    scanResult += cell;
                }
            }
            catch {
                scanResult += 'w';
            }
        }
        return scanResult;
    }

    scanLeft(gameGrid, x ,y) {
        var scanResult = "";
        for (let i = 1; i <= 5; i++) {
            try {
                let cell = gameGrid[y][x-i]
                if (cell == null) {
                    scanResult += 'e';
                }
                else {
                    scanResult += cell;
                }
            }
            catch {
                scanResult += 'w';
            }
        }
        return scanResult;
    }

    scanLeftUp(gameGrid, x ,y) {
        var scanResult = "";
        for (let i = 1; i <= 5; i++) {
            try {
                let cell = gameGrid[y+i][x-i];
                if (cell == null) {
                    scanResult += 'e';
                }
                else {
                    scanResult += cell;
                }
            }
            catch {
                scanResult += 'w';
            }
        }
        return scanResult;
    }
}