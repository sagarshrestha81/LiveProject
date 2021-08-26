

const calculateAll = (props) => {
  const totalAmount = $(".total-amount").val();
  const profitCalculateIn = $("input[name=profit-calculate]:checked").val();
  if (totalAmount) {
    $(".total-error").text("");
    if (profitCalculateIn === "amount") {
      const amountValue = $(".amount-value").val();
      const percentageValue = (amountValue / totalAmount) * 100;
      $(".percentage-value").val(percentageValue);
      $(".amount-value").prop("disabled", false);
      $(".percentage-value").prop("disabled", true);
    } else {
      const percentageValue = $(".percentage-value").val();
      const amountValue = (totalAmount * percentageValue) / 100;
      $(".amount-value").val(amountValue);
      $(".amount-value").prop("disabled", true);
      $(".percentage-value").prop("disabled", false);
    }
  } else {
    $(".total-error").text("Please enter your amount");
  }
};
const calculateOdds = () => {
  const teamOneOdds = parseFloat($(".team-one-odds").val());
  const teamOneStakeAmount =parseFloat($(".team-one-stake-amount").val());
  const amountValue = parseFloat($(".amount-value").val());
  const totalAmount = parseFloat($(".total-amount").val());
  const teamOneWinningAmount = teamOneOdds * teamOneStakeAmount;
  var teamTempAmount = teamOneWinningAmount - teamOneStakeAmount;
  if(teamOneStakeAmount && teamOneOdds){
   if (teamOneWinningAmount > totalAmount) {
      $(".total-betting-error").text("Amount is not sufficent for betting");
    } else {
   
      $(".total-betting-error").text("");
      
      if (amountValue) {
        teamTempAmount = teamTempAmount - amountValue;
      }
      const teamTwoOdds=teamOneWinningAmount/teamTempAmount;
      const teamTwoStakeAmount=teamTempAmount;
      const teamTwoWinningAmount=teamTwoOdds*teamTwoStakeAmount;
      $('.team-two-odds').val(teamTwoOdds.toFixed(2));
      $('.team-two-stake-amount').val(teamTwoStakeAmount.toFixed(2));
      $('.team-two-winning-amount').val(teamTwoWinningAmount.toFixed(2));
      $(".team-one-winning-amount").val(teamOneWinningAmount.toFixed(2));
      if(teamOneWinningAmount && amountValue){
         $('.total-amount-result').text((teamOneWinningAmount-amountValue).toFixed(2));
         console.log(amountValue)
         console.log(teamOneWinningAmount)
         $('.profit-amount').text(amountValue.toFixed(2));
         $('.grand-total-amount').text((teamOneWinningAmount).toFixed(2));
      }
     
    }
    if ((teamOneOdds < 1.001 || teamOneStakeAmount < 1.001 || teamOneStakeAmount < 1.001 || teamTwoOdds < 1.001 || teamTwoStakeAmount < 1.001 || teamTwoStakeAmount < 1.001) && teamOneStakeAmount) {
     $(".total-betting-error").text("Can't able to win with this Team 1 Amount");
   } else {
  
     $(".total-betting-error").text("");
     $('.summary-section').removeClass('d-none');
     
   }
  }
  


};
const profitCalculate = (value) => {
  calculateAll();
};

$(document).on("keyup", ".total-amount", function () {
  const totalAmount = $(".total-amount").val();
  if (totalAmount) {
    $(".total-error").text("");
    calculateAll();
  } else {
    $(".total-error").text("Please enter your amount");
  }
});
$(document).on("keyup", ".amount-value", function () {
  calculateAll();
});
$(document).on("keyup", ".percentage-value", function () {
  calculateAll();
});
$(document).on("keyup", ".team-one-odds", function () {
  calculateOdds();
});
$(document).on("keyup", ".team-one-stake-amount", function () {
  calculateOdds();
});
