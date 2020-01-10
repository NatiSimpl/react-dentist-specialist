
// import React from 'react';
// import RoomsFilter from './RoomsFilter';
// import RoomsList from './RoomsList';
// import {withRoomConsumer} from '../context';
// import Loading from './Loading';

// function RoomContainer({context}) {
//   const {loading, sortedRooms, rooms} = context;
//   if (loading) {
//     return (
//     <Loading />
//     );
//   }
//   return(
//     <div>
//       <RoomsFilter rooms={rooms} />
//       <RoomsList rooms={sortedRooms}/>
//     </div>
//   );
// }

// export default withRoomConsumer(RoomContainer)

import React from 'react';
import DoctorsFilter from'./DoctorsFilter';
import DoctorsList from './DoctorsList';
import {DoctorConsumer} from '../context';
import Loading from './Loading';
export default function DoctorContainer() {
  return (
    <DoctorConsumer>
      {value => {
        const { loading, sortedDoctors, doctors } = value;
        if (loading) {
          return <Loading />;
        }
          return(
            <div>
              <DoctorsFilter doctors={doctors} />
              <DoctorsList doctors={sortedDoctors} />  {/* el props aqui es doctors={...} */}

            </div>
          );
      }}
    </DoctorConsumer>
  )
}
