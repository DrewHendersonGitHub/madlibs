$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    const placeInput = $("input#place").val();
    const characterInput= $("input#character").val();
    const adjectiveInput = $("input#adjective").val();
    const verbInput = $("input#verb").val();
    const nounInput = $("input#noun").val();
    const bodyPartInput = $("input#body-part").val();
    const pluralNounInput = $("input#plural-noun").val();
    const foodInput = $("input#food").val();

    $(".noun").text(nounInput);
    $(".place").text(placeInput);
    $(".character").text(characterInput);
    $(".food").text(foodInput);
    $(".adjective").text(adjectiveInput);
    $(".body-part").text(bodyPartInput);
    $(".plural-noun").text(pluralNounInput);
    $(".verb").text(verbInput);

    $("#story").show();
  });
});