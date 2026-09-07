// Your Web3Forms access key (from https://web3forms.com — the dashboard
// gives you one after you verify your email). Leave empty to show a "coming
// soon" note instead of the RSVP form.
export const WEB3FORMS_ACCESS_KEY = "163de8dc-9d7b-4f4c-b384-f402e8666c1e";

// Optional fallback: a Google Form link, only used if you'd rather keep that
// as a backup instead of (or in addition to) the on-site form above.
export const RSVP_FORM_URL = "";

// Manual RSVP cap. Web3Forms allows up to 250 submissions/month, but we're
// closing RSVPs early at this count. There's no live submission count
// available from Web3Forms without a paid plan, so update CURRENT_RSVP_COUNT
// yourself as new RSVPs come in (check the Web3Forms dashboard). Once it
// reaches RSVP_CAPACITY, the form is replaced with a "capacity reached" note.
export const RSVP_CAPACITY = 130;
export const CURRENT_RSVP_COUNT = 19;
