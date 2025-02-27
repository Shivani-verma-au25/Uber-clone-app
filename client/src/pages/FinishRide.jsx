import { Button } from '@/components/ui/button';
import { FaLocationArrow, FaLocationDot } from 'react-icons/fa6';
import { FcMoneyTransfer } from 'react-icons/fc';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { toast } from 'sonner';

function FinishRide({setFinishRidePanel}) {
  return (
    <div className="w-full max-w-lg md:max-w-2xl mx-auto bg-white rounded-t-lg shadow-lg p-4 sm:p-6 md:p-8">
      {/* Close Button */}
      <h2 
      onClick={() => setFinishRidePanel(false)}
       className="font-semibold text-3xl absolute left-1/2 transform -translate-x-1/2 top-2 text-gray-500 cursor-pointer">
        <MdKeyboardArrowDown />
      </h2>

      {/* Heading */}
      <h3 className="font-semibold text-xl sm:text-2xl py-6 text-center">Finish this Ride</h3>

      {/* Passenger Details */}
      <div className="flex justify-between items-center mb-4 p-3 rounded-lg bg-yellow-500">
        <div className="flex items-center gap-3">
          <img
            className="h-12 w-12 rounded-full object-cover"
            src="https://plus.unsplash.com/premium_photo-1689530775582-83b8abdb5020?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fHww"
            alt=""
          />
          <h2 className="text-sm sm:text-md md:text-lg font-medium">Random Person</h2>
        </div>
        <h5 className="text-xs sm:text-sm md:text-md font-semibold">2.2km</h5>
      </div>

      {/* Ride Details */}
      <div className="w-full space-y-4">
        <div className="flex items-center gap-4 p-2 border-b border-gray-300">
          <FaLocationDot className="text-lg sm:text-xl text-red-500" />
          <div>
            <h3 className="text-sm sm:text-md font-medium">132/43-B</h3>
            <p className="text-xs sm:text-sm text-gray-700">Gomatinagar, Lucknow</p>
          </div>
        </div>

        <div className="flex items-center gap-4 p-2 border-b border-gray-300">
          <FaLocationArrow className="text-lg sm:text-xl text-blue-500" />
          <div>
            <h3 className="text-sm sm:text-md font-medium">132/43-B</h3>
            <p className="text-xs sm:text-sm text-gray-700">Gomatinagar, Lucknow</p>
          </div>
        </div>

        <div className="flex items-center gap-4 p-2 border-b border-gray-300">
          <FcMoneyTransfer className="text-lg sm:text-xl" />
          <div>
            <h3 className="text-sm sm:text-md font-medium">₹200</h3>
            <p className="text-xs sm:text-sm text-gray-700">Cash</p>
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="mt-6 flex flex-col sm:flex-row gap-4">
        <Link  to={'/captain-home'} className="w-full sm:w-1/2">
          <Button
          onClick={() =>
          toast("go to payment gateway")
          // console.log("Event has been created")
          
          }
          
          className="w-full bg-green-700 font-semibold text-sm sm:text-md hover:bg-green-800">
            Finish Ride
          </Button>
          </Link>
      </div>
    </div>
  );
}

export default FinishRide;
