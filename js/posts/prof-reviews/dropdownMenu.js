export const dropdownMenu = (selection,props) => {
    const {
        options,
        onOptionClicked,
        selectedOption,
        label,
        id
    } = props; // destructure/unpack props into options
    
    // create select elt
    // console.log(selection, props);
    let select = selection.selectAll('select').data([null]);
    select = select
        .enter()
        .append('label')
            .attr('for',label)
            // .style('display','inline')
            .text(label)
        .append('select')
            .attr('id', id)
            .attr('class','dropdown')
        .merge(select)
            .on('change', function(){ // when select changed...
                onOptionClicked(this.value); // executes code in scatter_src
            }); // enter/update

    // populate options data
    const option = select.selectAll('option').data(options); 
    option.enter().append('option')
        .merge(option)
            .attr('value', d => d)
            .property('selected', d => d == selectedOption) // property sets attribute if fn true
            .text(d => d);
    option.exit().remove();
};