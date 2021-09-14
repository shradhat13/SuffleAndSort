const loadcards = (() => {
    const data = [{ text:1, class: 'Card1' }, { text:2, class: 'Card2' }, { text:3, class: 'Card3' }, { text:4, class: 'Card2' }, { text:5, class: 'Card3' }, { text:6, class: 'Card4' }, { text: 7, class: 'Card4' },{ text:8, class: 'Card1' }, { text:9, class: 'Card3' }];

const sort = () => {
    data.sort(function (a, b) {
        return a.text - b.text;
    });
    showCards(data);
}
const shuffle = (() => {
  /*   data.sort(() => Math.random() - 0.5); */
  for(let i =data.length-1 ; i>0 ;i--){
    let j = Math.floor( Math.random() * (i + 1) );
    [data[i],data[j]]=[data[j],data[i]];
}
    showCards (data);
  })

function showCards(data) {
    document.getElementById('shuffle').innerHTML = '';
	for(var i = 0; i < data.length; i++)
	{
		var card = document.createElement("div");
		var value = document.createElement("div");
		card.className = "col-md-4 col-sm-4 col-xs-12 square card "+ data[i].class;
		value.className = "value";

		value.innerHTML = data[i].text;
		card.appendChild(value);

		document.getElementById("shuffle").appendChild(card);
	}
}
return {
    shuffle, sort
}
})();
function load()
{
	loadcards.sort();
}
window.onload = load;
