import React from 'react';
import {useContext} from 'react';
import {DoctorContext} from '../context';
import Title from './Titles';


//get all unique values
const getUnique = (items,value) => {
  return (
    [...new Set(items.map(item => item[value]))]
  )
}

export default function DoctorsFilter({doctors}) {
const context = useContext(DoctorContext);

const {handleChange,type,city,zipcode,fem,masc,debit,credit,cash,check,cartevitale,emergencies} = context;
  // console.log(context);

//get unique types
let types = getUnique(doctors,'type'); //los valores doctors y type son los parametros de la funcion getUnique
//add all
types= ['all',...types];
//map to jsx
types = types.map((item,index) => {
  return (
    <option value={item} key={index}>{item}</option>
  )
})

let cities = getUnique(doctors,'city');
cities= ['all',...cities];
//map to jsx
cities = cities.map((item,index) => {
    return (
        <option value={item} key={index}>{item}</option>
    )
})

let zipcodes = getUnique(doctors,'zipcode');
zipcodes= ['all',...zipcodes];
zipcodes = zipcodes.map((item,index) => {
  return (
    <option value={item} key={index}>{item}</option>
  )
})


  return (

    <section className="filter-container">
      <Title title="search specialists" />
      <form className="filter-form">

       {/*select specialist type */}
           <div className="form-group">
           <label htmlFor="type">specialist</label>
           <div className="city-inputs">
               <select name="type" id="type"
                      value={type}
                      className="form-control"
                      onChange={handleChange}>
                      {types}
               </select>
            </div>
           </div>
        {/*end select specialist type*/}
        {/* F M */}
        {/* <div className="form-group">
{/* 
            <div className="single-extra"> */}
              {/* <input type="checkbox" name="fem" 
                    id="fem"
                    checked={fem}
                    onChange={handleChange}/>
              <label htmlFor="fem">F</label>
              {/* <div className="single-extra"> */}
              {/* <input type="checkbox" name="masc" 
                    id="masc"
                    checked={masc}
                    onChange={handleChange}/>
              <label htmlFor="masc">M</label> */}
            {/* </div> */}
            {/* </div> */}
        {/* </div> */}
        {/*end F M type */}
        {/* --------------------------------------------- */}
        <div className="gender-group">
              <label htmlFor="city">Doctor</label>
              <div className="drGender">
              <input type="checkbox" name="fem" 
                    id="fem"
                    checked={fem}
                    onChange={handleChange}/>
              <label htmlFor="fem">F</label>
            
              
                <label htmlFor="zipcode"></label>
                <input type="checkbox" name="masc" 
                    id="masc"
                    checked={masc}
                    onChange={handleChange}/>
              <label htmlFor="masc">M</label>

        </div>
        </div>

        {/* ------------------------------------------------ */}

        {/* city and zipcode*/}
            <div className="form-group">
              <label htmlFor="city">city Or zipcode</label>
              <div className="city-inputs">
                <select type="string" name="city" value={city}
                      id="city"
                      className="city-input"
                      onChange={handleChange}>{cities}
                </select>
                <label htmlFor="zipcode"></label>
                <select type="string" name="zipcode" 
                      id="zipcode"
                      value={zipcode}
                      className="city-input"
                      onChange={handleChange}>{zipcodes}
                </select>
              </div>
            </div>
        {/*end zipcode */}

        {/*end emergencies */}
        <div className="form-group">
        <label htmlFor="emergencies">accepted</label>
          <div className="single-extra">
            <input type="checkbox" name="emergencies" 
                  id="emergencies"
                  checked={emergencies}
                  onChange={handleChange}>
            </input>
            <label htmlFor="emergencies">emergencies</label>
          </div>
                {/* checkbox cartevitale */}
        <div className="single-extra">
          <input type="checkbox" name="cartevitale" 
                id="cartevitale"
                checked={cartevitale}
                onChange={handleChange}/>
          <label htmlFor="cartevitale">carte vitale</label>
      </div>
      {/* end checkbox cartevitale */}
          </div>
        {/*end emergencies */}

          {/* cash */}
          <div className="form-group">

                  {/* checkbox debit */}
          <div className="form-group">
          <label htmlFor="debit">€ payment type</label>
          <div className="single-extra">
              <input type="checkbox" name="debit"
                    id="debit"
                    checked={debit}
                    onChange={handleChange}>
              </input>
              <label htmlFor="debit">debit</label>
          </div>
          {/* end checkbox debit */}

          {/* checkbox credit */}
          <div className="single-extra">
              <input type="checkbox" name="credit" 
                    id="credit"
                    checked={credit}
                    onChange={handleChange}>
              </input>
              <label htmlFor="credit">credit</label>
          </div>
          {/* end checkbox credit */}
          {/* checkbox cash */}
          <div className="single-extra">
              <input type="checkbox" name="cash" 
                    id="cash"
                    checked={cash}
                    onChange={handleChange}/>
              <label htmlFor="cash">cash</label>
          </div>
          {/* end checkbox cash */}
        
          {/* checkbox check */}
          <div className="single-extra">
              <input type="checkbox" name="check"
                    id="check"
                    checked={check}
                    onChange={handleChange}>
              </input>
              <label htmlFor="check">check</label>
          </div>
          {/* end checkbox check */}

          </div>
          </div>
      </form>
    </section>
  );
}
            {/* <div className="single-extra">
              <input type="checkbox" name="masc" 
                    id="masc"
                    checked={masc}
                    onChange={handleChange}/>
              <label htmlFor="masc">M</label>
            </div> */}

                    {/* price type */}
          {/* <div className="form-group">
              <label htmlFor="price"> room price ${price}</label>
              <input type="range" name="price" step="50"
                      min={minPrice} max={maxPrice} 
                      id="price"
                      value={price}
                      className="form-control"
                      onChange={handleChange} /> 
          </div> */}
        {/*end select type*/}