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

  let scoreAI = 0;
  let scorePlayer = 0;

  // Check browser support
  // Retrieve
  let retrievedScoreAI = localStorage.getItem("jatkanshakki-score-ai");
  let retrievedScorePlayer = localStorage.getItem("jatkanshakki-score-player");
  if (retrievedScoreAI != null) scoreAI = parseInt(retrievedScoreAI);
  if (retrievedScorePlayer != null) scorePlayer = parseInt(retrievedScorePlayer)

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
  if (winner.row == "AAAAA"){
    winnerPlayer = "AI";
    scoreAI += 1;
    localStorage.removeItem("jatkanshakki-score-ai");
    localStorage.setItem("jatkanshakki-score-ai", scoreAI);
  } 
  else {
    winnerPlayer = "You";
    scorePlayer += 1;
    localStorage.removeItem("jatkanshakki-score-player");
    localStorage.setItem("jatkanshakki-score-player", scorePlayer);
  }
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

  console.log(localStorage);

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

  let moveTimeFromZeroToOne = (
        ((aiCursor.x > pointOne.x)? aiCursor.x - pointOne.x : pointOne.x - aiCursor.x) + 
        ((aiCursor.y > pointOne.y)? aiCursor.y - pointOne.y : pointOne.y - aiCursor.y) 
      ) * 100;

  let moveTimeFromOneToTwo = ( 
        ((pointOne.x > pointTwo.x)? pointOne.x - pointTwo.x : pointTwo.x - pointOne.x) + 
        ((pointOne.y > pointTwo.y)? pointOne.y - pointTwo.y : pointTwo.y - pointOne.y)
      ) * 100;

  let moveTimeFromTwoToThree = ( 
        ((pointTwo.x > pointThree.x)? pointTwo.x - pointThree.x : pointThree.x - pointTwo.x) + 
        ((pointTwo.y > pointThree.y)? pointTwo.y - pointThree.y : pointThree.y - pointTwo.y)
      ) * 100;

  let moveTimeFromZeroToTwo = ( 
    ((aiCursor.x > pointTwo.x)? aiCursor.x - pointTwo.x : pointTwo.x - aiCursor.x) + 
    ((aiCursor.y > pointTwo.y)? aiCursor.y - pointTwo.y : pointTwo.y - aiCursor.y)
  ) * 100;

  let moveTimeFromZeroToThree = ( 
    ((aiCursor.x > pointThree.x)? aiCursor.x - pointThree.x : pointThree.x - aiCursor.x) + 
    ((aiCursor.y > pointThree.y)? aiCursor.y - pointThree.y : pointThree.y - aiCursor.y)
  ) * 100;

  let thinkingTimeShort = 500;
  let thinkingTimeLong = 800;

  let dice = randomIntFromInterval(1, 100);
  let pattern;

  switch(true) {
    case (dice >= 92):
      pattern = 3;
      break;
    case (dice > 75 && dice < 92):
      pattern = 2;
      break;
    default:
      pattern = 1;
      break;
  }

  if (priorityOne[0] >= 9999999999) pattern = 1;

  if (pattern == 1) {
    // First and final move
    setTimeout(() => {
        moveAiCursor(pointThree);
      }, thinkingTimeShort);

      setTimeout(() => {
        gameGrid[pointThree.y][pointThree.x] = "A";
        winner = game.hasWinner(gameGrid);
        if(winner){
          gameOver(winner);
          return;
        }
        isYourTurn = true;
      }, thinkingTimeShort + moveTimeFromZeroToThree + thinkingTimeShort);
  }

  else if (pattern == 2) {
    // First move
    setTimeout(() => {
        moveAiCursor(pointTwo);
    }, thinkingTimeShort);

    // Second and final move
    setTimeout(() => {
      moveAiCursor(pointThree);
    }, thinkingTimeShort + moveTimeFromZeroToTwo + thinkingTimeLong);

    setTimeout(() => {
      gameGrid[pointThree.y][pointThree.x] = "A";
      winner = game.hasWinner(gameGrid);
      if(winner){
        gameOver(winner);
        return;
      }
      isYourTurn = true;
    }, thinkingTimeShort + moveTimeFromZeroToTwo + thinkingTimeLong  + moveTimeFromTwoToThree + thinkingTimeShort );
  }

  else if (pattern == 3) {
    // First move
    setTimeout(() => {
        moveAiCursor(pointOne);
      }, thinkingTimeShort);

      // Second move
      setTimeout(() => {
        moveAiCursor(pointTwo);
      }, thinkingTimeShort + moveTimeFromZeroToOne + thinkingTimeLong);

      // Third move
      setTimeout(() => {
        moveAiCursor(pointThree);
      }, thinkingTimeShort + moveTimeFromZeroToOne + thinkingTimeLong  + moveTimeFromOneToTwo + thinkingTimeLong);

      setTimeout(() => {
        gameGrid[pointThree.y][pointThree.x] = "A";
        winner = game.hasWinner(gameGrid);
        if(winner){
          gameOver(winner);
          return;
        }
        isYourTurn = true;
      }, thinkingTimeShort + moveTimeFromZeroToOne + thinkingTimeLong  + moveTimeFromOneToTwo + thinkingTimeLong + moveTimeFromTwoToThree + thinkingTimeShort );
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
      <button on:click={() => resetGame()}>Play again</button>
    </div>
  {/if}

  <div class="score-situation">
    {#if scoreAI > scorePlayer}
    <p class="ai-color">AI: {scoreAI}</p>
    <p class="player-color">You: {scorePlayer}</p>
    {:else}
    <p class="player-color">You: {scorePlayer}</p>
    <p class="ai-color">AI: {scoreAI}</p>
    {/if}
  </div>
</main>

<style lang="scss">
  :root {
    --main-bg-color: #0c0c0c;
    --board-bg-color: black;
    --cell-color-1: rgb(34 52 61);
    --cell-color-2: #222f22;
    --board-borders-color: #1b1b1b;
    --board-border-size: 2px;
    --ai-selected-cell-color: #00f4ff;
    --player-selected-cell-color: #69ff00;
    --board-max-size: 800px;

    @media only screen and (max-width: 600px) {
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
      bottom: 0;
      left: 50%;
      transform: translate(-50%, -50%);
      background-color: #182f3c;
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
        background-color: #255f9b;
        text-shadow: 0 0 0.5rem #262626;
        color: white;
        border: none;
        margin-top: 1rem;
        padding: 0.6rem 1.3rem;
        cursor: pointer;
        font-size: 18px;
        border-radius: 0.2rem;
        
        &:hover {
          background-color: #2868ac;
        }
      }
    }

    .score-situation {
      position: absolute;
      top: 0;
      left: 0;
      font-size: 17px;
      line-height: 0.7em;
      padding: 1rem 2rem;

      @media only screen and (max-width: 600px) {
        font-size: 12px;
      }

      .ai-color {
        color: var(--ai-selected-cell-color);
      }

      .player-color {
        color: var(--player-selected-cell-color);
      }
    }

		.gameGrid {
      box-shadow: 0 0 2vh 2vh var(--board-bg-color);
      display: flex;
      flex-direction: column-reverse;
      max-height: var(--board-max-size);
      max-width: var(--board-max-size);
      background-color: var(--board-bg-color);

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
          background-color: var(--cell-color-1);
          box-shadow: 0 0 0 var(--board-border-size) inset var(--board-bg-color);
          border-radius: 25%;
          display: flex;
          align-items: center;
		      justify-content: center;
          color: #555555;

          &.cell-color-2 {
            background-color: var(--cell-color-2);
            //box-shadow: 0 0 0 var(--board-border-size) inset var(--cell-color-2);
          }

          &:hover {
            box-shadow: 0 0 3px 3px inset var(--player-selected-cell-color);
            cursor: pointer;
          }

          &.aiCursor {
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
            background-color: var(--cell-color-1);
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
            from   {background-color: var(--ai-selected-cell-color);}
            to {background-color: #00685f;}
          }

          .winning-row-cell-ai {
            animation: ai-winner 0.4s linear infinite alternate;
          }

          @keyframes player-winner {
              from   {background-color: var(--player-selected-cell-color)}
              to {background-color: #055800;}
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