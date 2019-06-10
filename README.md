# Usage
* Testing and debug has been carried in a local server in Firefox, but other servers/browsers should work. Code should be cross-browser compatible, vendor prefixes were used where needed.

* SEE MORE tab and sorting by importance are functional. The alerts list is loaded from a JSON file. Stats in the dashboard use the same data and update synchronously.

* Dashboard component outputs some instructions on startup, check it out on the command line.


# Architecture
* Dashboard and alerts list sections are Vue instances. The stats (dial, bars and trends) are components. Components are children to the instance they belong to (in this case, `dashboard`). They pass data instance (data) > component (prop). The component is composed of a template. Each component is referenced inside each instance with a custom tag, inside each tag there are is a prop like `:values="values"` to connect instance data to component props. Templates is populated by props or computed values and placed where the custom tags were. There are more comments in the code explaining the  functioning.

* For the stats in the dashboard, I have considered its data global (`values` array) for its instance, so each component can use it and react to it in a synchronized way. Changing `values` will trigger update on each component. `values` is passed to each component as a prop, inside each component for presentation purposes the prop is not mutated but rather we use computed functions that alter the data for display leaving the original data intact. See the instructions to alter the data.

* The JSON loading could have been done with Axios but I preferred to keep low dependencies.


# CSS / Styling / Design
* Although the exercise is based on a single page, I have tried to think if an element would be used only once or it would be reusable when judging if I should use a CSS ID or a class.

* I have tried to be specific when using the CSS selectors, I tend to favor specificity because it avoids conflicts and favors readability. Even when an element could be just referred by its ID, I prefer giving some context,  like: `#container > #myElement`.

* Either icons based on `@font-face` or SVG could be used. Unicode symbols don't work as well but avoid loading an extra asset. For SVG https://feathericons.com/ might work well.

* I have used `sans-serif` font to avoid increasing loading times, but if I wanted to make it look the same `@font-face` is the right way. I could've use Google Fonts for instance and add the stylesheet to `<head>`.

* One rule stated to do the exercise with the minimum amount of graphical elements. I have done the dial with a matte to fake the round shape. A SVG graphic would render better results and be more flexible, but adds a great deal of complexity.
