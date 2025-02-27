import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'deepgram-header',
  styleUrl: 'deepgram-header.css',
  shadow: true,
})
export class DeepgramHeader {
  /**
   * The active site
   */
  @Prop() active: 'playground' | 'console' | 'docs' | 'community';

  /**
   * Boolean to toggle debug mode
   */
  @Prop() debug: boolean;

  /**
   * Boolean to track if the menu is open
   */
  @Prop({ mutable: true }) isMenuOpen: boolean = false;

  /**
   * Get the classes for the site
   */
  private getLinkClasses(site: string): string {
    const classes = ['dg-header-button'];
    if (this.active && site === this.active) {
      classes.push('active');
    }
    return classes.join(' ');
  }

  /**
   * Toggle the menu open state
   */
  private toggleMenuOpen(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  render() {
    return (
      <div class={`dg-header-wrapper ${this.debug ? 'debug' : ''}`} role="banner">
        <div class="dg-mobile-button">
          <button aria-label="Menu" onClick={() => this.toggleMenuOpen()}>
            <svg
              class={`dg-mobile-icon ${this.isMenuOpen ? 'rotate-icon' : ''}`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              role="img"
            >
              <path d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z" />
            </svg>
            <span class="sr-only">Menu</span>
          </button>
        </div>
        <div class={`dg-header-container ${this.isMenuOpen ? 'open' : ''}`}>
          <div class="dg-header-projects">
            <slot name="projects" />
          </div>
          <nav class="dg-header-nav" aria-label="Main navigation">
            <a href="https://playground.deepgram.com" rel="noopener noreferrer" class={this.getLinkClasses('playground')} aria-label="Go to Deepgram Playground">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" role="img">
                <path
                  fill-rule="evenodd"
                  d="M9 4.5a.75.75 0 0 1 .721.544l.813 2.846a3.75 3.75 0 0 0 2.576 2.576l2.846.813a.75.75 0 0 1 0 1.442l-2.846.813a3.75 3.75 0 0 0-2.576 2.576l-.813 2.846a.75.75 0 0 1-1.442 0l-.813-2.846a3.75 3.75 0 0 0-2.576-2.576l-2.846-.813a.75.75 0 0 1 0-1.442l2.846-.813A3.75 3.75 0 0 0 7.466 7.89l.813-2.846A.75.75 0 0 1 9 4.5ZM18 1.5a.75.75 0 0 1 .728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 0 1 0 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 0 1-1.456 0l-.258-1.036a2.625 2.625 0 0 0-1.91-1.91l-1.036-.258a.75.75 0 0 1 0-1.456l1.036-.258a2.625 2.625 0 0 0 1.91-1.91l.258-1.036A.75.75 0 0 1 18 1.5ZM16.5 15a.75.75 0 0 1 .712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 0 1 0 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 0 1-1.422 0l-.395-1.183a1.5 1.5 0 0 0-.948-.948l-1.183-.395a.75.75 0 0 1 0-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0 1 16.5 15Z"
                  clip-rule="evenodd"
                />
              </svg>
              <span>Playground</span>
            </a>
            <a href="https://console.deepgram.com" rel="noopener noreferrer" class={this.getLinkClasses('console')} aria-label="Go to Deepgram Console">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" role="img">
                <path
                  fill-rule="evenodd"
                  d="M15.75 1.5a6.75 6.75 0 0 0-6.651 7.906c.067.39-.032.717-.221.906l-6.5 6.499a3 3 0 0 0-.878 2.121v2.818c0 .414.336.75.75.75H6a.75.75 0 0 0 .75-.75v-1.5h1.5A.75.75 0 0 0 9 19.5V18h1.5a.75.75 0 0 0 .53-.22l2.658-2.658c.19-.189.517-.288.906-.22A6.75 6.75 0 1 0 15.75 1.5Zm0 3a.75.75 0 0 0 0 1.5A2.25 2.25 0 0 1 18 8.25a.75.75 0 0 0 1.5 0 3.75 3.75 0 0 0-3.75-3.75Z"
                  clip-rule="evenodd"
                />
              </svg>
              <span>Console</span>
            </a>
            <a href="https://deepgram.docs.buildwithfern.com" rel="noopener noreferrer" class={this.getLinkClasses('docs')} aria-label="Go to Deepgram Documentation">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" role="img">
                <path d="M11.25 4.533A9.707 9.707 0 0 0 6 3a9.735 9.735 0 0 0-3.25.555.75.75 0 0 0-.5.707v14.25a.75.75 0 0 0 1 .707A8.237 8.237 0 0 1 6 18.75c1.995 0 3.823.707 5.25 1.886V4.533ZM12.75 20.636A8.214 8.214 0 0 1 18 18.75c.966 0 1.89.166 2.75.47a.75.75 0 0 0 1-.708V4.262a.75.75 0 0 0-.5-.707A9.735 9.735 0 0 0 18 3a9.707 9.707 0 0 0-5.25 1.533v16.103Z" />
              </svg>

              <span>Documentation</span>
            </a>
            <a href="https://community.deepgram.com" rel="noopener noreferrer" class={this.getLinkClasses('community')} aria-label="Go to Deepgram Community">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" role="img">
                <path
                  fill-rule="evenodd"
                  d="M8.25 6.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM15.75 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM2.25 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM6.31 15.117A6.745 6.745 0 0 1 12 12a6.745 6.745 0 0 1 6.709 7.498.75.75 0 0 1-.372.568A12.696 12.696 0 0 1 12 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 0 1-.372-.568 6.787 6.787 0 0 1 1.019-4.38Z"
                  clip-rule="evenodd"
                />
                <path d="M5.082 14.254a8.287 8.287 0 0 0-1.308 5.135 9.687 9.687 0 0 1-1.764-.44l-.115-.04a.563.563 0 0 1-.373-.487l-.01-.121a3.75 3.75 0 0 1 3.57-4.047ZM20.226 19.389a8.287 8.287 0 0 0-1.308-5.135 3.75 3.75 0 0 1 3.57 4.047l-.01.121a.563.563 0 0 1-.373.486l-.115.04c-.567.2-1.156.349-1.764.441Z" />
              </svg>
              <span>Community</span>
            </a>
            <slot name="user">
              <a
                class="dg-header-button dg-header-button--signup"
                href="https://console.deepgram.com/signup?redirect=https://playground.deepgram.com"
                rel="noopener noreferrer"
                aria-label="Sign Up"
              >
                <span>Sign Up</span>
              </a>
            </slot>
          </nav>
        </div>
      </div>
    );
  }

  // render() {
  //   return (
  //     <div class="dg-header-wrapper" role="banner">
  //       <div class="dg-header-container">
  //         <div class="dg-header-projects">
  //           <slot name="projects" />
  //         </div>
  //         <nav class="dg-header-nav" aria-label="Main navigation">
  //           <a href="https://playground.deepgram.com" rel="noopener noreferrer" class={this.getLinkClasses('playground')} aria-label="Go to Deepgram Playground">
  //             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" role="img">
  //               <path
  //                 fill-rule="evenodd"
  //                 d="M9 4.5a.75.75 0 0 1 .721.544l.813 2.846a3.75 3.75 0 0 0 2.576 2.576l2.846.813a.75.75 0 0 1 0 1.442l-2.846.813a3.75 3.75 0 0 0-2.576 2.576l-.813 2.846a.75.75 0 0 1-1.442 0l-.813-2.846a3.75 3.75 0 0 0-2.576-2.576l-2.846-.813a.75.75 0 0 1 0-1.442l2.846-.813A3.75 3.75 0 0 0 7.466 7.89l.813-2.846A.75.75 0 0 1 9 4.5ZM18 1.5a.75.75 0 0 1 .728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 0 1 0 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 0 1-1.456 0l-.258-1.036a2.625 2.625 0 0 0-1.91-1.91l-1.036-.258a.75.75 0 0 1 0-1.456l1.036-.258a2.625 2.625 0 0 0 1.91-1.91l.258-1.036A.75.75 0 0 1 18 1.5ZM16.5 15a.75.75 0 0 1 .712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 0 1 0 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 0 1-1.422 0l-.395-1.183a1.5 1.5 0 0 0-.948-.948l-1.183-.395a.75.75 0 0 1 0-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0 1 16.5 15Z"
  //                 clip-rule="evenodd"
  //               />
  //             </svg>
  //             <span>Playground</span>
  //           </a>
  //           <a href="https://console.deepgram.com" rel="noopener noreferrer" class={this.getLinkClasses('console')} aria-label="Go to Deepgram Console">
  //             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" role="img">
  //               <path
  //                 fill-rule="evenodd"
  //                 d="M15.75 1.5a6.75 6.75 0 0 0-6.651 7.906c.067.39-.032.717-.221.906l-6.5 6.499a3 3 0 0 0-.878 2.121v2.818c0 .414.336.75.75.75H6a.75.75 0 0 0 .75-.75v-1.5h1.5A.75.75 0 0 0 9 19.5V18h1.5a.75.75 0 0 0 .53-.22l2.658-2.658c.19-.189.517-.288.906-.22A6.75 6.75 0 1 0 15.75 1.5Zm0 3a.75.75 0 0 0 0 1.5A2.25 2.25 0 0 1 18 8.25a.75.75 0 0 0 1.5 0 3.75 3.75 0 0 0-3.75-3.75Z"
  //                 clip-rule="evenodd"
  //               />
  //             </svg>
  //             <span>Console</span>
  //           </a>
  //           <a href="https://deepgram.docs.buildwithfern.com" rel="noopener noreferrer" class={this.getLinkClasses('docs')} aria-label="Go to Deepgram Documentation">
  //             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" role="img">
  //               <path d="M11.25 4.533A9.707 9.707 0 0 0 6 3a9.735 9.735 0 0 0-3.25.555.75.75 0 0 0-.5.707v14.25a.75.75 0 0 0 1 .707A8.237 8.237 0 0 1 6 18.75c1.995 0 3.823.707 5.25 1.886V4.533ZM12.75 20.636A8.214 8.214 0 0 1 18 18.75c.966 0 1.89.166 2.75.47a.75.75 0 0 0 1-.708V4.262a.75.75 0 0 0-.5-.707A9.735 9.735 0 0 0 18 3a9.707 9.707 0 0 0-5.25 1.533v16.103Z" />
  //             </svg>

  //             <span>Documentation</span>
  //           </a>
  //           <a href="https://community.deepgram.com" rel="noopener noreferrer" class={this.getLinkClasses('community')} aria-label="Go to Deepgram Community">
  //             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" role="img">
  //               <path
  //                 fill-rule="evenodd"
  //                 d="M8.25 6.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM15.75 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM2.25 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM6.31 15.117A6.745 6.745 0 0 1 12 12a6.745 6.745 0 0 1 6.709 7.498.75.75 0 0 1-.372.568A12.696 12.696 0 0 1 12 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 0 1-.372-.568 6.787 6.787 0 0 1 1.019-4.38Z"
  //                 clip-rule="evenodd"
  //               />
  //               <path d="M5.082 14.254a8.287 8.287 0 0 0-1.308 5.135 9.687 9.687 0 0 1-1.764-.44l-.115-.04a.563.563 0 0 1-.373-.487l-.01-.121a3.75 3.75 0 0 1 3.57-4.047ZM20.226 19.389a8.287 8.287 0 0 0-1.308-5.135 3.75 3.75 0 0 1 3.57 4.047l-.01.121a.563.563 0 0 1-.373.486l-.115.04c-.567.2-1.156.349-1.764.441Z" />
  //             </svg>
  //             <span>Community</span>
  //           </a>
  //           <slot name="user">
  //             <a
  //               href="https://console.deepgram.com/signup?redirect=https://playground.deepgram.com"
  //               rel="noopener noreferrer"
  //               class="dg-header-button dg-header-button--signup"
  //               aria-label="Sign Up"
  //             >
  //               <span>Sign Up</span>
  //             </a>
  //           </slot>
  //         </nav>
  //       </div>
  //     </div>
  //   );
  // }
}
