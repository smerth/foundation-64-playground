# This is a note about a page

Place the note in the style guide folder and write markdown.

This file will be converted to HTML in the build and placed in the `styleguide` folder, you can't import that final HTML content using the Panini helper because you can only pull in content from the `partials` folder during the build...

But you can pull in AJAX content from the build's styleguide folder…  maybe into a popup?



Bad assumption the file is not parsed into a styleguide folder….





But if you look at the way the styleguide is generated it should be possible to write a gulp task to take md files from an md folder and process them into the partials folder (in a sub folder of…) from there they will be available to the panini helper 