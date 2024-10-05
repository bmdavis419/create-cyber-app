<script lang="ts">
  const { tech } = $props<{ tech: "Tailwind" | "Prettier" | "Mdsvex" }>();
</script>

<div>
  {#if tech === "Tailwind"}
    <svg
      viewBox="0 0 256 154"
      width="256"
      height="154"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid"
    >
      <defs
        ><linearGradient
          x1="-2.778%"
          y1="32%"
          x2="100%"
          y2="67.556%"
          id="gradient"
        >
          <stop stop-color="#2298BD" offset="0%"></stop>
          <stop stop-color="#0ED7B5" offset="100%"></stop>
        </linearGradient></defs
      >
      <path
        d="M128 0C93.867 0 72.533 17.067 64 51.2 76.8 34.133 91.733 27.733 108.8 32c9.737 2.434 16.697 9.499 24.401 17.318C145.751 62.057 160.275 76.8 192 76.8c34.133 0 55.467-17.067 64-51.2-12.8 17.067-27.733 23.467-44.8 19.2-9.737-2.434-16.697-9.499-24.401-17.318C174.249 14.743 159.725 0 128 0ZM64 76.8C29.867 76.8 8.533 93.867 0 128c12.8-17.067 27.733-23.467 44.8-19.2 9.737 2.434 16.697 9.499 24.401 17.318C81.751 138.857 96.275 153.6 128 153.6c34.133 0 55.467-17.067 64-51.2-12.8 17.067-27.733 23.467-44.8 19.2-9.737-2.434-16.697-9.499-24.401-17.318C110.249 91.543 95.725 76.8 64 76.8Z"
        fill="url(#gradient)"
      ></path></svg
    >
  {/if}
  {#if tech === "Prettier"}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="210"
      height="210"
      viewBox="0 0 210 210"
      ><g fill="none" fill-rule="evenodd"
        ><g transform="translate(0 200)"
          ><rect
            width="60"
            height="10"
            x="150"
            fill="#CFD4D7"
            opacity=".5"
            rx="5"
          /><rect
            width="70"
            height="10"
            x="70"
            fill="#CFD4D7"
            opacity=".5"
            rx="5"
          /><rect width="60" height="10" fill="#EA5E5E" rx="5" /></g
        ><g transform="translate(0 180)"
          ><rect
            width="50"
            height="10"
            x="160"
            fill="#CFD4D7"
            opacity=".5"
            rx="5"
          /><rect
            width="20"
            height="10"
            x="130"
            fill="#CFD4D7"
            opacity=".5"
            rx="5"
          /><rect
            width="50"
            height="10"
            x="70"
            fill="#CFD4D7"
            opacity=".5"
            rx="5"
          /><rect width="20" height="10" x="40" fill="#F7B93E" rx="5" /><rect
            width="30"
            height="10"
            fill="#56B3B4"
            rx="5"
          /></g
        ><g transform="translate(0 160)"
          ><rect
            width="100"
            height="10"
            x="110"
            fill="#CFD4D7"
            opacity=".5"
            rx="5"
          /><rect
            width="30"
            height="10"
            x="70"
            fill="#CFD4D7"
            opacity=".5"
            rx="5"
          /><rect width="60" height="10" fill="#BF85BF" rx="5" /></g
        ><g transform="translate(0 140)"
          ><rect
            width="30"
            height="10"
            x="180"
            fill="#CFD4D7"
            opacity=".5"
            rx="5"
          /><rect
            width="30"
            height="10"
            x="140"
            fill="#CFD4D7"
            opacity=".5"
            rx="5"
          /><rect width="100" height="10" x="30" fill="#F7B93E" rx="5" /><rect
            width="20"
            height="10"
            fill="#BF85BF"
            rx="5"
          /></g
        ><g transform="translate(0 120)"
          ><rect
            width="40"
            height="10"
            x="170"
            fill="#CFD4D7"
            opacity=".5"
            rx="5"
          /><rect width="40" height="10" x="120" fill="#BF85BF" rx="5" /><rect
            width="50"
            height="10"
            x="60"
            fill="#EA5E5E"
            rx="5"
          /><rect width="50" height="10" fill="#56B3B4" rx="5" /></g
        ><g transform="translate(0 100)"
          ><rect
            width="30"
            height="10"
            x="180"
            fill="#CFD4D7"
            opacity=".5"
            rx="5"
          /><rect width="90" height="10" x="80" fill="#56B3B4" rx="5" /><rect
            width="40"
            height="10"
            x="30"
            fill="#F7B93E"
            rx="5"
          /><rect width="20" height="10" fill="#EA5E5E" rx="5" /></g
        ><g transform="translate(0 80)"
          ><rect
            width="20"
            height="10"
            x="190"
            fill="#CFD4D7"
            opacity=".5"
            rx="5"
          /><rect width="60" height="10" x="120" fill="#F7B93E" rx="5" /><rect
            width="40"
            height="10"
            x="70"
            fill="#CFD4D7"
            opacity=".5"
            rx="5"
          /><rect width="60" height="10" fill="#BF85BF" rx="5" /></g
        ><g transform="translate(0 60)"
          ><rect
            width="20"
            height="10"
            x="190"
            fill="#CFD4D7"
            opacity=".5"
            rx="5"
          /><rect width="60" height="10" x="120" fill="#EA5E5E" rx="5" /><rect
            width="40"
            height="10"
            x="70"
            fill="#CFD4D7"
            opacity=".5"
            rx="5"
          /><rect width="20" height="10" x="40" fill="#56B3B4" rx="5" /><rect
            width="30"
            height="10"
            fill="#F7B93E"
            rx="5"
          /></g
        ><g transform="translate(0 40)"
          ><rect
            width="30"
            height="10"
            x="180"
            fill="#CFD4D7"
            opacity=".5"
            rx="5"
          /><rect width="20" height="10" x="150" fill="#56B3B4" rx="5" /><rect
            width="50"
            height="10"
            x="90"
            fill="#BF85BF"
            rx="5"
          /><rect width="80" height="10" fill="#56B3B4" rx="5" /></g
        ><g transform="translate(0 20)"
          ><rect
            width="40"
            height="10"
            x="170"
            fill="#CFD4D7"
            opacity=".5"
            rx="5"
          /><rect width="110" height="10" x="50" fill="#F7B93E" rx="5" /><rect
            width="40"
            height="10"
            fill="#EA5E5E"
            rx="5"
          /></g
        ><rect
          width="70"
          height="10"
          x="140"
          fill="#CFD4D7"
          opacity=".5"
          rx="5"
        /><rect width="130" height="10" fill="#56B3B4" rx="5" /></g
      ></svg
    >
  {/if}
  {#if tech === "Mdsvex"}
    <svg viewBox="0 0 208 128" xmlns="http://www.w3.org/2000/svg" fill="none"
      ><g fill="#000"
        ><path
          fill-rule="evenodd"
          d="M15 10a5 5 0 0 0-5 5v98a5 5 0 0 0 5 5h178a5 5 0 0 0 5-5V15a5 5 0 0 0-5-5zM0 15A15 15 0 0 1 15 0h178a15 15 0 0 1 15 15v98a15 15 0 0 1-15 15H15a15 15 0 0 1-15-15z"
          clip-rule="evenodd"
        /><path
          d="M30 98V30h20l20 25 20-25h20v68H90V59L70 84 50 59v39zm125 0-30-33h20V30h20v35h20z"
        /></g
      ></svg
    >
  {/if}
  <h3>{tech}</h3>
</div>
