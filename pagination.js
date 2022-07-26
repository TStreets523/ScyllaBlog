//---------------------------
//Script used for pagination
//---------------------------

//Made this to mimic how a blog records from a DB might be pulled in.
var blogs = [
    {id:1, title:"Blog 1", picId: 1005, text:"1: Lorem ipsum dolor sit, amet consectetur adipisicing elit."},
    {id:2, title:"Blog 2", picId: 1006, text:"2: Lorem ipsum dolor sit, amet consectetur adipisicing elit."},
    {id:3, title:"Blog 3", picId: 1008, text:"3: Lorem ipsum dolor sit, amet consectetur adipisicing elit."},
    {id:4, title:"Blog 4", picId: 1009, text:"4: Lorem ipsum dolor sit, amet consectetur adipisicing elit."},
    {id:5, title:"Blog 5", picId: 1012, text:"5: Lorem ipsum dolor sit, amet consectetur adipisicing elit."},
    {id:6, title:"Blog 6", picId: 1011, text:"6: Lorem ipsum dolor sit, amet consectetur adipisicing elit."},
    {id:7, title:"Blog 7", picId: 1013, text:"7: Lorem ipsum dolor sit, amet consectetur adipisicing elit."},
    {id:8, title:"Blog 8", picId: 1025, text:"8: Lorem ipsum dolor sit, amet consectetur adipisicing elit."},
    {id:9, title:"Blog 9", picId: 1020, text:"9: Lorem ipsum dolor sit, amet consectetur adipisicing elit."},
    {id:10, title:"Blog 10", picId: 1028, text:"10: Lorem ipsum dolor sit, amet consectetur adipisicing elit."},
    {id:11, title:"Blog 11", picId: 1031, text:"11: Lorem ipsum dolor sit, amet consectetur adipisicing elit."},
    {id:12, title:"Blog 12", picId: 1029, text:"12: Lorem ipsum dolor sit, amet consectetur adipisicing elit."},
    {id:13, title:"Blog 13", picId: 1040, text:"13: Lorem ipsum dolor sit, amet consectetur adipisicing elit."},
    {id:14, title:"Blog 14", picId: 1041, text:"14: Lorem ipsum dolor sit, amet consectetur adipisicing elit."},
    {id:15, title:"Blog 15", picId: 1066, text:"15: Lorem ipsum dolor sit, amet consectetur adipisicing elit."},
    {id:16, title:"Blog 16", picId: 1069, text:"16: Lorem ipsum dolor sit, amet consectetur adipisicing elit."},
    {id:17, title:"Blog 17", picId: 1074, text:"17: Lorem ipsum dolor sit, amet consectetur adipisicing elit."},
    {id:18, title:"Blog 18", picId: 1072, text:"18: Lorem ipsum dolor sit, amet consectetur adipisicing elit."},
    {id:19, title:"Blog 19", picId: 1075, text:"19: Lorem ipsum dolor sit, amet consectetur adipisicing elit."},
    {id:20, title:"Blog 20", picId: 1083, text:"20: Lorem ipsum dolor sit, amet consectetur adipisicing elit."},
    {id:21, title:"Blog 21", picId: 1084, text:"21: Lorem ipsum dolor sit, amet consectetur adipisicing elit."},
    {id:22, title:"Blog 22", picId: 1059, text:"22: Lorem ipsum dolor sit, amet consectetur adipisicing elit."},
    {id:23, title:"Blog 23", picId: 1062, text:"23: Lorem ipsum dolor sit, amet consectetur adipisicing elit."},
    {id:24, title:"Blog 24", picId: 1070, text:"24: Lorem ipsum dolor sit, amet consectetur adipisicing elit."}
]

//Variables for configuring the dispay
var itemsPerPage = 6;         
var totalItems   = blogs.length;

//Runs setup on load
window.onload = initSetup();

//The inital setup for generating and building the blogs
function initSetup() {
    //Sets the starting page to 1
    pageIndex = 1;

    //Loads the contents based of the page
    loadPage(pageIndex);

    //Then generates pagination buttons based of the items per page and total items
    generatePagination(itemsPerPage, totalItems);
}

//Based of the index and items per page, the funtion will find the find the range of elements
//and builds HTML based of the position of the blog in the array, should it should be able to
//handle gaps in the ids.
function loadPage(index){
    //Clears the container
    document.getElementById("blogContainer").innerHTML = ""

    //Gets the range (upper and lower bounds)
    var range = getRange(index, itemsPerPage);
    
    //Uses the the range to locate the correct blog to be displayed and builds HTML based off
    //the content found.
    for(var i = range[0]; i <= range[1]; i++){
        //Getting the info from the blogs array based off position
        var picId = blogs[i-1]['picId']
        var title = blogs[i-1]['title']
        var text  = blogs[i-1]['text']
        
        //Building the HTML
        document.getElementById("blogContainer").insertAdjacentHTML("beforeend", '<div class="card"><div class="card_img"><img src="https://picsum.photos/id/'+ picId +'/200/300"></div><div class="card_body"><h2 class="card_title">' + title + '</h2><p>' + text + '</p><a href="article.html" class="read_more">Read article</a></div></div>');
    }
}

//Gets the upper and lower bounds based off
//the given index (gotten from button clicks) and the number of items per page
function getRange(index, items){
    //Some simple math to get the bounds
    var upperbound = index * items;
    var lowerbound = upperbound - items + 1

    //Places the results in an array and returns
    var range = [lowerbound, upperbound];
    return range;
}

//Generates the pagination buttons
function generatePagination(items, totalItems){
    //Gets the number of pages
    //If there is a remainder, round up.
    var buttonsTotal = Math.ceil(totalItems / items);
    
    //Builds the HTML from numbers of buttons needed.
    for(var i = 1; i <= buttonsTotal; i++){
        document.getElementById("pag").insertAdjacentHTML("beforeend", '<a id='+ i +' class="w3-bar-item w3-button w3-hover-black" onclick="loadPage(this.id)">' + i +'</a>')
    }
}