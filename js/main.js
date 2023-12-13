function totalClick(click) {

    let totalClicks = document.getElementById('totalClicks');
    const sumvalue = (totalClicks.innerHTML) + click;
    console.log(sumvalue + click);
    totalClicks.innerHTML = sumvalue;
}