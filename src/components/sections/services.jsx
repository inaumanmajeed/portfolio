import React from 'react'
import { RiGlobalFill, RiQuillPenLine, RiPantoneFill } from '@remixicon/react'
import Title from '../ui/title'
import ZoomIn from '../animations/zoomIn'

const servicesList = [
  {
    id: 1,
    icon: <RiGlobalFill size={65} />,
    service_name: "Brand Identity Design",
    service_description:
      "Craft a unique brand identity that sets you apart from the competition.",
  },
  {
    id: 2,
    icon: <RiQuillPenLine size={65} />,
    service_name: "Website Design",
    service_description:
      "Design visually appealing and user-friendly websites that captivate your audience.",
  },
  {
    id: 3,
    icon: <RiPantoneFill size={65} />,
    service_name: "Application Design",
    service_description:
      "Create intuitive and engaging applications for a seamless user experience.",
  },
];


const Services = () => {
    return (
        <section id="services" className="services-area">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12 col-lg-12">
                        <Title>
                            {/* <p>Services</p> */}
                            <h2>Quality Services</h2>
                        </Title>
                    </div>
                </div>
                <div className="row">
                    {
                        servicesList.map(({ icon, id, service_description, service_name }) => {
                            return (
                                <div key={id} className="col-lg-4 col-md-6">
                                    <ZoomIn id={id}>
                                        <div className="service-item">
                                            {icon}
                                            <h4>{service_name}</h4>
                                            <p>{service_description}</p>
                                        </div>
                                    </ZoomIn>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Services