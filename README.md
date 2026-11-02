# Medicine on Click

A buildless, three-page client presentation prototype in HTML5, CSS3 and vanilla JavaScript.

## Open the prototype

Open `index.html` directly in a browser, or use VS Code Live Server from this folder. No installation or build is needed. For consistent cart persistence across pages, use Live Server; browser storage behavior for `file://` pages varies by browser.

## Files

- `index.html`: homepage, categories, featured products, healthcare and offers.
- `medicines.html`: 24-product searchable catalogue, category/brand/price/stock filters and sorting.
- `business.html`: wholesale comparison cards and business registration preview.
- `style.css`: shared branding, layouts, responsive breakpoints and reduced-motion support.
- `script.js`: shared sample product data, cart, filters, dialogs and form preview.
- `assets/`: 24 original SVG packaging illustrations and a locally saved healthcare photo.

## Presentation notes

Cart contents persist in localStorage when browser storage is available. The cart supports quantity changes, removal, subtotals and sample savings. Product prices, inventory, offers and wholesale rates are illustrative. Alternative mappings are mock data, explicitly require pharmacist verification, and are not clinical recommendations.

Business registration uses native validation plus document type, size and count validation. Document selection is local only; files and form details are never uploaded, stored or sent. Verification, sign-in, ordering and checkout are not live services.

Typography uses Google Fonts (DM Sans and Manrope); icons use the version-pinned Lucide CDN. Internet access is needed for these enhancements. System font fallbacks preserve the layout offline. All product and hero imagery is local. The hero photo is sourced from Unsplash (photo-1576091160399-112ba8d25d1d).

Edit `PRODUCTS` and `MOCK_ALTERNATIVES` in `script.js` to change the demo catalogue. Theme colors are defined at the start of `style.css`.
