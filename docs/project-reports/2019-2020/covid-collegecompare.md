# College comparison coronavirus coverage

## Graphs and their tools

### timeline

- serpentine timeline from amcharts
- https://www.amcharts.com/demos/serpentine-timeline/
- ask Andrew Kan!
- I mostly changed the code that was provided

  - main changes/hurdles:

    - added flag bullets, and added an on-click event to direct them to the news source

    - making the json file into the right format (one for the schools and one for their events)

    - making the chart mobile friendly (look at the responsive stuff at the bottom)

    - filtering the dropdowns by school/event

      - this was done using the changeTimeline function at the very bottom

        - this would reupdate the variable holding all the json data and call the graph making function again

    - the cool dropdowns were made using a css package called chosen which was really easy and simple to use

### lollipop chart

- ask Kelly Chen!

### racer chart

- ask Radhika Ahuja!
