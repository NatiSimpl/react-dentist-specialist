import React from 'react';
import Doctor from './Doctor';

export default function DoctorsList({doctors}) {
if(doctors.length === 0){
  return (
    <div className="empty-search">
      <h3>unfortunately no rooms matched your search</h3>
    </div>
  )
}

return (
<section className="doctorslist">
  <div className="doctorslist-center"> 
    {doctors.map(item => {
      return (
        <Doctor key={item.id} doctor={item} />
      );
    })}
  </div>
</section>
  )
}
