* Although the exercise is based on a single page, I have tried to think if an element would be used only once or it would be reusable when judging if I should use a ID or a class.

* I have tried to be specific when using the CSS selectors, I tend to favor specificity because it avoids conflicts and favors readability. Even when an element could be just referred by its ID, I prefer giving some context,  like: #container > #myElement.

* Either icons based on @font-face or SVG could be used. Unicode symbols don't work as well but avoid loading an extra asset. For SVG https://feathericons.com/ might work well.

* I have used 'sans-serif' font to avoid increasing loading times, but if I wanted to make it look the same @font-face is the right way.

* Alerts list page is a Vue instance.

* SEE MORE tab and sorting by importance are functional. The alerts list is loaded from a JSON file.

* The JSON loading could have been done with Axios but I prefered to keep dependencies.

* Testing and debug has been carried in a local server in Firefox, but other servers/browsers should work. Code should be cross-browser compatible, vendor prefixes were used where needed.

* For the stats in the dashboard, I have considered its data global ('values' array) for its instance, so each component can use it and react to it in a synchronized way. Changing 'values' will trigger update on each component.
