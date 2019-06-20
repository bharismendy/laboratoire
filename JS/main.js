function parse_the_data(json_data){//parsing data from the json to array of object
  json_data.forEach(function(element){
    let card_temp = new card();
    card_temp.title = element.title;
    card_temp.resume = element.resume;
    card_temp.progress = element.progress;
    card_temp.link = element.link;
    generate_html(card_temp);
  });
}

//first we get the data
fetch('data/project.json')
  .then(response => response.json())
  .then(data => parse_the_data(data.data))
  .catch(err => console.error(err));
