import data from "../json/events.json" assert { type: "json" };

// Get the value of "id" in "https://sheffieldai.github.io/events.html?id=some_value"
const params = new Proxy(new URLSearchParams(window.location.search), {
  get: (searchParams, prop) => searchParams.get(prop),
});

// Search the json file to find the element by id
var element = data.content.find(element => element["id"] === params.id);

if (element) {
    $('#event-section').append(
        '<div class="post-image">' +
            '<img class="img-fluid w-100" src="images/events/' + element["image"] + '" alt="Event-' + element["title"] + '">' +
        '</div>' +
        '<div class="post-content">' +
            '<ul class="list-inline">' +
                '<i class="bi bi-calendar"> ' + element["date"] + ' <br/></i>' +
                '<i class="bi bi-clock"> ' + element["time"] + ' <br/></i>' +
                '<i class="bi bi-geo-alt"> ' + element["location"] + ' <br/></i>' +
            '</ul>' +
            '<h3>' + element["title"] + '</h3>' +
            '<p>' + element["body"] + '</p>' +
            '<ul class="post-content-share list-inline">' +
                '<li class="list-inline-item">' +
                    '<a href="#"><i class="tf-ion-social-twitter"></i></a>' +
                '</li>' +
                '<li class="list-inline-item">' +
                    '<a href="#"><i class="tf-ion-social-linkedin"></i></a>' +
                '</li>' +
                '<li class="list-inline-item">' +
                    '<a href="#"><i class="tf-ion-social-facebook"></i></a>' +
                '</li>' +
                '<li class="list-inline-item">' +
                    '<a href="#"><i class="tf-ion-social-skype"></i></a>' +
                '</li>' +
            '</ul>' +
        '</div>'
    );
}
else {
    window.location.href = "../404.html"
}