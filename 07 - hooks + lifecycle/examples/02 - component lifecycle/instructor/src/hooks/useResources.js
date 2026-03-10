import { useState } from 'react';

const API_BASE_URL = 'http://localhost:3000'


/* we'll make an overall custom hook using both useState and useEffect
   to fetch data, control loading state, display errors, and basically everything
   responsive we want to happen during & after grabbing API data
*/
export function useResources() {
	const [resources, setResources] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);

	async function fetchResources(signal) {
		// whenever I initiate a fetch, I'm now waiting for results, so I'll default my loading/error states:
		setIsLoading(true);
		setError(null);

		// ... fetch behaviour
	}

	/* useEffect is for 'side-effecting': anytime we want to interact with something outside of 
		pure React rendering, e.g. fetching data from an API (since that's external to React) *but*
		still want our UI to respond automatically.

		Pattern:
			useEffect(callback, [dependencies])

		1. Dependency array is []:            effect will fire only on initial load.
		2. Dependency array is [values, ...]: effect will fire anytime those values change.
		3. No dependency array supplied (no 2nd argument): effect fires anytime component re-renders.
	*/
	useEffect(
		// 1. callback: will be fetching our API data
		() => {},
		// 2. dependencies: [], i.e. when page loads
		[]
	);

	function refetch() {
		// I'm also going to implement an inner function to refetch -- we'll be using this so that we can
		// respond to data in the sessionStorage changing, so that triggers UI updates.
	}
}