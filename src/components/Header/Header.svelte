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
      <input type="checkbox" class="HeaderWrapper__themeToggle" on:change={()=>{
        document.body.classList.toggle('dark-mode')
      }}/>
    </div>
  </div>
</header>

<style lang="scss" src="./Header.scss"></style>
