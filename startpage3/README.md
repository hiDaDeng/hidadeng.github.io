# Longing For The Woods

A fantasy themed start page with inspiration from the metal band Wuthering Heights.

![showcase](pics/showcase.png)

# Customization

My code is probably a mess, but it should be pretty straight forward to edit.

## Language

The program *should* automatically detect if you're using Danish, Spanish or English (default) and use month names accordingly.

## Images

Add images to the /pics/ folders (or change the directory). Then in themePicker.js add the file path to each pape (line 7-15).

## Quotes

In themePicker.js on line 91 and forward. Simply add your authors/whatever to the array authors_id and then in the switch statement add quotes for each author (these are put into a map). There is also a secondary map idToSong, but this can be removed if not needed. Just remember to also remove all the calls to the map and change the syntax on line 265 as well as delete line 258. 

# Credits

I don't own any of the images nor fonts, obviously.
