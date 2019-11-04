$(function() {
        "use strict";

        $(".form_counter").on("keyup", function(event) {
          //regex dont accept text
          $(this).val(
            $(this)
              .val()
              .replace(/[^\d].+/, "")
          );
          if ($(this).val() >= 100) {
            $(this).val("0");
          }
          if (event.which < 48 || event.which > 57) {
            event.preventDefault();
          }
        });

        $("#btnResult").on("click", function() {
          const a = "";
          selectAccount(a);
          calculationProduct(selectAccount(a));
          if (
            calculationProduct(selectAccount(a)) === undefined ||
            isNaN(calculationProduct(selectAccount(a))) ||
            calculationProduct(selectAccount(a)) === 0
          ) {
            $(".resultStatus").text("RM 0.00 ");
          } else {
            $(".resultStatus").text(
              "RM " +
                parseFloat(calculationProduct(selectAccount(a))).toFixed(2)
            );
          }
        });

        //Account function define
        function selectAccount(a) {
          if (
            $("#account_audience").val() === "associate" ||
            $("#account_audience").val() === "platinum" ||
            $("#account_audience").val() === "diamond"
          ) {
            return (a = $("#account_audience").val());
          } else {
            return false;
          }
        }

        //Calculation Product

        function discountThreeforTwoDeals(arrayDeal) {
          let array = arrayDeal;
          let TotalArray = array.filter(function(el, index) {
            return index % 3 === 2;
          });
          return TotalArray.length;
        }

        function discountFiveforFourDeals(arrayDeal) {
          let array = arrayDeal;
          let TotalArray = array.filter(function(el, index) {
            return index % 5 === 4;
          });
          return TotalArray.length;
        }

        function productCheckingDeal(
          perPriceProduct,
          valueTotalCounter,
          nameAccount,
          stateName
        ) {
          let santaCruzArray = Array.from({ length: valueTotalCounter }).fill(
            perPriceProduct
          );
          let discountAvailabelAssociate = parseFloat(5 / 100).toFixed(2);
          let discountAvailabelDiamond = parseFloat(20 / 100).toFixed(2);
          let discountAvailabelPlatinum = parseFloat(15 / 100).toFixed(2);
          let productPricing = 0;
          let totalProductPricing = 0;
          if (nameAccount === "associate") {
            // Check if got deal for santaCruz
            if (stateName === "SantaCruz") {
              if ($("#santaCruz_totalCounter").val() >= 3) {
                discountThreeforTwoDeals(santaCruzArray);
                let santaArray = discountThreeforTwoDeals(santaCruzArray);
                productPricing = santaCruzArray.length - santaArray;
                productPricing = perPriceProduct * productPricing;
                totalProductPricing = parseFloat(productPricing).toFixed(2);
              } else {
                productPricing =
                  parseFloat(perPriceProduct * valueTotalCounter).toFixed(2) *
                  discountAvailabelAssociate;
                totalProductPricing =
                  parseFloat(perPriceProduct * valueTotalCounter).toFixed(2) -
                  productPricing;
              }
              return parseFloat(totalProductPricing).toFixed(2);
            }
          }
          if (nameAccount === "diamond") {
            // Check if got deal for Ironhide Cartridge
            if (stateName === "IronCartridge") {
              if ($("#ironhideCartridge_totalCounter").val() >= 3) {
                discountThreeforTwoDeals(santaCruzArray);
                let santaArray = discountThreeforTwoDeals(santaCruzArray);
                productPricing = santaCruzArray.length - santaArray;
                productPricing = perPriceProduct * productPricing;
                totalProductPricing = parseFloat(productPricing).toFixed(2);
              } else {
                productPricing =
                  parseFloat(perPriceProduct * valueTotalCounter).toFixed(2) *
                  discountAvailabelDiamond;
                totalProductPricing =
                  parseFloat(perPriceProduct * valueTotalCounter).toFixed(2) -
                  productPricing;
              }
              return parseFloat(totalProductPricing).toFixed(2);
            }
          }
          if (nameAccount === "platinum") {
            // Check if got deal for Ironhide Cartridge
            if (stateName === "IronCartridge") {
              if ($("#ironhideCartridge_totalCounter").val() >= 3) {
                discountFiveforFourDeals(santaCruzArray);
                let santaArray = discountFiveforFourDeals(santaCruzArray);
                productPricing = santaCruzArray.length - santaArray;
                productPricing = perPriceProduct * productPricing;
                totalProductPricing = parseFloat(productPricing).toFixed(2);
              } else {
                productPricing =
                  parseFloat(perPriceProduct * valueTotalCounter).toFixed(2) *
                  discountAvailabelPlatinum;
                totalProductPricing =
                  parseFloat(perPriceProduct * valueTotalCounter).toFixed(2) -
                  productPricing;
              }
              return parseFloat(totalProductPricing).toFixed(2);
            }
          }
        }

        function productCheckingNoDeal(
          perPriceProduct,
          valueTotalCounter,
          nameAccount,
          stateName
        ) {
          let discountAvailabelAssociate = parseFloat(5 / 100).toFixed(2);
          let discountAvailabelDiamond = parseFloat(20 / 100).toFixed(2);
          let discountAvailabelPlatinum = parseFloat(15 / 100).toFixed(2);
          let productPricing = 0;
          let totalProductPricing = 0;

          //Associate
          if (nameAccount === "associate") {
            if (stateName === "FoxFloat") {
              if ($("#foxfloat_totalCounter").val() > 0) {
                productPricing =
                  parseFloat(perPriceProduct * valueTotalCounter).toFixed(2) *
                  discountAvailabelAssociate;
                totalProductPricing =
                  parseFloat(perPriceProduct * valueTotalCounter).toFixed(2) -
                  productPricing;
              } else {
                totalProductPricing = 0.0;
              }
              return totalProductPricing;
            }
            if (stateName === "IronFloat") {
              if ($("#ironhide_totalCounter").val() > 0) {
                productPricing =
                  parseFloat(perPriceProduct * valueTotalCounter).toFixed(2) *
                  discountAvailabelAssociate;
                totalProductPricing =
                  parseFloat(perPriceProduct * valueTotalCounter).toFixed(2) -
                  productPricing;
              } else {
                totalProductPricing = 0.0;
              }
              return totalProductPricing;
            }
            if (stateName === "Kone") {
              if ($("#kone_totalCounter").val() > 0) {
                productPricing =
                  parseFloat(perPriceProduct * valueTotalCounter).toFixed(2) *
                  discountAvailabelAssociate;
                totalProductPricing =
                  parseFloat(perPriceProduct * valueTotalCounter).toFixed(2) -
                  productPricing;
              } else {
                totalProductPricing = 0.0;
              }
              return totalProductPricing;
            }
            if (stateName === "IronCartridge") {
              if ($("#ironhideCartridge_totalCounter").val() > 0) {
                productPricing =
                  parseFloat(perPriceProduct * valueTotalCounter).toFixed(2) *
                  discountAvailabelAssociate;
                totalProductPricing =
                  parseFloat(perPriceProduct * valueTotalCounter).toFixed(2) -
                  productPricing;
              } else {
                totalProductPricing = 0.0;
              }
              return totalProductPricing;
            }
            if (stateName === "Shimano") {
              if ($("#shimano_totalCounter").val() > 0) {
                productPricing =
                  parseFloat(perPriceProduct * valueTotalCounter).toFixed(2) *
                  discountAvailabelAssociate;
                totalProductPricing =
                  parseFloat(perPriceProduct * valueTotalCounter).toFixed(2) -
                  productPricing;
              } else {
                totalProductPricing = 0.0;
              }
              return totalProductPricing;
            }
          }

          //Platinum
          if (nameAccount === "platinum") {
            if (stateName === "SantaCruz") {
              if ($("#santaCruz_totalCounter").val() > 0) {
                productPricing =
                  parseFloat(perPriceProduct * valueTotalCounter).toFixed(2) *
                  discountAvailabelPlatinum;
                totalProductPricing =
                  parseFloat(perPriceProduct * valueTotalCounter).toFixed(2) -
                  productPricing;
              } else {
                totalProductPricing = 0.0;
              }
              return totalProductPricing;
            }

            if (stateName === "Kone") {
              if ($("#kone_totalCounter").val() >= 5) {
                let konePricing = 2888.99;
                totalProductPricing = parseFloat(
                  konePricing * valueTotalCounter
                ).toFixed(2);
              } else {
                productPricing =
                  parseFloat(perPriceProduct * valueTotalCounter).toFixed(2) *
                  discountAvailabelPlatinum;
                totalProductPricing =
                  parseFloat(perPriceProduct * valueTotalCounter).toFixed(2) -
                  productPricing;
              }
              return totalProductPricing;
            }

            if (stateName === "IronFloat") {
              if ($("#ironhide_totalCounter").val() > 0) {
                let ironPricing = 3000.0;
                totalProductPricing = parseFloat(
                  ironPricing * valueTotalCounter
                ).toFixed(2);
              } else {
                totalProductPricing = 0.0;
              }
              return totalProductPricing;
            }

            if (stateName === "Shimano") {
              if ($("#shimano_totalCounter").val() > 0) {
                productPricing =
                  parseFloat(perPriceProduct * valueTotalCounter).toFixed(2) *
                  discountAvailabelPlatinum;
                totalProductPricing =
                  parseFloat(perPriceProduct * valueTotalCounter).toFixed(2) -
                  productPricing;
              } else {
                totalProductPricing = 0.0;
              }
              return totalProductPricing;
            }

            if (stateName === "FoxFloat") {
              if ($("#foxfloat_totalCounter").val() > 0) {
                productPricing =
                  parseFloat(perPriceProduct * valueTotalCounter).toFixed(2) *
                  discountAvailabelPlatinum;
                totalProductPricing =
                  parseFloat(perPriceProduct * valueTotalCounter).toFixed(2) -
                  productPricing;
              } else {
                totalProductPricing = 0.0;
              }
              return totalProductPricing;
            }
          }

          //Diamond
          if (nameAccount === "diamond") {
            if (stateName === "SantaCruz") {
              if ($("#santaCruz_totalCounter").val() > 0) {
                productPricing =
                  parseFloat(perPriceProduct * valueTotalCounter).toFixed(2) *
                  discountAvailabelDiamond;
                totalProductPricing =
                  parseFloat(perPriceProduct * valueTotalCounter).toFixed(2) -
                  productPricing;
              } else {
                totalProductPricing = 0.0;
              }
              return totalProductPricing;
            }

            if (stateName === "Kone") {
              if ($("#kone_totalCounter").val() >= 3) {
                let konePricing = 2588.99;
                totalProductPricing = parseFloat(
                  konePricing * valueTotalCounter
                ).toFixed(2);
              } else {
                productPricing =
                  parseFloat(perPriceProduct * valueTotalCounter).toFixed(2) *
                  discountAvailabelDiamond;
                totalProductPricing =
                  parseFloat(perPriceProduct * valueTotalCounter).toFixed(2) -
                  productPricing;
              }
              return totalProductPricing;
            }

            if (stateName === "IronFloat") {
              if ($("#ironhide_totalCounter").val() > 0) {
                let ironPricing = 2500.0;
                totalProductPricing = parseFloat(
                  ironPricing * valueTotalCounter
                ).toFixed(2);
              } else {
                totalProductPricing = 0.0;
              }
              return totalProductPricing;
            }

            if (stateName === "Shimano") {
              if ($("#shimano_totalCounter").val() > 0) {
                productPricing =
                  parseFloat(perPriceProduct * valueTotalCounter).toFixed(2) *
                  discountAvailabelDiamond;
                totalProductPricing =
                  parseFloat(perPriceProduct * valueTotalCounter).toFixed(2) -
                  productPricing;
              } else {
                totalProductPricing = 0.0;
              }
              return totalProductPricing;
            }

            if (stateName === "FoxFloat") {
              if ($("#foxfloat_totalCounter").val() > 0) {
                productPricing =
                  parseFloat(perPriceProduct * valueTotalCounter).toFixed(2) *
                  discountAvailabelDiamond;
                totalProductPricing =
                  parseFloat(perPriceProduct * valueTotalCounter).toFixed(2) -
                  productPricing;
              } else {
                totalProductPricing = 0.0;
              }
              return totalProductPricing;
            }
          }
        }

        function calculationProduct(nameAccount) {
          //Price Kone Product
          let perPricekone = 3488.99;
          let perPriceSantaCruz = 185.5;
          let perPriceironHide = 3299.99;
          let perPriceFoxFloat = 66;
          let perPriceironCartridge = 529.99;
          let perPriceShimano = 67.6;
          let totalPriceKone = 0;
          let totalPriceSantaCruz = 0;
          let totalPriceFoxFloat = 0;
          let totalPriceIronFloat = 0;
          let totalPriceironCartridge = 0;
          let totalPriceShimano = 0;
          let totalProduct = 0;

          // For Associate Account
          if (nameAccount === "associate") {
            // For SantaCruz Product
            totalPriceSantaCruz = productCheckingDeal(
              perPriceSantaCruz,
              $("#santaCruz_totalCounter").val(),
              nameAccount,
              "SantaCruz"
            );
            // For FoxFloat Product
            totalPriceFoxFloat = productCheckingNoDeal(
              perPriceFoxFloat,
              $("#foxfloat_totalCounter").val(),
              nameAccount,
              "FoxFloat"
            );
            //For Ironhide Product
            totalPriceIronFloat = productCheckingNoDeal(
              perPriceironHide,
              $("#ironhide_totalCounter").val(),
              nameAccount,
              "IronFloat"
            );

            //For Kone Product
            totalPriceKone = productCheckingNoDeal(
              perPricekone,
              $("#kone_totalCounter").val(),
              nameAccount,
              "Kone"
            );
            //For ironCartridge Product
            totalPriceironCartridge = productCheckingNoDeal(
              perPriceironCartridge,
              $("#ironhideCartridge_totalCounter").val(),
              nameAccount,
              "IronCartridge"
            );
            //For Shimano Product
            totalPriceShimano = productCheckingNoDeal(
              perPriceShimano,
              $("#shimano_totalCounter").val(),
              nameAccount,
              "Shimano"
            );

            totalProduct =
              Number(totalPriceSantaCruz) +
              Number(totalPriceFoxFloat) +
              Number(totalPriceIronFloat) +
              Number(totalPriceKone) +
              Number(totalPriceironCartridge) +
              Number(totalPriceShimano);
            return totalProduct;
          }
          // For Platinum Account
          if (nameAccount === "platinum") {
            //For ironCartridge Product
            totalPriceironCartridge = productCheckingDeal(
              perPriceironCartridge,
              $("#ironhideCartridge_totalCounter").val(),
              nameAccount,
              "IronCartridge"
            );
            // For SantaCruz Product
            totalPriceSantaCruz = productCheckingNoDeal(
              perPriceSantaCruz,
              $("#santaCruz_totalCounter").val(),
              nameAccount,
              "SantaCruz"
            );
            //For Kone Product
            totalPriceKone = productCheckingNoDeal(
              perPricekone,
              $("#kone_totalCounter").val(),
              nameAccount,
              "Kone"
            );
            //For Ironhide Product
            totalPriceIronFloat = productCheckingNoDeal(
              perPriceironHide,
              $("#ironhide_totalCounter").val(),
              nameAccount,
              "IronFloat"
            );
            //For Shimano Product
            totalPriceShimano = productCheckingNoDeal(
              perPriceShimano,
              $("#shimano_totalCounter").val(),
              nameAccount,
              "Shimano"
            );
            // For FoxFloat Product
            totalPriceFoxFloat = productCheckingNoDeal(
              perPriceFoxFloat,
              $("#foxfloat_totalCounter").val(),
              nameAccount,
              "FoxFloat"
            );

            totalProduct =
              Number(totalPriceironCartridge) +
              Number(totalPriceSantaCruz) +
              Number(totalPriceKone) +
              Number(totalPriceIronFloat) +
              Number(totalPriceShimano) +
              Number(totalPriceFoxFloat);
            return totalProduct;
          }
          // For Diamond Account
          if (nameAccount === "diamond") {
            //For ironCartridge Product
            totalPriceironCartridge = productCheckingDeal(
              perPriceironCartridge,
              $("#ironhideCartridge_totalCounter").val(),
              nameAccount,
              "IronCartridge"
            );
            // For SantaCruz Product
            totalPriceSantaCruz = productCheckingNoDeal(
              perPriceSantaCruz,
              $("#santaCruz_totalCounter").val(),
              nameAccount,
              "SantaCruz"
            );
            //For Kone Product
            totalPriceKone = productCheckingNoDeal(
              perPricekone,
              $("#kone_totalCounter").val(),
              nameAccount,
              "Kone"
            );
            //For Ironhide Product
            totalPriceIronFloat = productCheckingNoDeal(
              perPriceironHide,
              $("#ironhide_totalCounter").val(),
              nameAccount,
              "IronFloat"
            );
            //For Shimano Product
            totalPriceShimano = productCheckingNoDeal(
              perPriceShimano,
              $("#shimano_totalCounter").val(),
              nameAccount,
              "Shimano"
            );
            // For FoxFloat Product
            totalPriceFoxFloat = productCheckingNoDeal(
              perPriceFoxFloat,
              $("#foxfloat_totalCounter").val(),
              nameAccount,
              "FoxFloat"
            );

            totalProduct =
              Number(totalPriceironCartridge) +
              Number(totalPriceSantaCruz) +
              Number(totalPriceKone) +
              Number(totalPriceIronFloat) +
              Number(totalPriceShimano) +
              Number(totalPriceFoxFloat);
            return totalProduct;
          }
        }
      });