class  Bill{
    constructor() {
        this.item = [];
        this.cost = [];
        this.image = [];
      }
    addItem() {
      var item = document.getElementById("item").value;
      var cost = parseFloat(document.getElementById("cost").value);
      var image = document.getElementById("image").value;
        this.item.push(item);
          this.cost.push(cost);
          this.image.push(image);
        this.add();
      }
      add(){
        var i, text;
        var len = this.item.length;
        text = "<table><tr><th colspan='4'> Bill </th></tr>";
        text += "<tr><td> item </td>";
        text += "<td>cost</td>";
        text += "<td>image</td>";
        text += "<td>delete Item</td></tr>";

        for (i=0; i < len; i++) {
          var item = this.item[i];
          var cost = this.cost[i];
          var image = this.image[i];
          var button = '<button type="button" onclick="newList.deleteItem('+ i +');">delete item</button>';
          text += "<tr><td>" + item + "</td>";
          text += "<td>" + "$" + cost + "</td>";
          text += "<td>" + "<img src=" + image + " alt='alternatetext' style='width:100px;height:100px;'>" + "</td>";
          text += "<td>" + button + "</td></tr>";
        }
        var j;
        var sum = 0;
        var len2 =  this.cost.length;
        for (j = 0; j < len2; j++) {
             cost = this.cost[j];
             sum += cost;
        }
        var vat = sum * 0.15;
        var total = sum + vat;
        text += "<tr><td>" + "Sub-total" + "</td>";
        text += "<td colspan='3'>" + "$" + sum + "</td></tr>";
        text += "<tr><td>" + "VAT" + "</td>";
        text += "<td colspan='3'>" + "$" + vat + "</td></tr>";
        text += "<tr><td>" + "Total" + "</td>";
        text += "<td colspan='3'>" + "$" + total + "</td></tr>";

        text += "</table>";
        console.log(text);
        document.getElementById("demo").innerHTML = text;
  }

    eraseAll() {
      var lenitem = this.item.length;
      var lencost = this.cost.length;
      var lenimage = this.image.length;
      this.item.splice(0, lenitem);
      this.cost.splice(0, lencost);
      this.image.splice(0, lenimage);
      console.log(this.item.length);
      this.add();
      }
    deleteItem(x) {
    this.item.splice(x, 1);
    this.cost.splice(x, 1);
    this.image.splice(x, 1);
    console.log(x);
    this.add();
        }
}

var newList = new Bill();
