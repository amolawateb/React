import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//////Following method uses react to create element

//const element = React.createElement('h1',null,"Amol, Welcome to React Programming...");
//ReactDOM.render(element,document.getElementById('root'));

const element = React.createElement(
  "div",
  null,
  React.createElement("h1", { className: "textRed" }, "Amol, Welcome to React Programming..."),
  React.createElement("h1", { className: "textGreen" }, "Understanding the Creation of Elements in React..."))

ReactDOM.render(element, document.getElementById('root'));

/////Following method uses jsx(javascript xml) to create element, and its converted to single js by babel; 
//means one extra step

/*const welcomeElement = <h1 className='textClass'>Amol, Welcome to React Programming...</h1>;

ReactDOM.render(welcomeElement,document.getElementById('root'));

const newElement = <h1 className='textClass'>Understanding the Creation of Elements in React...</h1>;

ReactDOM.render(newElement,document.getElementById('element'));

const element=(
  <div>
      <h1 className='textRed'>Amol, Welcome to React Programming...</h1>
      <h1 className='textGreen'>Understanding the Creation of Elements in React...</h1>
  </div>
);

ReactDOM.render(element,document.getElementById('root'));*/

//function compnenet------------------
var DisplayEmployeeInfo = (employee) => {
  return <div>
    <h1>Employee Details</h1>
    <p>
      <label>Employee Id: <b>{employee.Id}</b></label>
    </p>
    <p>
      <label>Employee Name: <b>{employee.Name}</b></label>
    </p>
    <p>
      <label>Employee Location: <b>{employee.Location}</b></label>
    </p>
    <p>
      <label>Employee Salary: <b>{employee.Salary}</b></label>
    </p>
    <DepartmentInfo DeptId={employee.DeptId} DeptName={employee.DeptName}></DepartmentInfo>
  </div>;
}

var DepartmentInfo = (department) => {
  return <div>
    <p>
      <label>Department Id: <b>{department.DeptId}</b></label>
    </p>
    <p>
      <label>Department Name: <b>{department.DeptName}</b></label>
    </p>
  </div>;
}

const elementEmployee = <DisplayEmployeeInfo Id="100" Name="Amol" Location="Dublin"
  Salary="45000" DeptId="1" DeptName="IT">
</DisplayEmployeeInfo>

ReactDOM.render(elementEmployee, document.getElementById("employee"));
//------------

//class compnent--------
class Employees extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }
  render() {
    return <div>
      <h1>Employee Class Details</h1>
      <p>
        <label>Employee Id: <b>{this.props.Id}</b></label>
      </p>
      <p>
        <label>Employee Name: <b>{this.props.Name}</b></label>
      </p>
      <p>
        <label>Employee Location: <b>{this.props.Location}</b></label>
      </p>
      <p>
        <label>Employee Salary: <b>{this.props.Salary}</b></label>
      </p>
      <Departments dId={this.props.DeptId} dName={this.props.DeptName}></Departments>
    </div>
  }
}

class Departments extends React.Component {
  render() {
    return <div>
      <p><label>Department Id: <b>{this.props.dId}</b></label></p>
      <p><label>Department Name: <b>{this.props.dName}</b></label></p>
    </div>
  }
}
const classEmployee = <Employees Id="100" Name="Carol" Location="Cork" Salary="50000" DeptId="200" DeptName="BA"></Employees>
ReactDOM.render(classEmployee, document.getElementById("classEmployee"));
//----------------

//state management----------
class State extends React.Component {
  state={counter:0};
  addEmployee=()=>{
    this.setState({counter:this.state.counter+1});
    }
  render() {
    return <div>
      <p><button onClick={this.addEmployee}>Add New Employee</button></p>
      <p><label>Add Employee Button is Clicked: <b>{this.state.counter}</b></label></p>
    </div>
  }
}

const stateTutorial = <State></State>
ReactDOM.render(stateTutorial, document.getElementById("state"));


class CountChar extends React.Component {
  state={message:''};
  
  onMessageChange(text){
    this.setState({message:"Message has " + text.length + " number of characters"});
    }

  render() {
    return <div>
      <p><lable>Input Characters: <input type="text" onChange={e=>this.onMessageChange(e.target.value)}></input></lable></p>
      <p><lable>{this.state.message}</lable></p>
    </div>
  }
}

const countChar = <CountChar></CountChar>
ReactDOM.render(countChar, document.getElementById("countChar"));
//--------------------