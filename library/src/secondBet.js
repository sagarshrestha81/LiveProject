const calculatePoints = (props) => {
  var teamOnePoint = parseInt($(".team-one-points").val());
  const teamOneTotalPoint = parseInt($(".team-one-total-point").val());
  var teamTwoPoint = parseInt($(".team-two-point").val());
  if (teamOnePoint && teamTwoPoint) {
    if (teamOnePoint - teamTwoPoint < 0) {
      $(".message-suggest").removeClass("success-msg").addClass("error-msg");
      $(".message-suggest").text("Choose greater or equal point in team 1 !!!");
    } else {
      const teamOneLeftPoint = teamOneTotalPoint - teamOnePoint;
      const teamTwoApproxPoint = teamOneLeftPoint;
      const teamTwoTotalPoint = teamTwoPoint + teamTwoApproxPoint;
      const nearPoint = teamTwoTotalPoint + teamOneTotalPoint;

      $(".team-one-left-point").val(teamOneLeftPoint);
      $(".team-two-approx-point").val(teamTwoApproxPoint);
      $(".team-two-total-point").val(teamTwoTotalPoint);
      $(".near-point").text(nearPoint);
      $(".suggested-points").text(nearPoint + 2);
      $(".sure-points").text(nearPoint + 4);
      if (teamOnePoint > 22 && teamOnePoint - teamTwoPoint > 2) {
        $(".message-suggest").addClass("success-msg").removeClass("error-msg");
        $(".message-suggest").text("Low risk High Gain !!!");
      } else if (teamOnePoint > 22 && teamOnePoint - teamTwoPoint < 3) {
        $(".message-suggest").addClass("success-msg").removeClass("error-msg");
        $(".message-suggest").text("High risk High Gain !!!");
      } 
       else if(teamOnePoint > 18 && teamOnePoint - teamTwoPoint > 8) {
        $(".message-suggest").addClass("success-msg").removeClass("error-msg");
        $(".message-suggest").text("Low risk High Gain !!!");
      } else if (teamOnePoint > 18 && (teamOnePoint - teamTwoPoint > 4 && teamOnePoint - teamTwoPoint <= 8)) {
 
        $(".message-suggest").addClass("success-msg").removeClass("error-msg");
        $(".message-suggest").text("Prefect time !!!");
      } else if (teamOnePoint > 18 && teamOnePoint - teamTwoPoint < 5) {
        $(".message-suggest").removeClass("success-msg").addClass("error-msg");
        $(".message-suggest").text("High risk !!!");
      } else if (teamOnePoint > 14 && teamOnePoint - teamTwoPoint > 5) {
        $(".message-suggest").addClass("success-msg").removeClass("error-msg");
        $(".message-suggest").text("Get ready to bet !!!");
    } else if (teamOnePoint <= 14 && teamOnePoint - teamTwoPoint < 5) {
        $(".message-suggest").addClass("success-msg").removeClass("error-msg");
        $(".message-suggest").text("Wait to get right score !!!");
      } else if ((teamOnePoint > 20 && teamTwoPoint > 20)) {
        $(".message-suggest").removeClass("success-msg").addClass("error-msg");
        $(".message-suggest").text("High risk Quit this set !!!");
      
      } else if (teamOnePoint < 10 || teamOnePoint - teamTwoPoint < 5) {
        $(".message-suggest").removeClass("success-msg").addClass("error-msg");
        $(".message-suggest").text("Choose another until suitable time !!!");
      }else{
        $(".message-suggest").removeClass("success-msg").addClass("error-msg");
        $(".message-suggest").text("Keep in watchlist !!!");
      }
    }
  }
};
$(document).on("keyup", ".team-one-points", function () {
  calculatePoints();
});
$(document).on("keyup", ".team-two-point", function () {
  calculatePoints();
});
