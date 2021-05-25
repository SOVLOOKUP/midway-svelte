<script>
import api from '../apis/lambda'
import { onMount } from 'svelte'

let message = 'work in progress'
  onMount(async () => {
    const response = await api()
    message = response.message
  })
</script>


<h1>Welcome to SvelteKit</h1>
<h2>{message}</h2>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
