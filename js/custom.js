$(".blog-list-nav-item").click(function () {
  $(".blog-list-nav-item").each(function (index, el) {
    $(el).removeClass("active");
  });

  $(this).addClass("active");
});

$(".pagination-item").click(function () {
  $(".pagination-item").each(function (index, el) {
    $(el).removeClass("active");
  });

  $(this).addClass("active");
});

$(".pagination-item--previous").click(function () {
  var activePaginationText = $(".pagination-item.active").text();

  // remove active item
  $(".pagination-item").each(function (index, el) {
    $(el).removeClass("active");
  });

  var paginationItems = $(".pagination-item");

  if (parseInt(activePaginationText) !== 1) {
    $(paginationItems[parseInt(activePaginationText) - 2]).addClass("active");
  } else {
    $(paginationItems[0]).addClass("active");
  }
});

$(".pagination-item--next").click(function () {
  var activePaginationText = $(".pagination-item.active").text();

  // remove active item
  $(".pagination-item").each(function (index, el) {
    $(el).removeClass("active");
  });

  var paginationItems = $(".pagination-item");

  var end = paginationItems.length;
  if (parseInt(activePaginationText) !== end) {
    $(paginationItems[parseInt(activePaginationText)]).addClass("active");
  } else {
    $(paginationItems[end - 1]).addClass("active");
  }
});
