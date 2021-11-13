<script>
  export let game;
  export let ai;

  let A = "AI";
  let P = "You";
  var height = window.innerHeight;
  var width = window.innerWidth;

  window.onresize = () => {
    height = window.innerHeight;
    width = window.innerWidth;
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
let gameGrid;
if (width > 650 && height > 650){
  gameGrid = createArray(15, 15);
}
else {
  gameGrid = createArray(10, 10);
}

var isYourTurn = true;
var isGameOver = false;

function gameOver(winner) {
  isGameOver = true;
  gameGrid = game.showWinningRow(winner, gameGrid);
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
              <div class="ai-selected-cell">AI</div>
            {:else if cell == "P"}
              <div class="player-selected-cell">You</div>
            {:else if cell == "winner-ai"}
              <div class="winning-row-cell ai">AI</div>
            {:else if cell == "winner-player"}
              <div class="winning-row-cell player">You</div>
            {:else if width > 650 && height > 650}
              {x}, {y}
            {/if}
          </div>
        {/each}
      </div>
    {/each}

  </div>

</main>

<style lang="scss">
  :root {
    --main-bg-color: #2a2a2a;
    //--board-bg-color: rgb(73, 10, 10);
    --board-bg-color: rgb(94, 14, 14);
    --board-borders-color: black;
    --board-border-size: 2px;
    --focused-cell-outline-color: rgb(122, 255, 34);
    --ai-selected-cell-color: rgb(171, 41, 41);
    --player-selected-cell-color: rgb(78, 141, 38);
  }

	main {
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
    background-color: var(--main-bg-color);
    font-size: 12px;

		.gameGrid {
      border: solid var(--board-border-size) var(--board-borders-color);
      display: flex;
      flex-direction: column-reverse;

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
          box-shadow: 0 0 0 2px inset var(--board-borders-color);
          background-color: var(--board-bg-color);
          display: flex;
          align-items: center;
		      justify-content: center;

          &:hover {
            box-shadow: 0 0 0 2px inset var(--focused-cell-outline-color);
            cursor: pointer;
          }

          .ai-selected-cell,
          .player-selected-cell,
          .winning-row-cell {
            width: 85%;
            height: 85%;
            border-radius: 50%;
            color: white;
            cursor: default;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .ai-selected-cell {
            background-color: var(--ai-selected-cell-color);
          }

          .player-selected-cell {
            background-color: var(--player-selected-cell-color);
          }

          .winning-row-cell {

            @keyframes ai-winner {
              from   {background-color:#b80000; color: rgb(43, 43, 43);}
              to {background-color: #760000; color: rgb(179, 179, 179);}
            }

            @keyframes player-winner {
              from   {background-color:#059e00; color: rgb(66, 66, 66);}
              to {background-color: #055800; color: rgb(197, 197, 197);}
            }

            &.ai {
              animation: ai-winner 0.4s linear infinite alternate;
            }

            &.player {
              animation: player-winner 0.4s linear infinite alternate;
            }
          }
        }
      }
		}
	}
</style>