function html_card(card){//create a card for each project
  let main_div = document.createElement("div");
  main_div.classList.add("card", "mb-4", "box-shadow","col-lg-4");

  let div_title = document.createElement("div");
  div_title.classList.add("card-header");

  let card_title = document.createElement("h4");
  card_title.classList.add("my-0", "font-weight-normal");
  card_title.innerHTML = card.title;

  let div_body = document.createElement("div");
  div_body.classList.add("card-body", "d-flex", "flex-column");
  div_body.innerHTML = card.resume;

  let div_progress_bar_content = document.createElement("div");
  div_progress_bar_content.classList.add("progress", "mb-5", 'mt-5');

  let div_progress_bar = document.createElement("div");
  div_progress_bar.classList.add("progress-bar", "progress-bar-striped", "bg-success", "progress-bar-animated");
  div_progress_bar.setAttribute("role","progressbar");
  div_progress_bar.setAttribute("style","width:"+card.progress+"%");
  div_progress_bar.setAttribute("aria-valuenow",card.progress);
  div_progress_bar.setAttribute("aria-valuemin","0");
  div_progress_bar.setAttribute("aria-valuemax","100");
  div_progress_bar.innerHTML=card.progress+"%";

  let button_card = document.createElement("a");
  button_card.setAttribute("type", "button");
  button_card.setAttribute("href", card.link);
  button_card.classList.add("btn", "btn-lg", "btn-block", "btn-primary", "sticky-bottom", "mt-auto");
  button_card.innerHTML = "voir le projet";

  div_title.appendChild(card_title);
  div_progress_bar_content.appendChild(div_progress_bar);
  div_body.appendChild(div_progress_bar_content);
  div_body.appendChild(button_card);
  main_div.appendChild(div_title);
  main_div.appendChild(div_body);
  return main_div;
}

function generate_html(tab_of_card){
  let container = document.getElementsByClassName("row")[0];
  container.appendChild(html_card(tab_of_card));
}
