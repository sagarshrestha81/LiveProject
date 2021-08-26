const calculatePoints = (props) => {
  var teamOnePoint = parseInt($(".team-one-points").val());
  const teamOneTotalPoint = parseInt($(".team-one-total-point").val());
  var teamTwoPoint = parseInt($(".team-two-point").val());
  if (teamOnePoint && teamTwoPoint) {
      if(teamOnePoint - teamTwoPoint < 0){
        $(".message-suggest").removeClass("success-msg").addClass("error-msg");
        $(".message-suggest").text("Choose greater or equal point in team 1 !!!");
      }else{

    
    const teamOneLeftPoint = teamOneTotalPoint - teamOnePoint;
    const teamTwoApproxPoint = teamOneLeftPoint;
    const teamTwoTotalPoint = teamTwoPoint + teamTwoApproxPoint;
    const nearPoint = teamTwoTotalPoint + teamOneTotalPoint;

    $(".team-one-left-point").val(teamOneLeftPoint);
    $(".team-two-approx-point").val(teamTwoApproxPoint);
    $(".team-two-total-point").val(teamTwoTotalPoint);
    $(".near-point").text(nearPoint);
    $(".suggested-points").text(nearPoint + 2);

    if (teamOnePoint > 18 && teamTwoPoint < 14) {
      $(".message-suggest").addClass("success-msg").removeClass("error-msg");
      $(".message-suggest").text("");
      $(".message-suggest").text("Prefect time !!!");
    } else if (teamOnePoint > 18 && (teamOnePoint - teamTwoPoint < 5)) {
      $(".message-suggest").removeClass("success-msg").addClass("error-msg");
      $(".message-suggest").text("");
      $(".message-suggest").text("High risk !!!");
    } else if (teamOnePoint > 18 && (teamOnePoint - teamTwoPoint >= 5)) {
      $(".message-suggest").addClass("success-msg").removeClass("error-msg");
      $(".message-suggest").text("Low risk High Gain !!!");
    } else if (teamOnePoint < 16 && (teamOnePoint - teamTwoPoint > 5)) {
      $(".message-suggest").addClass("success-msg").removeClass("error-msg");
      $(".message-suggest").text("Wait !!!");
    } else if (teamOnePoint - teamTwoPoint < 5) {
      $(".message-suggest").removeClass("success-msg").addClass("error-msg");
      $(".message-suggest").text("Choose another !!!");
    }
  }  }
};
$(document).on("keyup", ".team-one-points", function () {
  calculatePoints();
});
$(document).on("keyup", ".team-two-point", function () {
  calculatePoints();
});
