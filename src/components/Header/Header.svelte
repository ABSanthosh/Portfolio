<script>
  let mode = localStorage.getItem("theme") != "" ? "Dark" : "Light";
</script>

<header class="HeaderWrapper">
  <div class="HeaderWrapper__content">
    <div class="HeaderWrapper__content--left">
      <div class="HeaderWrapper__title">
        <span class="HeaderWrapper__title--brackets">(</span>
        <span class="HeaderWrapper__title--params">AB</span>
        <span class="HeaderWrapper__title--brackets">)</span>
        <span class="HeaderWrapper__title--arrow"> =></span>
        <span class="HeaderWrapper__title--name">Santhosh</span>
      </div>
    </div>
    <div class="HeaderWrapper__content--right">
      <button
        title="Toggles light & dark"
        aria-label="auto"
        aria-live="polite"
        class="HeaderWrapper__themeToggle"
        on:click={() => {
          if (document.body.classList.contains("dark-mode")) {
            document.body.classList.remove("dark-mode");
            localStorage.setItem("theme", "");
            mode = "Light";
          } else {
            document.body.classList.add("dark-mode");
            localStorage.setItem("theme", "dark-mode");
            mode = "Dark";
          }
        }}
      >
        {mode}
      </button>
    </div>
  </div>
</header>

<style lang="scss" src="./Header.scss"></style>
