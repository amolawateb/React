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
/*var DisplayEmployeeInfo = (employee) => {
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

ReactDOM.render(elementEmployee, document.getElementById("employee"));*/
//------------

//class compnent--------
class Employees extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      updatedSalary: null
    };
  }

  getUpdatedSalary = (newSalary) => {
    this.setState({ updatedSalary: newSalary });
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
      <p><label>Updated Sal:<b>{this.state.updatedSalary}</b></label></p>

      <Departments dId={this.props.DeptId} dName={this.props.DeptName}></Departments>
      <Salary BasicSalary={this.props.BasicSalary}
        HRA={this.props.HRA}
        SpclAll={this.props.SpclAll}
        onSalaryChanged={this.getUpdatedSalary}></Salary>
    </div>
  }
}

class Salary extends React.Component {
  constructor(props) {
    super(props);
    this.BasicRef = React.createRef();
    this.HraRef = React.createRef();
    this.SaRef = React.createRef();
    this.state = {
      basic: this.props.BasicSalary,
      hrs: this.props.HRA,
      sa: this.props.SpclAll
    };
  }
  updateSalary = () => {
    let newSalary = parseInt(this.BasicRef.current.value) +
      parseInt(this.HraRef.current.value) +
      parseInt(this.SaRef.current.value);

    this.props.onSalaryChanged(newSalary);
  }
  render() {
    return <div>
      <h1>Salary Details</h1>
      <p>
        <label>Basic Salary: <input type="text" ref={this.BasicRef} defaultValue={this.state.basic}></input></label>
      </p>
      <p>
        <label>HRA: <input type="text" ref={this.HraRef} defaultValue={this.state.hrs} ></input></label>
      </p>
      <p>
        <label>Special Allowance: <input type="text" ref={this.SaRef} defaultValue={this.state.sa} ></input></label>
      </p>
      <button onClick={this.updateSalary}>Update</button>
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

const classEmployee = <Employees Id="100" Name="Carol" Location="Cork" Salary="50000"
  DeptId="200" DeptName="BA"
  BasicSalary="48000" HRA="1000" SpclAll="1000"></Employees>
ReactDOM.render(classEmployee, document.getElementById("classEmployee"));
//----------------

//state management----------
/*class State extends React.Component {
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
ReactDOM.render(countChar, document.getElementById("countChar"));*/
//--------------------

//---context Compnenets

const employeeContext = React.createContext();

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Id: 101,
      Name: 'Amol',
      Location: 'Dublin',
      Salary: 45000
    };
  }
  chnageEmployeeData=()=>
  {
    this.setState({Id:102, Name:'Carol',Location:'Cork', Salary:50000});
  }
  render() {
    return <div>
      <h1>Welcome to App Components</h1>
      <p>
      </p>
      <employeeContext.Provider value={this.state}>
        <Employees1></Employees1>
      </employeeContext.Provider>
      <p>
        <button onClick={this.chnageEmployeeData}>Update Employee</button>
      </p>
    </div>
  }
}
class Employees1 extends React.Component {
  static contextType = employeeContext;
  render() {
    return <div>
      <h1>Welcome to Employee Component</h1>
      <p>
        <label>Id: <b>{this.context.Id}</b></label>
      </p>
      <p>
        <label>Name: <b>{this.context.Name}</b></label>
      </p>
      <p>
        <label>Location: <b>{this.context.Location}</b></label>
      </p>
      <Salary1></Salary1>
    </div>
  }
}

class Salary1 extends React.Component {
  static contextType = employeeContext;
  render() {
    return <div>
      <h1>Welcome to Salary Component</h1>
      <p>
        <label>Salary: <b>{this.context.Salary}</b></label>
      </p>
    </div>
  }
}

const app = <App></App>
ReactDOM.render(app, document.getElementById("app"));

//--------------------
