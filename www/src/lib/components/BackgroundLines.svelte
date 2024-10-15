<script lang="ts">
  import { cn } from "$lib/utils";
  import { onMount } from "svelte";
  import BackgroundSvg from "./BackgroundSvg.svelte";

  export let duration: number = 10;
  let _class = "";
  export { _class as class };
  let isMounted = false;
  onMount(() => {
    isMounted = true;
  });
</script>

<!-- md:h-[90vh] -->
<div class={cn(" md:h-screen w-full relative", _class)}>
  {#if isMounted}
    <div class="absolute top-0 left-0 z-0">
      <BackgroundSvg {duration} />
    </div>
  {/if}
  <div class="z-10">
    <slot></slot>
  </div>
</div>
