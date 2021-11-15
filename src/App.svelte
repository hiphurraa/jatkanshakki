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

  // AI starts
  //gameGrid = ai.play(gameGrid);

  window.onresize = () => {
    height = window.innerHeight;
    width = window.innerWidth;
  }

  function resetGame() {
    gameGrid = createArray(15, 15);
    isGameOver = false;
    isYourTurn = true;
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
  }, 1500);
}

function cellClicked(x, y) {
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

  // AI's turn
  gameGrid = ai.play(gameGrid);
  
  winner = game.hasWinner(gameGrid);
  if(winner){
    gameOver(winner);
    return;
  }

  isYourTurn = true;
}

</script>

<main>

  <div class={(width > height)? "gameGrid aspect-ratio-high" : "gameGrid aspect-ratio-low"}>
    {#each gameGrid as row, y}
      <div class="gameGridRow">
        {#each row as cell, x}
          <div class="gameGridCell" 
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
    --main-bg-color: #0c0c0c;
    //--board-bg-color: rgb(73, 10, 10);
    // --board-bg-color: rgb(94, 14, 14);
    --board-highlight-color: red;
    --board-bg-color: #0e0e0e;
    --board-borders-color: #282828;
    --board-border-size: 2px;
    --focused-cell-outline-color: #b79800;
    --ai-selected-cell-color: #a800ff;
    --player-selected-cell-color: #b79800;
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

    @keyframes bg-glow {
      0% {
        box-shadow: 0 0 5vh var(--board-bg-color), 0 0 0 2px var(--board-borders-color);
      }
      100% {
        box-shadow: 0 0 5vh #2c2c2c, 0 0 0 2px var(--board-borders-color);
      }
    }

		.gameGrid {
      animation: bg-glow 2s linear infinite alternate;
      display: flex;
      flex-direction: column-reverse;
      max-height: var(--board-max-size);
      max-width: var(--board-max-size);

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
          box-shadow: 0 0 2px var(--board-border-size) inset var(--board-borders-color);
          background-color: var(--board-bg-color);
          display: flex;
          align-items: center;
		      justify-content: center;
          color: #555555;

          &:hover {
            box-shadow: 0 0 2px 2px inset var(--focused-cell-outline-color);
            cursor: pointer;
          }

          .ai-selected-cell,
          .player-selected-cell,
          .winning-row-cell {
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
              width: 70%;
              height: 70%;
              border-radius: 50%;
              background-color: var(--board-bg-color);
            }
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