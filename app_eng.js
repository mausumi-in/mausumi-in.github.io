const api_url = 'https://mausumi.in/featured_poems.json';

async function getData() {
	const response = await fetch(api_url);

	const data = await response.json();

    let t = "";
    let d = "";
    let dd = "";

    for (i = 1; i <= 2; i++) // data for the top 2 poems (1 to 2)
    {
        t = "title"+i;
		d = "date"+i;
		dd = "desc"+i;
        document.getElementById(t).innerHTML = data.poems[i-1].title;
        document.getElementById(d).innerHTML = data.poems[i-1].date;
        document.getElementById(dd).innerHTML = data.poems[i-1].desc;
    }

    for (i = 3; i <= 6; i++) // data for the top poems (next 4) (3 to 6)
    {
        t = "title"+i;
		d = "date"+i;
        document.getElementById(t).innerHTML = data.poems[i-1].title;
        document.getElementById(d).innerHTML = data.poems[i-1].date;
    }

    for (i = 7; i <= 8; i++) // data for the top poems (next 2) (7 to 8)
    {
        t = "title"+i;
		d = "date"+i;
		dd = "desc"+i;
        document.getElementById(t).innerHTML = data.poems[i-1].title;
        document.getElementById(d).innerHTML = data.poems[i-1].date;
        document.getElementById(dd).innerHTML = data.poems[i-1].desc;
    }

    for (i = 9; i <= 12; i++) // data for the top poems (next 4) (9 to 12)
    {
        t = "title"+i;
		d = "date"+i;
        document.getElementById(t).innerHTML = data.poems[i-1].title;
        document.getElementById(d).innerHTML = data.poems[i-1].date;
    }


	//	console.log(data);

}

getData();
