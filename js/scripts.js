$(document).ready(function () {
  $("#add").click(function () {
    $("form").append('<input type="text" name="list" class="list" />');
  });

  $("#submit").click(function () {
    $("form").submit(function (event) {
      event.preventDefault();
      $("form").hide();
      const item1 = $("#item1").val();
      const item2 = $("#item2").val();
      const item3 = $("#item3").val();
      const item4 = $("#item4").val();
      const item5 = $("#item5").val();
      const item6 = $("#item6").val();
      const list = [item1, item2, item3, item4, item5, item6];
      const alphList = list.sort();
      let upperAlphList = [];

      alphList.forEach(function (element) {
        if (element !== "") {
          upperAlphList.push(element.toUpperCase());
        }
      });

      upperAlphList.forEach(function (item) {
        $("ul").append("<li>" + item + "</li>");
      });
    });
  });
});
