/**
 * FirstIn Widget Configuration
 * Manage your widget script URL and venue ID in one place.
 */
window.FirstInConfig = {
  // Current widget script source
  scriptURL: localStorage.getItem('firstin_scriptURL') || "https://firstin.app/widget.js",

  // Default Venue ID used across all widgets
  venueId: localStorage.getItem('firstin_venueId') || "cmf42piyx000lp9sbpr01wmub",
};
