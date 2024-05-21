import { ServicesData } from "../../../utils/constant"
import Card from "./Card"

function Services() {
  return (
    <div className="w-full px-4 sm:px-16  py-24 bg-[#ffebdc]">

      <div className="text-4xl text-center mb-8  text-orange-600 font-bold">Our Services</div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 border w-fit mx-auto" >
{ServicesData.splice(0,4).map(card => <Card key={card.id} data={card}/>)}
      </div>
<div className="text-center pt-6">

      <button className="btn">Learn More</button>
</div>
    </div>
  )
}

export default Services