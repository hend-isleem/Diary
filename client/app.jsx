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
    }
    this.handleChange = this.handleChange.bind(this);
    this.saveData = this.saveData.bind(this);
    this.search = this.search.bind(this);

  }
  handleChange(e) {
    this.setState({[e.target.name]: e.target.value});
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
        alert('A new record has been add for ' + res.name);
        // console.log("yeah i sent data", res)
      }
    })
    // console.log('post', this.state);
    // $('#form input[type="text"]').val('');
    this.search();
  }

  search() {
    $.ajax({
      url: "/data",
      type: "GET",
      // dataType: "json",
      success: (data) => {
        console.log("Hurrrrrrray the searched data >> ", data);
        this.setState({data: data});
        // this.datas = data;
        // console.log('hahaha', this.datas[0].name);
      }
    })

  }
  render() {
    // console.log(this.state.data)
    // console.log('//////', this.getData());
    // var datas = this.getData();
    return (
    <div>
      <h1>MY PAGE</h1>
      <form id="form">
      <div id="bdd">
          My name, please:
          <input type="text" name="name" placeholder="name" value={this.state.name} onChange={this.handleChange}></input>
          <br></br>
          <br></br>
          The date:
          <input type="Date" name="date" placeholder="dd/mm/yy" value={this.state.date} onChange={this.handleChange}></input>
          <br></br>
          <br></br>
          Write whatever you want ! ^_^
          <br></br>
          <br></br>
          <textarea type="text" rows="20" cols="70" placeholder="Just Write" name="text" value={this.state.text} onChange={this.handleChange}></textarea>
        </div>
        <div id="sub">
          <input type="submit" value="Submit" onClick={this.saveData}></input>
        </div>
        <br></br>
        <h3>you have {this.state.data.length} records!</h3>
        <h5>you don't have to check or see them just trust us with the number ^_-</h5>
          {/* <br></br>
          Show ALL of your records >_>
          <button id="show" onClick={this.search}>Show</button> */}
      </form>
    </div>)
  }
}
ReactDOM.render(<App />, document.getElementById('app'));
