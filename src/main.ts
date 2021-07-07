import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		updateDelay: 10
	}
});

export default app;
