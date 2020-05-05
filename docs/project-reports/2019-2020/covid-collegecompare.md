# College comparison coronavirus coverage

## Graphs and their tools

### Timeline

- **Authors**: Andrew Kan

- **Libraries**:

  - [serpentine timeline from amcharts](https://www.amcharts.com/demos/serpentine-timeline/)

    - [overlap buster, for making events separate on hover](https://www.amcharts.com/docs/v4/tutorials/plugin-overlap-buster/)

    - [flag bullets, for events](https://www.amcharts.com/docs/v4/reference/flagbullet/)

  - [chosen, dropdown css](https://harvesthq.github.io/chosen/)

- **Main Hurdles**:

  - Adding flag bullets, and added an on-click event to direct them to the news source

  - Making the json file into the right format (one for the schools and one for their events)

  - Making the chart mobile friendly (look at the responsive stuff at the bottom)

  - Filtering the dropdowns by school/event

    - this was done using the changeTimeline function at the very bottom

      - this would reupdate the variable holding all the json data and call the graph making function again

  - Having overlapping events move (used overlapBuster plugin)

### Lollipop chart

- **Authors**: Kelly Chen

### Racer chart

- **Authors**: Radhika Ahuja
