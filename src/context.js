import React, { Component } from 'react';
// import items from "./data";
import Client from './Contentful';


const DoctorContext = React.createContext();

class DoctorProvider extends Component {
  state={
    doctors: [],
    sortedDoctors: [],
    featuredDoctors: [],
    paymentTypes: [],
    acceptedServices: [],
    loading:true,
    type: "all",
    debit: false,
    cash: false,
    check: false,
    credit: false,
    cartevitale: false,
    city: "all",
    zipcode: "all",
    fem: false,
    masc: false,
    emergencies: false,
    featured: false,
  };
  //getData
  getData = async () =>{
    try {
      let response = await Client.getEntries({
        content_type: "dentistData"
      });

  let doctors = this.formatData(response.items);
  let featuredDoctors = doctors.filter(doctor => doctor.featured === true); 
  let paymentTypes = doctors.map(doctor => [doctor.cash.toString().replace("true","cash"), doctor.check.toString().replace("true","check"), doctor.debit.toString().replace("true","debit"), doctor.credit.toString().replace("true","credit")]);
  paymentTypes = paymentTypes.map(item => item.filter(yesorno => yesorno !== "false"));
  let acceptedServices = doctors.map(doctor => [doctor.emergencies.toString().replace("true","emergencies"),doctor.cartevitale.toString().replace("true","carte vitale")]);
  acceptedServices = acceptedServices.map(item => item.filter(siono => siono !== "false"));
  console.log(paymentTypes);

    this.setState({
      doctors, 
      featuredDoctors, 
      sortedDoctors: doctors, 
      paymentTypes: paymentTypes,
      acceptedServices: acceptedServices,
      loading: false 
  });
   
    } catch (error) {
      console.log(error);
    }
  }

  componentDidMount(){
    this.getData();
  };


  formatData(items){
    let tempItems = items.map(item => {
      let id = item.sys.id;
      let images = item.fields.images.map(image => 
        image.fields.file.url);
      let doctor = { id, ...item.fields, images};
      return (
        doctor
      );
    });
    return tempItems;
  };

  getDoctor = (slug) => {
    let tempDoctors = [...this.state.doctors];
    const doctor = tempDoctors.find(doctor => doctor.slug === slug);
    return (
      doctor
    );
  }


  handleChange = event => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value; 
    const name = target.name;
    this.setState({
      [name]: value,
    }, this.filterDoctors)

    // const type = event.target.type;
    // const name = event.target.name;
    // const value = event.target.value;
    // console.log(`this is type: ${type}, this is name: ${name}, this is value: ${value}`);
    
  };

  filterDoctors = () => {
    let {doctors,type,city,zipcode,debit,credit,cash,check,fem,masc,emergencies,cartevitale} = this.state;
//all the rooms
    let tempDoctors = [...doctors];
//transform values
// payment = parseInt(payment);
// price = parseInt(price);
console.log(tempDoctors);
//filter by specialist type
if(type !== 'all'){
  tempDoctors = tempDoctors.filter(doctor => doctor.type === type)
}
//type viene de mi html tag que tiene el name="type" en DoctorsFilter.js

// filter by city
if(city !== 'all' ){
  tempDoctors = tempDoctors.filter(doctor => doctor.city === city)
}

// filter by zipcode
if(zipcode !== 'all' ){
  tempDoctors = tempDoctors.filter(doctor => doctor.zipcode === zipcode)
}

// filter by emergencies
if(emergencies ){
  tempDoctors = tempDoctors.filter(doctor => doctor.emergencies === true)
}
//filter by debit
if(debit){
  tempDoctors = tempDoctors.filter(doctor => doctor.debit === true)
}

//filter by cash
if(cash){
  tempDoctors = tempDoctors.filter(doctor => doctor.cash === true)
}

//filter by credit
if(credit){
  tempDoctors = tempDoctors.filter(doctor => doctor.credit === true)
}

//filter by check
if(check){
  tempDoctors = tempDoctors.filter(doctor => doctor.check === true)
}

//filter by carteVitale
if(cartevitale){
  tempDoctors = tempDoctors.filter(doctor => doctor.cartevitale === true)
}
//filter fem
    if(fem){
      tempDoctors =tempDoctors.filter(doctor =>  doctor.fem === true)
}  

//filter masc
    if (masc){
      tempDoctors =tempDoctors.filter(doctor =>  doctor.masc === true)
}

// change state
    this.setState({
      sortedDoctors: tempDoctors
    });
    console.log(tempDoctors);
  };



  render() {
    return (
      <DoctorContext.Provider value={{...this.state, getDoctor: this.getDoctor, handleChange: this.handleChange}}>
        {this.props.children}
      </DoctorContext.Provider>
    )
  }
};
const DoctorConsumer = DoctorContext.Consumer;
export function withDoctorConsumer(Component) {
  return function ConsumerWrapper(props) {
    return (
      <DoctorConsumer>
        {value => <Component {...props} context={value} />}
      </DoctorConsumer>
    )
  }
}

export {DoctorProvider, DoctorConsumer, DoctorContext}

//filter by price w/no if statetment al principio para mostrar todos los doctors sin filtro
// tempDoctors =tempDoctors.filter(doctor =>  doctor.price <= price)

//filter by size

// tempDoctors = tempDoctors.filter(doctor => doctor.city >= zipcode && doctor.city <= city )

// , doctor.credit.toString().replace("true","credit"), doctor.carteVitale.toString().replace("true","carte vitale")

