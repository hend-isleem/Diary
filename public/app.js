// import React from "react";
// import ReactDOM from "react-dom";
// import List from './list.js';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      date: '',
      text: '',
      data: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.saveData = this.saveData.bind(this);
    this.search = this.search.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  saveData(e) {
    e.preventDefault();
    $.ajax({
      url: "/data",
      type: "post",
      data: this.state,
      success: (res, req) => {
        // if (res.ok) {
        //   console.log("lololololololiiiiiiii ", res);
        // }
        alert('A new record has been add for ' + res.name); // console.log("yeah i sent data", res)
      }
    }); // console.log('post', this.state);
    // $('#form input[type="text"]').val('');

    this.search();
  }

  search() {
    $.ajax({
      url: "/data",
      type: "GET",
      // dataType: "json",
      success: data => {
        console.log("Hurrrrrrray the searched data >> ", data);
        this.setState({
          data: data
        }); // this.datas = data;
        // console.log('hahaha', this.datas[0].name);
      }
    });
  }

  render() {
    // console.log(this.state.data)
    // console.log('//////', this.getData());
    // var datas = this.getData();
    return React.createElement("div", null, React.createElement("h1", null, "MY PAGE"), React.createElement("form", {
      id: "form"
    }, React.createElement("div", {
      id: "bdd"
    }, "My name, please:", React.createElement("input", {
      type: "text",
      name: "name",
      placeholder: "name",
      value: this.state.name,
      onChange: this.handleChange
    }), React.createElement("br", null), React.createElement("br", null), "The date:", React.createElement("input", {
      type: "Date",
      name: "date",
      placeholder: "dd/mm/yy",
      value: this.state.date,
      onChange: this.handleChange
    }), React.createElement("br", null), React.createElement("br", null), "Write whatever you want ! ^_^", React.createElement("br", null), React.createElement("br", null), React.createElement("textarea", {
      type: "text",
      rows: "20",
      cols: "70",
      placeholder: "Just Write",
      name: "text",
      value: this.state.text,
      onChange: this.handleChange
    })), React.createElement("div", {
      id: "sub"
    }, React.createElement("input", {
      type: "submit",
      value: "Submit",
      onClick: this.saveData
    })), React.createElement("br", null), React.createElement("h3", null, "you have ", this.state.data.length, " records!"), React.createElement("h5", null, "you don't have to check or see them just trust us with the number ^_-")));
  }

}

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NsaWVudC9hcHAuanN4Il0sIm5hbWVzIjpbIkFwcCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsInN0YXRlIiwibmFtZSIsImRhdGUiLCJ0ZXh0IiwiZGF0YSIsImhhbmRsZUNoYW5nZSIsImJpbmQiLCJzYXZlRGF0YSIsInNlYXJjaCIsImUiLCJzZXRTdGF0ZSIsInRhcmdldCIsInZhbHVlIiwicHJldmVudERlZmF1bHQiLCIkIiwiYWpheCIsInVybCIsInR5cGUiLCJzdWNjZXNzIiwicmVzIiwicmVxIiwiYWxlcnQiLCJjb25zb2xlIiwibG9nIiwicmVuZGVyIiwibGVuZ3RoIiwiUmVhY3RET00iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFFQSxNQUFNQSxHQUFOLFNBQWtCQyxLQUFLLENBQUNDLFNBQXhCLENBQWtDO0FBQ2hDQyxFQUFBQSxXQUFXLENBQUNDLEtBQUQsRUFBUTtBQUNqQixVQUFNQSxLQUFOO0FBQ0EsU0FBS0MsS0FBTCxHQUFhO0FBQ1hDLE1BQUFBLElBQUksRUFBRSxFQURLO0FBRVhDLE1BQUFBLElBQUksRUFBRSxFQUZLO0FBR1hDLE1BQUFBLElBQUksRUFBRSxFQUhLO0FBSVhDLE1BQUFBLElBQUksRUFBRTtBQUpLLEtBQWI7QUFNQSxTQUFLQyxZQUFMLEdBQW9CLEtBQUtBLFlBQUwsQ0FBa0JDLElBQWxCLENBQXVCLElBQXZCLENBQXBCO0FBQ0EsU0FBS0MsUUFBTCxHQUFnQixLQUFLQSxRQUFMLENBQWNELElBQWQsQ0FBbUIsSUFBbkIsQ0FBaEI7QUFDQSxTQUFLRSxNQUFMLEdBQWMsS0FBS0EsTUFBTCxDQUFZRixJQUFaLENBQWlCLElBQWpCLENBQWQ7QUFFRDs7QUFDREQsRUFBQUEsWUFBWSxDQUFDSSxDQUFELEVBQUk7QUFDZCxTQUFLQyxRQUFMLENBQWM7QUFBQyxPQUFDRCxDQUFDLENBQUNFLE1BQUYsQ0FBU1YsSUFBVixH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cnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbi8vIGltcG9ydCBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tXCI7XHJcbi8vIGltcG9ydCBMaXN0IGZyb20gJy4vbGlzdC5qcyc7XHJcblxyXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBuYW1lOiAnJyxcclxuICAgICAgZGF0ZTogJycsXHJcbiAgICAgIHRleHQ6ICcnLFxyXG4gICAgICBkYXRhOiBbXVxyXG4gICAgfVxyXG4gICAgdGhpcy5oYW5kbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5zYXZlRGF0YSA9IHRoaXMuc2F2ZURhdGEuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuc2VhcmNoID0gdGhpcy5zZWFyY2guYmluZCh0aGlzKTtcclxuXHJcbiAgfVxyXG4gIGhhbmRsZUNoYW5nZShlKSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtbZS50YXJnZXQubmFtZV06IGUudGFyZ2V0LnZhbHVlfSk7XHJcbiAgfVxyXG4gIHNhdmVEYXRhKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICQuYWpheCh7XHJcbiAgICAgIHVybDogXCIvZGF0YVwiLFxyXG4gICAgICB0eXBlOiBcInBvc3RcIixcclxuICAgICAgZGF0YTogdGhpcy5zdGF0ZSxcclxuICAgICAgc3VjY2VzczogKHJlcywgcmVxKSA9PiB7XHJcbiAgICAgICAgLy8gaWYgKHJlcy5vaykge1xyXG4gICAgICAgIC8vICAgY29uc29sZS5sb2coXCJsb2xvbG9sb2xvbG9saWlpaWlpaWkgXCIsIHJlcyk7XHJcblxyXG4gICAgICAgIC8vIH1cclxuICAgICAgICBhbGVydCgnQSBuZXcgcmVjb3JkIGhhcyBiZWVuIGFkZCBmb3IgJyArIHJlcy5uYW1lKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcInllYWggaSBzZW50IGRhdGFcIiwgcmVzKVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gICAgLy8gY29uc29sZS5sb2coJ3Bvc3QnLCB0aGlzLnN0YXRlKTtcclxuICAgIC8vICQoJyNmb3JtIGlucHV0W3R5cGU9XCJ0ZXh0XCJdJykudmFsKCcnKTtcclxuICAgIHRoaXMuc2VhcmNoKCk7XHJcbiAgfVxyXG5cclxuICBzZWFyY2goKSB7XHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICB1cmw6IFwiL2RhdGFcIixcclxuICAgICAgdHlwZTogXCJHRVRcIixcclxuICAgICAgLy8gZGF0YVR5cGU6IFwianNvblwiLFxyXG4gICAgICBzdWNjZXNzOiAoZGF0YSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiSHVycnJycnJyYXkgdGhlIHNlYXJjaGVkIGRhdGEgPj4gXCIsIGRhdGEpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2RhdGE6IGRhdGF9KTtcclxuICAgICAgICAvLyB0aGlzLmRhdGFzID0gZGF0YTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygnaGFoYWhhJywgdGhpcy5kYXRhc1swXS5uYW1lKTtcclxuICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgfVxyXG4gIHJlbmRlcigpIHtcclxuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUuZGF0YSlcclxuICAgIC8vIGNvbnNvbGUubG9nKCcvLy8vLy8nLCB0aGlzLmdldERhdGEoKSk7XHJcbiAgICAvLyB2YXIgZGF0YXMgPSB0aGlzLmdldERhdGEoKTtcclxuICAgIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8aDE+TVkgUEFHRTwvaDE+XHJcbiAgICAgIDxmb3JtIGlkPVwiZm9ybVwiPlxyXG4gICAgICA8ZGl2IGlkPVwiYmRkXCI+XHJcbiAgICAgICAgICBNeSBuYW1lLCBwbGVhc2U6XHJcbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwibmFtZVwiIHBsYWNlaG9sZGVyPVwibmFtZVwiIHZhbHVlPXt0aGlzLnN0YXRlLm5hbWV9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0+PC9pbnB1dD5cclxuICAgICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgICAgPGJyPjwvYnI+XHJcbiAgICAgICAgICBUaGUgZGF0ZTpcclxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwiRGF0ZVwiIG5hbWU9XCJkYXRlXCIgcGxhY2Vob2xkZXI9XCJkZC9tbS95eVwiIHZhbHVlPXt0aGlzLnN0YXRlLmRhdGV9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0+PC9pbnB1dD5cclxuICAgICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgICAgPGJyPjwvYnI+XHJcbiAgICAgICAgICBXcml0ZSB3aGF0ZXZlciB5b3Ugd2FudCAhIF5fXlxyXG4gICAgICAgICAgPGJyPjwvYnI+XHJcbiAgICAgICAgICA8YnI+PC9icj5cclxuICAgICAgICAgIDx0ZXh0YXJlYSB0eXBlPVwidGV4dFwiIHJvd3M9XCIyMFwiIGNvbHM9XCI3MFwiIHBsYWNlaG9sZGVyPVwiSnVzdCBXcml0ZVwiIG5hbWU9XCJ0ZXh0XCIgdmFsdWU9e3RoaXMuc3RhdGUudGV4dH0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfT48L3RleHRhcmVhPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgaWQ9XCJzdWJcIj5cclxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJTdWJtaXRcIiBvbkNsaWNrPXt0aGlzLnNhdmVEYXRhfT48L2lucHV0PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgIDxoMz55b3UgaGF2ZSB7dGhpcy5zdGF0ZS5kYXRhLmxlbmd0aH0gcmVjb3JkcyE8L2gzPlxyXG4gICAgICAgIDxoNT55b3UgZG9uJ3QgaGF2ZSB0byBjaGVjayBvciBzZWUgdGhlbSBqdXN0IHRydXN0IHVzIHdpdGggdGhlIG51bWJlciBeXy08L2g1PlxyXG4gICAgICAgICAgey8qIDxicj48L2JyPlxyXG4gICAgICAgICAgU2hvdyBBTEwgb2YgeW91ciByZWNvcmRzID5fPlxyXG4gICAgICAgICAgPGJ1dHRvbiBpZD1cInNob3dcIiBvbkNsaWNrPXt0aGlzLnNlYXJjaH0+U2hvdzwvYnV0dG9uPiAqL31cclxuICAgICAgPC9mb3JtPlxyXG4gICAgPC9kaXY+KVxyXG4gIH1cclxufVxyXG5SZWFjdERPTS5yZW5kZXIoPEFwcCAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpKTtcclxuIl19