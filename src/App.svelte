<script>
  export let game;
  export let ai;

  let A = "AI";
  let P = "You";
  var height = window.innerHeight;
  var width = window.innerWidth;
  let gameGrid = createArray(15, 15);
  var isGameOver = false;
  let isYourTurn = true;
  let winnerPlayer = "";
  let aiCursor = {
    x: null,
    y: null
  }
  

  // AI starts
  //gameGrid = ai.play(gameGrid);

  window.onresize = () => {
    height = window.innerHeight;
    width = window.innerWidth;
  }

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  function resetGame() {
    gameGrid = createArray(15, 15);
    isGameOver = false;
    isYourTurn = true;
    aiCursor = { x: null, y: null };
  }

  function randomIntFromInterval(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

  // Helper function to create multidimensional arrays
	function createArray(length) {
		var arr = new Array(length || 0),
			i = length;
		if (arguments.length > 1) {
			var args = Array.prototype.slice.call(arguments, 1);
			while(i--) arr[length-1 - i] = createArray.apply(this, args);
		}	
    	return arr;
	}

function gameOver(winner) {
  gameGrid = game.showWinningRow(winner, gameGrid);
  if (winner.row == "AAAAA") winnerPlayer = "AI";
  else winnerPlayer = "You";
  setTimeout(() => {
    isGameOver = true;
  }, 3000);
}

async function moveAiCursor(newPoint) {
  const MAX_I = 28;
  let i = 0;
  while ((aiCursor.x != newPoint.x || aiCursor.y != newPoint.y) && i <= MAX_I) {
      if (aiCursor.x > newPoint.x) aiCursor.x = aiCursor.x - 1;
      else if (aiCursor.x < newPoint.x) aiCursor.x = aiCursor.x + 1;
      else if (aiCursor.y > newPoint.y) aiCursor.y = aiCursor.y - 1;
      else if (aiCursor.y < newPoint.y) aiCursor.y = aiCursor.y + 1;
      i += 1;
      await sleep(100);
  }
}

async function cellClicked(x, y) {
  // Ignore if cell taken or not your turn
  if ((gameGrid[y][x] != null) || !isYourTurn || isGameOver) {
    return;
  }
  else {
    gameGrid[y][x] = "P";
    isYourTurn = false;
  }

  let winner = game.hasWinner(gameGrid);
  if(winner){
    gameOver(winner);
    return;
  }

  if (aiCursor.x == null) {
    let left = randomIntFromInterval(0, 1);
    aiCursor = {
      x: left? 0 : 14,
      y: randomIntFromInterval(2, 12)
    }
  }

  // AI's turn
  let [priorityOne, priorityTwo, priorityThree] = ai.play(gameGrid);

  let pointOne = { x: priorityThree[1], y: priorityThree[2] };
  let pointTwo = { x: priorityTwo[1], y: priorityTwo[2] };
  let pointThree = { x: priorityOne[1], y: priorityOne[2] };

  let thinkingTimeOne = randomIntFromInterval(700, 1400);
  let movingTimeOne = (Math.abs(pointOne.x - aiCursor.x) + Math.abs(pointOne.y - aiCursor.y)) * 100;

  let thinkingTimeTwo = randomIntFromInterval(500, 1000);
  let movingTimeTwo = (Math.abs(pointTwo.x - pointOne.x) + Math.abs(pointTwo.y - pointOne.y)) * 100;

  let thinkingTimeThree = randomIntFromInterval(500, 1000);
  let movingTimeThree = (Math.abs(pointThree.x - pointTwo.x) + Math.abs(pointTwo.y - aiCursor.y)) * 100;

  let thinkingTimeFinal = randomIntFromInterval(500, 1000);

  let pattern = randomIntFromInterval(1, 3);

  if (priorityOne[0] >= 9999999999) pattern = 1;

  if (pattern == 1) {
    // First and final move
    setTimeout(() => {
        moveAiCursor(pointThree);
      }, thinkingTimeOne);

      setTimeout(() => {
        gameGrid[pointThree.y][pointThree.x] = "A";
        winner = game.hasWinner(gameGrid);
        if(winner){
          gameOver(winner);
          return;
        }
        isYourTurn = true;
      }, thinkingTimeOne + movingTimeOne + thinkingTimeFinal);
  }

  else if (pattern == 2) {
    // First move
    setTimeout(() => {
        moveAiCursor(pointTwo);
    }, thinkingTimeOne);

    // Second and final move
    setTimeout(() => {
      moveAiCursor(pointThree);
    }, thinkingTimeOne + movingTimeOne + thinkingTimeTwo);

    setTimeout(() => {
      gameGrid[pointThree.y][pointThree.x] = "A";
      winner = game.hasWinner(gameGrid);
      if(winner){
        gameOver(winner);
        return;
      }
      isYourTurn = true;
    }, thinkingTimeOne + movingTimeOne + thinkingTimeTwo  + movingTimeTwo + thinkingTimeFinal );
  }

  else if (pattern == 3) {
    // First move
    setTimeout(() => {
        moveAiCursor(pointOne);
      }, thinkingTimeOne);

      // Second move
      setTimeout(() => {
        moveAiCursor(pointTwo);
      }, thinkingTimeOne + movingTimeOne + thinkingTimeTwo);

      // Third move
      setTimeout(() => {
        moveAiCursor(pointThree);
      }, thinkingTimeOne + movingTimeOne + thinkingTimeTwo  + movingTimeTwo + thinkingTimeThree);

      setTimeout(() => {
        gameGrid[pointThree.y][pointThree.x] = "A";
        winner = game.hasWinner(gameGrid);
        if(winner){
          gameOver(winner);
          return;
        }
        isYourTurn = true;
      }, thinkingTimeOne + movingTimeOne + thinkingTimeTwo  + movingTimeTwo + thinkingTimeThree + movingTimeThree + thinkingTimeFinal );
  }
}
</script>

<main>

  <div class="gameGrid"
      class:aspect-ratio-high={ width > height }
      class:aspect-ratio-low={ width < height }>
    {#each gameGrid as row, y}
      <div class="gameGridRow">
        {#each row as cell, x}
          <div class="gameGridCell"
            class:aiCursor={ aiCursor.x == x && aiCursor.y == y }
            class:cell-color-1={ (x + y) % 2 == 0 }
            class:cell-color-2={(x + y) % 2 != 0}
            on:click={() => cellClicked(x, y)}>
            {#if cell == "A"}
              <div class="ai-selected-cell">
                <div class="figure-o"></div>
              </div>
            {:else if cell == "winner-ai"}
            <div class="ai-selected-cell winning-row-cell-ai">
              <div class="figure-o"></div>
            </div>
            {:else if cell == "P"}
              <div class="player-selected-cell">
                <div class="figure-x-1"></div><div class="figure-x-2"></div>
              </div>
            {:else if cell == "winner-player"}
              <div class="player-selected-cell winning-row-cell-player">
                <div class="figure-x-1"></div><div class="figure-x-2"></div>
              </div>
            <!-- {:else if width > 650 && height > 650}
              {x}, {y} -->
            {/if}
          </div>
        {/each}
      </div>
    {/each}

  </div>

  {#if isGameOver}
    <div class="game-over-message">
      <div>
        {winnerPlayer} won!
      </div>
      <button on:click={() => resetGame()}>Try again</button>
    </div>
  {/if}
</main>

<style lang="scss">
  :root {
    --main-bg-color: #1a1a1a;
    --cell-color-1: #2c352a;
    --cell-color-2: rgb(84 84 84);
    --board-borders-color: #131313;
    --board-border-size: 1px;
    //--ai-selected-cell-color: #a800ff;
    --ai-selected-cell-color: #ff5e00;
    --player-selected-cell-color: #ffd400;
    //--player-selected-cell-color: #04ff00;
    --board-max-size: 800px;

    @media only screen and (max-width: 650px) {
      --board-border-size: 1px;
    }

    @media only screen and (max-height: 650px) {
      --board-border-size: 1px;
    }
  }

	main {
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
    background-color: var(--main-bg-color);
    font-size: 12px;

    @media only screen and (max-width: 650px) {
      font-size : 8px;
    }

    @media only screen and (max-height: 650px) {
      font-size : 8px;
    }

    .game-over-message {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background-color:#343434;
      color: white;
      padding: 1.3rem 1.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      border-radius: 0.3rem;
      font-size: 18px;
      box-shadow: 0 0 1rem black;

      button {
        background-color: #13a913;
        color: white;
        border: none;
        margin-top: 1rem;
        padding: 0.6rem 1.3rem;
        cursor: pointer;
        font-size: 18px;
        border-radius: 0.2rem;



        &:hover {
          background-color: #13a313;
        }
      }
    }

		.gameGrid {
      box-shadow: 0 0 2vh 1vh black, 0 0 0 2px var(--board-borders-color);
      display: flex;
      flex-direction: column-reverse;
      max-height: var(--board-max-size);
      max-width: var(--board-max-size);
      background-color: var(--board-borders-color);

      &.aspect-ratio-high {
        width: 90vh;
			  height: 90vh;
      }

      &.aspect-ratio-low {
        width: 90vw;
			  height: 90vw;
      }

      .gameGridRow {
        height: 10%;
        width: 100%;
        display: flex;

        .gameGridCell {
          height: 100%;
          width: 10%;
          box-shadow: 0 0 var(--board-border-size) var(--board-border-size) inset var(--board-borders-color);
          background-color: var(--cell-color-1);
          display: flex;
          align-items: center;
		      justify-content: center;
          color: #555555;

          &.cell-color-2 {
            background-color: var(--cell-color-2);
          }

          &:hover {
            box-shadow: 0 0 3px 3px inset var(--player-selected-cell-color);
            cursor: pointer;
          }

          &.aiCursor {
            animation: ai-cursor-glow 1s linear infinite alternate;
            box-shadow: 0 0 3px 3px inset var(--ai-selected-cell-color)
          }

          .ai-selected-cell,
          .player-selected-cell {
            color: white;
            cursor: default;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .ai-selected-cell {
            border-radius: 50%;
            background-color: var(--ai-selected-cell-color);
            width: 70%;
            height: 70%;

            .figure-o {
              width: 71%;
              height: 71%;
              border-radius: 50%;
              background-color: var(--cell-color-1);
            }
          }

          &.cell-color-2 .figure-o {
            background-color: var(--cell-color-2);
          }

          .player-selected-cell {
            position: relative;
            width: 80%;
            height: 80%;

            .figure-x-1 {
              width: 100%;
              height: 15%;
              background-color: var(--player-selected-cell-color);
              transform: rotate(45deg);
              position:absolute;
            }

            .figure-x-2 {
              width: 100%;
              height: 15%;
              background-color: var(--player-selected-cell-color);
              transform: rotate(-45deg);
              position:absolute;
            }
          }

          @keyframes ai-winner {
            from   {background-color:#b80000; color: rgb(43, 43, 43);}
            to {background-color: #760000; color: rgb(179, 179, 179);}
          }

          .winning-row-cell-ai {
            animation: ai-winner 0.4s linear infinite alternate;
          }

          @keyframes player-winner {
              from   {background-color:#059e00; color: rgb(66, 66, 66);}
              to {background-color: #055800; color: rgb(197, 197, 197);}
          }

          .winning-row-cell-player {
            .figure-x-1,
            .figure-x-2 {
              animation: player-winner 0.4s linear infinite alternate;
            }
          }
        }
      }
		}
	}
</style>