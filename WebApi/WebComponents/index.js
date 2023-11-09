

const init = () => {
  const customElementRegistry = window.customElements;
  // customElementRegistry.define();

  const customComponent = new CustomComponent();
  customComponent.init();
}

init();
