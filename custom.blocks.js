Blockly.Blocks["simulation_block"] = {
  init: function () {
    this.appendValueInput("NAME")
      .setCheck(null)
      .appendField(
        new Blockly.FieldTextInput("Set up Simulation with"),
        "NAME"
      );
    this.appendStatementInput("NAME")
      .setCheck(null)
      .appendField(
        new Blockly.FieldDropdown([
          [
            {
              src: "https://www.gstatic.com/codesite/ph/images/star_on.gif",
              width: 25,
              height: 25,
              alt: "*",
            },
            "OPTIONNAME",
          ],
        ]),
        "NAME"
      )
      .appendField("Speed")
      .appendField(new Blockly.FieldTextInput("2"), "Integer");
    this.appendStatementInput("NAME")
      .setCheck(null)
      .appendField(
        new Blockly.FieldDropdown([
          [
            {
              src: "https://www.gstatic.com/codesite/ph/images/star_on.gif",
              width: 15,
              height: 15,
              alt: "*",
            },
            "OPTIONNAME",
          ],
          [
            {
              src: "https://www.gstatic.com/codesite/ph/images/star_on.gif",
              width: 25,
              height: 25,
              alt: "*",
            },
            "OPTIONNAME",
          ],
        ]),
        "NAME"
      )
      .appendField("Speed")
      .appendField(new Blockly.FieldTextInput("2"), "Integer");
    this.appendStatementInput("NAME")
      .setCheck(null)
      .appendField("Collecting")
      .appendField(
        new Blockly.FieldImage(
          "https://www.gstatic.com/codesite/ph/images/star_on.gif",
          25,
          25,
          { alt: "*", flipRtl: "FALSE" }
        )
      );
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(105);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.JavaScript["simulation_block"] = function (block) {
  var text_name = block.getFieldValue("NAME");
  var value_name = Blockly.JavaScript.valueToCode(
    block,
    "NAME",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  var dropdown_name = block.getFieldValue("NAME");
  var text_integer = block.getFieldValue("Integer");
  var statements_name = Blockly.JavaScript.statementToCode(block, "NAME");
  var dropdown_name = block.getFieldValue("NAME");
  var text_integer = block.getFieldValue("Integer");
  var statements_name = Blockly.JavaScript.statementToCode(block, "NAME");
  var statements_name = Blockly.JavaScript.statementToCode(block, "NAME");
  // TODO: Assemble JavaScript into code variable.
  var code = "hello";
  return code;
};

Blockly.Blocks["last_one"] = {
  init: function () {
    this.appendValueInput("NAME").setCheck(null).appendField("Simulations");
    this.appendValueInput("NAME")
      .setCheck(null)
      .appendField("Donkey")
      .appendField(
        new Blockly.FieldImage(
          "https://cdn.pixabay.com/photo/2014/04/03/00/35/hippo-308772_640.png",
          15,
          15,
          { alt: "*", flipRtl: "FALSE" }
        )
      );
    this.appendValueInput("NAME")
      .setCheck(null)
      .appendField("Collect apples")
      .appendField(
        new Blockly.FieldImage(
          "https://image.shutterstock.com/image-photo/red-apple-isolated-on-white-260nw-1727544364.jpg",
          15,
          15,
          { alt: "*", flipRtl: "FALSE" }
        )
      )
      .appendField(new Blockly.FieldTextInput("0"), "Integer");
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};
Blockly.JavaScript["last_one"] = function (block) {
  var value_name = Blockly.JavaScript.valueToCode(
    block,
    "NAME",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  var value_name = Blockly.JavaScript.valueToCode(
    block,
    "NAME",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  var text_integer = block.getFieldValue("Integer");
  var value_name = Blockly.JavaScript.valueToCode(
    block,
    "NAME",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  // console.log(text_integer);
  var code = `${text_integer}`;
  return code;
};

var toolbox = {
  kind: "categoryToolbox",
  contents: [
    {
      kind: "category",
      name: "Control",
      contents: [
        {
          kind: "block",
          type: "controls_if",
        },
      ],
    },
    {
      kind: "category",
      name: "Math",
      contents: [
        {
          kind: "block",
          type: "logic_compare",
        },
        {
          kind: "block",
          type: "simulation_block",
        },
        {
          kind: "block",
          type: "last_one",
        },
      ],
    },
  ],
};
console.log(toolbox);

var copy_score = 0;
var workspace = Blockly.inject("blocklyDiv", { toolbox: toolbox });
document.querySelector("p").addEventListener("click", () => {
  var code = Blockly.JavaScript.workspaceToCode(workspace);
  try {
    console.log(code);
    copy_score = code;

    if (code == 0) {
      alert("sorry come up with greater than 0 num");
    } else {
      const game_board = document.querySelector("#switch");
      var food = [{ x: 3, y: 15 }];
      var snake_time = 4;
      var flag = 0;
      var score = 0;
      var donkey_el = [];
      var elephant_el = [];
      var comfromtop = 0,
        comfromdown = 0;
      var right_ = 0,
        left_ = 0,
        top_ = 0,
        bottom_ = 0;
      const paint = (curr_time) => {
        setTimeout(() => {
          if (score != code) {
            requestAnimationFrame(paint);
            movedonkey();
            collide_checker();
          }
          // console.log("this is document : ",document.querySelector("#sp").innerText,score);
          document.querySelector("#sp").innerText = score;
          // console.log(requestAnimationFrame(paint));
        }, 1000 - snake_time * 100);
        draw();
      };

      setTimeout(() => {
        window.requestAnimationFrame(paint);
      }, 1000 - snake_time * 100);

      function random_place_generator(values) {
        for (var i = 0; i < values; i++) {
          var obj = {};
          var x_1 = Math.floor(Math.random() * (14 - 2) + 2);
          var y_1 = Math.floor(Math.random() * (14 - 2) + 2);
          obj["x"] = x_1;
          obj["y"] = y_1;
          food.push(obj);
        }
      }
      // console.log(food);
      random_place_generator(code - 1);

      function draw_food() {
        //   const { x, y } = food[0];
        food.forEach((el) => {
          var { x, y } = el;
          // console.log("this is mainx:", mainx, mainy);

          var food_element = document.createElement("div");
          food_element.style.gridColumnStart = x;
          food_element.style.gridRowStart = y;
          food_element.classList.add("food");
          game_board.appendChild(food_element);
        });
      }
      var mainx, mainy;
      var last_el = null;
      function dwaw_donkey() {
        donkey_el.forEach((el, index) => {
          var { x, y } = el;
          var food_element = document.createElement("div");
          if (last_el != null) {
            last_el.style.display = "none";
            // console.log(food_element);
            console.log("         ");
          }
          food_element.style.gridColumnStart = x;
          food_element.style.gridRowStart = y;
          mainx = x;
          mainy = y;
          food_element.classList.add("donkey");
          game_board.appendChild(food_element);
          last_el = food_element;
        });
      }

      function movedonkey() {
        // console.log("move donkey",donkey_el[0],donkey_el);
        var { x, y } = donkey_el[0];
        var obj = {};
        // console.log(x, y);

        if (right_ == 1) {
          x--;
          y--;
        }
        if (top_ == 1) {
          x--;
          y++;
        }
        if (left_ == 1 && y != 16) {
          x++;
          y++;
        } else if (bottom_ == 1) {
          x++;
          y--;
          comfromtop = 1;
          comfromdown = 0;
          comfromtop = 0;
        } else if (x <= 1 || y <= 1 || x >= 15 || y >= 15) {
          // console.log("it's stopped");
        } else if (1 <= y <= 7 && 7 <= x <= 15) {
          y++;
          x--;
        } else if (7 <= y <= 15 && 7 <= x <= 15) {
          x--;
          y--;
        } else if (7 <= y <= 15 && 1 <= x <= 7) {
          x--;
          y--;
        } else if (1 <= y <= 7 && 1 <= x <= 7) {
          x++;
          y--;
        }
        if (x == 1) {
          console.log("left x is touched");
          left_ = 1;

          comfromdown = 1;
          bottom_ = 0;
          top_ = 0;
          right_ = 0;
          return;
        } else if (x == 15) {
          // console.log("right x is touched");
          right_ = 1;
          bottom_ = 0;
          top_ = 0;
          left_ = 0;
          return;
        } else if (y == 1) {
          // console.log("right x is touched");
          bottom_ = 0;
          left_ = 0;
          top_ = 1;
          right_ = 0;
          return;
        } else if (y == 15) {
          // console.log("top right x is touched");
          bottom_ = 1;
          left_ = 0;
          top_ = 0;
          right_ = 0;

          return;
        }
        obj["x"] = x;
        obj["y"] = y;
        // console.log("this is obj : ", obj);
        main = obj;
        donkey_el.pop();
        donkey_el.push(obj);
      }

      var main_1, main_2, main_3, main_4;
      food.forEach((e) => {
        const { x, y } = e;
        main_1 = Math.floor(Math.random() * (14 - 1) + 1);
        main_2 = Math.floor(Math.random() * (14 - 1) + 1);
        main_3 = Math.floor(Math.random() * (14 - 1) + 1);
        main_4 = Math.floor(Math.random() * (14 - 1) + 1);
        while (x == main_1 && y == main_2 && x == main_3 && y == main_4) {
          main_1 = Math.floor(Math.random() * (14 - 1) + 1);
          main_2 = Math.floor(Math.random() * (14 - 1) + 1);
          main_3 = Math.floor(Math.random() * (14 - 1) + 1);
          main_4 = Math.floor(Math.random() * (14 - 1) + 1);
        }
      });
      var obj = {};
      var obj1 = {};
      obj["x"] = main_1;
      obj["y"] = main_2;
      obj1["x"] = main_3;
      obj1["y"] = main_4;
      donkey_el.push(obj);
      elephant_el.push(obj1);

      var frontend = [];
      function collide_checker() {
        var backend = [];
        // console.log(mainx, mainy);
        var arr = food;
        var length = arr.length - 1;
        // console.log(arr);
        var index_of_el;
        food.forEach((e, index) => {
          var newobj = {};
          if (mainx == e.x && mainy == e.y) {
            newobj["x"] = e.x;
            newobj["y"] = e.y;
            // console.log("collide");
            score += 1;
            // console.log("this is score"+score);

            index_of_el = index;
            var food_element = document.createElement("div");
            food_element.style.gridColumnStart = e.x;
            food_element.style.gridRowStart = e.y;
            food_element.classList.add("food_1");
            game_board.appendChild(food_element);
            // console.log(index_of_el);
            arr.splice(index, 1);
          }
        });
        // console.log(food);
        // console.log(arr);
      }

      function draw() {
        draw_food();
        dwaw_donkey();
      }
    }
  } catch (err) {
    alert(err);
  }
});
