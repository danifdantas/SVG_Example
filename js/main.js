(() => {
  const topEl = document.querySelector("#beer1");
  //define a waypoint and run some animation
  var waypoint = new Waypoint({
    element: document.querySelector("#beer2").querySelector(".svg-graphic"),
    handler: function(direction) {
      console.log("scrolled to element!", this.element);
      runAnimation(this.element, ["lGlass", "cGlass", "rGlass"]);
    },
    offset: 200
  });

  var waypoint = new Waypoint({
    element: document.querySelector("#beer3").querySelector(".svg-graphic"),
    handler: function(direction) {
      console.log("scrolled to element Barrel!", this.element);
      runAnimation(this.element, ["lBarrel", "cBarrel", "rBarrel"]);
    },
    offset: 100
  });

  function runAnimation(parent, elements) {
    //debugger;
    console.log(parent, elements);
    // get the svg ref from parent
    innerSVG = parent.contentDocument; // svg inside of the object tag

    let animProps = {};

    switch (parent.id) {
      case "bottle":
        animProps = {
          scaleX: 1.5,
          scaleY: 1.5,
          rotation: 360,
          transformOrigin: "50% 50%"
        };
        break;

      case "glasses":
        animProps = { scaleX: 1.5, scaleY: 1.5 };
        break;
      case "barrels":
        animProps = { rotation: 360 };
        break;

      default:
        //do nothing
        break;
    }

    // run an animation with Greensock
    elements.forEach(el => {
      let target = innerSVG.querySelector(`#${el}`);
      TweenMax.to(target, 0.6, animProps);
    });
  }

  function getData() {
    // run a fetch call to the DB and get the data that goes with this graphic
  }

  //Event
  topEl.addEventListener("mouseover", function() {
    runAnimation(this.querySelector(".svg-graphic"), ["lStar", "rStar"]);
  });
  topEl.addEventListener("click", getData);
})();
