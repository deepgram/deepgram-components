export default {
  // this creates a ‘Components’ folder and a DeepgramHeader subfolder
  title: 'Components/DeepgramHeader',
};

const AnonymousTemplate = args => `<deepgram-header active="${args.active}" debug="${args.debug}"></deepgram-header>`;

export const Anonymous = AnonymousTemplate.bind({});
Anonymous.args = {
  active: 'playground',
  debug: false,
};

Anonymous.parameters = {
  viewport: {
    defaultViewport: 'desktop',
  },
  layout: 'fullscreen',
};

const SignedInTemplate = args => `<deepgram-header active="${args.active}" debug="${args.debug}">
  <span slot="projects" style="padding: 0.5rem 1rem;">
    Projects here
  </span>
  <span slot="user" style="padding: 0.5rem 1rem;">
    Welcome, Luke
  </span>
</deepgram-header>`;

export const SignedIn = SignedInTemplate.bind({});
SignedIn.args = {
  active: 'playground',
  debug: false,
};

SignedIn.parameters = {
  viewport: {
    defaultViewport: 'desktop',
  },
  layout: 'fullscreen',
};
