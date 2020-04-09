function add_fields(new_val) {
    for (let i = 0; i < statesData['features'].lenghth; i++) {
        statesData['features']['properties'][new_val] = "";
    }
}

add_fields("confirmed_cases");