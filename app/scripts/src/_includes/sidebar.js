$(document).ready(function() {
  $(".dropdown-item").click(function() { 
    var layoutsize = $(this).data("layout-size");
    
    switch (layoutsize) {
      case "medium":
        $('.list').attr('class','list medium');
        break;
      case "condensed":
        $('.list').attr('class','list small');
        break;
      default:
        $('.list').attr('class','list');
        break;
    }
  });
});
