import App from './App.svelte';
import AIPlayer from './AIPlayer';
import Game from './Game';

const app = new App({
	target: document.body,
	props: {
		ai: new AIPlayer(),
		game: new Game()
	}
});

export default app;